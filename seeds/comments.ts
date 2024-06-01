import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("comments").del();

  // Inserts seed entries
  await knex("comments").insert([
    {
      id: 1,
      article_id: 1,
      description: "Wahh iyaaa",
    },
    {
      id: 2,
      article_id: 1,
      description: "Kok gua ngerasa ngga ya :(",
    },
    {
      id: 3,
      article_id: 3,
      description: "relate banget deh :')",
    },
  ]);
}
