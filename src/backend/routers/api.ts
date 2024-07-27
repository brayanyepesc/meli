import { Router } from "express";
import path from "path";
import fs from "fs";
import type {
  ItemApiResponse,
  ItemDescriptionApiResponse,
  SearchApiResponse,
} from "../../types/mercadolibre";
import { DetailedItem } from "../../types/api";

const router = Router();

router.get<{}, SearchApiResponse>("/search", async (req, res) => {
  /**
   * Mock of https://api.mercadolibre.com/sites/MLA/search?q=celular&limit=10&offset=0
   */
  const search: SearchApiResponse = JSON.parse(
    fs.readFileSync(path.resolve("src/mocks/search.json")).toString()
  );

  res.send(search);
});

router.get<{}, DetailedItem>("/details/*", async (req, res) => {
  /**
   * Mock of https://api.mercadolibre.com/items/MLA1424136641
   */
  const item: ItemApiResponse = JSON.parse(
    fs.readFileSync(path.resolve("src/mocks/item.json")).toString()
  );

  /**
   * Mock of https://api.mercadolibre.com/items/MLA1424136641/description
   */
  const description: ItemDescriptionApiResponse = JSON.parse(
    fs.readFileSync(path.resolve("src/mocks/description.json")).toString()
  );

  res.json({
    id: item.id,
    title: item.title,
    picture: item.pictures[0].url,
    description: description.plain_text,
  });
});

export default router;
