import express, { Express, Response } from "express";
import knex from "knex";
import { Model } from "objection";
import { ArticlesModel } from "./model/article.model";
import { CommentsModel } from "./model/comment.model";
const dotenv = require("dotenv");
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const knexInstance = knex({
  client: "pg",
  connection: {
    user: process.env.USER as string,
    password: process.env.PASSWORD,
    port: 5432,
    host: "127.0.0.1",
    database: "latihan_orm"
  }
});

Model.knex(knexInstance);

app.get("/", (_, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/articles", async (_, res: Response) => {
  // menampilkan kolom title dan body saja
  // const articles = await ArticlesModel.query().select('title', 'body');
  const articles = await ArticlesModel.query().withGraphFetched('comments');

  res.json({ data: articles });
});

app.get("/comments", async (_, res: Response) => {
  const comments = await CommentsModel.query().withGraphFetched('articles');

  res.json({ data: comments });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
