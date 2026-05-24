import express from 'express';
import type { Application, Request, Response } from 'express';

import config from './config';
import { initDB, pool } from './db';
import { productsRoute } from './module/products/products.route';

const app: Application = express()


app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }))

//neon db connection





app.get('/', (req, res) => {
    res.status(200).json({
        message: "now i am learning in express js",
        status: "successfully"
    })
});



app.use('/products', productsRoute)

app.get('/products', async (req: Request, res: Response) => {
    try {

        const result = await pool.query(`SELECT * FROM users`);
        res.status(200).json({

            status: "success",
            message: "products retrieved successfully",
            data: result.rows

        })
    } catch (error: any) {
        res.status(500).json({
            message: error.message,
            error: error

        });
    }

})

// single dynamic id
app.get('/products/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await pool.query(`SELECT * FROM users WHERE id =$1`, [id]);

        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "product not found"
            })
        }
        res.status(200).json({
            status: "success",
            message: "product retrieved successfully",
            data: result.rows[0]
        })
    }
    catch (error: any) {
        res.status(500).json({
            message: error.message,
            error: error
        })
    }
});

//updata data 

app.put('/products/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, password, age, } = req.body

    try {
        const result = await pool.query(`
       UPDATE users SET
        name=COALESCE($1,name),
        password=COALESCE($2,password),
         age=COALESCE($3,age)

     
         WHERE id=$4 RETURNING *
        `,
            [name, password, age, id]);

        if (result.rows.length) {

            res.status(200).json({
                status: "success",
                message: "product retrieved successfully",
                data: result.rows[0]
            })
        }

        // console.log(result)

    } catch (error: any) {
        res.status(404).json({
            message: error.message,
            error: error
        })
    }


})


// app.delete(/)
app.delete('/products/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const result = await pool.query(`
            DELETE FROM users WHERE id=$1
            `, [id]);

        if (result.rowCount === 0) {
            res.status(404).json({
                message: "user not fund ",
                successfuly: "false"

            })
        }
        res.status(200).json({
            success: true,
            message: "user delete successfully",
            data: {}
        })
    } catch (error: any) {
        res.status(404).json({
            message: error.message,
            error: error
        })

    }
})


export default app