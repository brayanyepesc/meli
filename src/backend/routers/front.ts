import { Router } from "express";
import { App } from "../../frontend/components/App";
import { renderComponent } from "../middlewares/renderComponent";
import { ProductDetails } from "../../frontend/components/pages/ProductDetails";
import { Cart } from "../../frontend/components/pages/Cart";

const router = Router();

router.use(renderComponent);

router.get("/cart", async (req, res) => {
  res.renderComponent(Cart, {});
});

router.get("/products/*", async (req, res) => {
  res.renderComponent(ProductDetails, {});
});

router.get("/", async (req, res) => {
  res.renderComponent(App, {});
});


export default router;
