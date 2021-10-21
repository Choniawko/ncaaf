import express, { Request, Response, Application } from "express";

const app: Application = express();

const PORT = process.env.PORT || 8000;

app.get("/", (_: Request, res: Response): void => {
  res.send("Typescript server here!");
});

app.listen(PORT, (): void => {
  console.log(`Server Running here 👉 https://localhost:${PORT}`);
});
