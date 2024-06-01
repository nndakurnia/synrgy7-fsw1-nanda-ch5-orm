import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("articles").del();

  // Inserts seed entries
  await knex("articles").insert([
    {
      id: 1,
      title: "Jakarta Sedang Bagus Bagusnya",
      body: "Ini isi berita",
      approved: true,
    },
    {
      id: 2,
      title: "Resep Bolu Kelapa Wijen, Nikmat Dijadikan Camilan Weekend",
      body: "Ini isi berita",
      approved: false,
    },
    {
      id: 3,
      title: "Simak, Kebiasaan Seorang INFP",
      body: "Ini isi berita",
      approved: false,
    },
  ]);
}
