import { Router } from "express";
import type {
  SearchApiResponse,
} from "../../types/mercadolibre";
import { DetailedItem } from "../../types/api";

const router = Router();

router.get<{}, SearchApiResponse>("/search", async (req, res) => {

  const { limit = 20, offset = 0 } = req.query;

  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=celular&limit=${limit}&offset=${offset}`);
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.log(error)
  }
});

router.get<{}, DetailedItem>("/details/*", async (req, res) => {

  const params: {[key: string]: string;} = req.params;

  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=celular`);
    const description = await fetch(`https://api.mercadolibre.com/items/${params['0']}/description`)
    const { results } = await response.json();
    const { plain_text } = await description.json();
    const data = results.find((item: any) => item.id === params['0']);
    res.json({
      ...data,
      plain_text
    });
  } catch (error) {
    console.log(error)
  }
});

export default router;
