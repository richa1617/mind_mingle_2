import axios from "axios";
import { useEffect, useState } from "react";
import { z } from "zod";

// Create a weatherValidator
const weatherValidator = z.object({
  date: z.string(),
  temperature: z.number().int(),
  weatherIcon: z.string(),
  title: z.string(),
  description: z.string(),
});

// Get the type from the validator
type Weather = z.infer<typeof weatherValidator>;

// Create a validator that validates an array of weather
const weatherArrayValidator = z.array(weatherValidator);

const Weather = () => {
  const [weather, setWeather] = useState<Weather[] | null>(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await axios.get(
          "https://reader.mindmingle.nl/api/exercises/react/weather"
        );
        // Validate the weather data from the API
        const validated = weatherArrayValidator.safeParse(response.data);

        if (validated.success) {
          setWeather(validated.data); // Here we know for sure that the data has the correct format and types
        } else {
          console.log(validated.error.flatten()); // Log the errors otherwise
        }
      } catch (error) {
        console.log("Something went wrong");
      }
    };
    getWeather();
  }, []);
  return (
    <main>
      <h1>Weather</h1>
      {weather &&
        weather.map((weather) => (
          <p key={weather.date}>
            {weather.weatherIcon} {weather.title}
          </p>
        ))}
    </main>
  );
};

export default Weather;
