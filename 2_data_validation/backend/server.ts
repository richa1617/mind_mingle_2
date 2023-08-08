import express from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { json } from "express";

const app = express();
const prisma = new PrismaClient();
const port = 3001;
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const tweetValidator = z
  .object({
    message: z.string().max(100),
    private: z.boolean(),
  })
  .strict();

app.post("/tweets", async (req, res) => {
  const requestBody = req.body;

  const parsedBody = tweetValidator.safeParse(requestBody);

  if (parsedBody.success) {
    try {
      const newTweet = await prisma.tweet.create({
        data: parsedBody.data,
      });
      res.status(201).send(newTweet);
    } catch (error) {
      res.status(500).send({ message: "Something went wrong!" });
    }
  } else {
    res.status(400).send(parsedBody.error.flatten());
  }
});

app.listen(port, () => {
  console.log(`⚡ Server listening on port: ${port}`);
});
