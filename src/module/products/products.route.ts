import { Router } from "express";
import { createUser } from "./products.controler";

const router = Router();

router.post('/', createUser);

export const productsRoute = router;
