import { Router, type Request, type Response } from "express";




const router = Router()

router.post('/', productsRoute.createUser)
export const productsRoute = {
    createUser
}