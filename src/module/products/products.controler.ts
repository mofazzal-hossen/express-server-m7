import { Router, type Request, type Response } from "express";
import { pool } from "../../db";
import { productsRoute } from './products.route';




const createUser = async (req: Request, res: Response) => {
    // console.log(req.body);
    const { name, email, password, is_admin, age } = req.body;
    const result = await pool.query(`INSERT INTO users (name, email, password, is_admin, age) VALUES ($1, $2, $3, $4, $5) RETURNING *`, [name, email, password, is_admin, age]);
    console.log(result.rows[0]);
    res.status(201).json({
        message: 'product created successfully',
        data: req.body
    });
};

export const productsRoute = Router;