import axios from "axios";
import { useEffect, useState } from "react";
import { z } from "zod";
//Create z validator object
const weatherValidator = z.object({
  date: z.string(),
  temperature: z.number(),
  weatherIcon: z.string().emoji(),
  title: z.string(),
  description: z.string(),
});

//Create a typescript type
type Weather = z.infer<typeof weatherValidator>;

// Create a validator that validates an array of weather
const weatherArrayValidator = z.array(weatherValidator);

function weather() {
  const [weather, setWeather] = useState<Weather[] | null>(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await axios.get(
          "https://reader.mindmingle.nl/api/exercises/react/weather"
        );

        const validated = weatherArrayValidator.safeParse(response.data);
        // console.log("Validated:", validated);

        if (validated.success === true) {
          console.log(validated.data); 
          setWeather(validated.data);
        } else {
          console.log(validated.error.flatten());
        }
      } catch (error) {
        console.log("Something went wrong");
      }
    };
    getWeather();
  }, []);
  //console.log(weather);
  return (
    <div>
      <h1>helo</h1>
      {weather &&
        weather.map((weather) => (
          <p key={weather.date}>
            {weather.weatherIcon} {weather.title}
          </p>
        ))} 
    </div>
  );
}

export default weather;
