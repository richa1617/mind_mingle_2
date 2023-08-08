import axios from "axios";
import { useEffect, useState } from "react";
import { z } from "zod";

const animalKind = z.union([
  z.literal("cow"),
  z.literal("sheep"),
  z.literal("chicken"),
  z.literal("pig"),
]);
const animalValidator = z.object({
  id: z.number().int(),
  name: z.string(),
  kind: animalKind,
  age: z.number().int(),
  hasBeenFed: z.boolean(),
  imgUrl: z.string().url(),
});

type Animal = z.infer<typeof animalValidator>;

const animalArray = z.array(animalValidator);

function animal() {
  const [animals, setAnimals] = useState<Animal[] | null>(null);

  useEffect(() => {
    const getAnimal = async () => {
      try {
        const response = await axios.get(
          "https://reader.mindmingle.nl/api/exercises/react/animals"
        );

        const validated = animalArray.safeParse(response.data);
        // console.log("Validated:", validated);

        if (validated.success === true) {
          setAnimals(validated.data);
          console.log(animals);
        } else {
          console.log(validated.error.flatten());
        }
      } catch (error) {
        console.log("Something went wrong");
      }
    };
    getAnimal();
  }, []);

  return (
    <>
      <h2>Animal kingdom</h2>
      {animals &&
        animals.map((e) => {
          return (
            <div key={e.id}>
              <h2>{e.name}</h2>
              <p>Age : {e.age}</p>
            </div>
          );
        })}
    </>
  );
}

export default animal;
