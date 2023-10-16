import express, { Express, Request, Response } from "express";

const app: Express = express();
const PORT = 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
