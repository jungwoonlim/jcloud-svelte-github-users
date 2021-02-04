import * as express from "express";
import { Request, Response } from "express";
import * as cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(cors());

const prisma = new PrismaClient();
app.get("/users", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT);

console.log(`Listening on http://localhost:${PORT}`);
