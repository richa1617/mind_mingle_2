import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { json } from "express";

const app = express();
const prisma = new PrismaClient();
const port = 3001;
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});






app.listen(port, () => {
  console.log(`⚡ Server listening on port: ${port}`);
});
