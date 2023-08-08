import { z } from "zod";

const Email = z.string().email();

const emialArray = z.string().email().array();
console.log(emialArray);

const passwrod = z.string().min(8).includes("#");

const user = z.object({
  email: z.string().email(),
  password: z.string().min(8).includes("#"),
});

const cow = z.literal("cow");
const sheep = z.literal("sheep");
const chicken = z.literal("chicken");
const pig = z.literal("pig");

const animalKind = z.union([
  z.literal("cow"),
  z.literal("sheep"),
  z.literal("chicken"),
  z.literal("sheep"),
]);

const animal = z.object({
  id: z.number().min(0),
  name: z.string(),
  kind: animalKind,
  hasBeenFed: z.boolean(),
  age: z.number().min(0),
});

// console.log(
//   animal.safeParse({
//     id: 1,
//     name: "b",
//     kind: "sheep",
//     hasBeenFed: true,
//     age: 12,
//   })
// );

const arrayOfAnimalr = z.array(animal);

const Tweet = z.object({
  username: z.string().startsWith("@"),
  message: z.string().min(10).max(140),
});

const correctUserInput = {
  username: "@jack",
  message: "Bring back the bird!",
};

const faultyUserInput = {
  username: 1234,
  message: "hello",
};

const correct = Tweet.safeParse(correctUserInput);

if (correct.success) {
  console.log(correct.data);
} else {
  console.log(correct.error.flatten());
}

const faultyParsed = Tweet.safeParse(faultyUserInput);

if (faultyParsed.success) {
  console.log("SUCCES", faultyParsed.data);
} else {
  console.log("ERRORS", faultyParsed.error.flatten());
}
