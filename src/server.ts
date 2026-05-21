import express from 'express';
import type { Request, Response } from 'express';
import { Pool } from "pg"

const app = express()
const port = 9000

app.use(express.json());

//neon db connection
const pool = new Pool({
    connectionString: "postgresql://neondb_owner:npg_1HZDcMxe0AVY@ep-dark-glade-apu5y3t7-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
})

// 
// const initDB = async (): Promise<void> => {
//     try {
//         await pool.connect();
//     } catch (error) {
//         console.error(error);
//     }
// }

const initDB = async () => {
    try {
        await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        is_admin BOOLEAN DEFAULT FALSE,
        age INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    `);
        console.log("table created successfully");
    }
    catch (error) {
        console.error(error);
    }

}
initDB();



app.get('/', (req, res) => {
    res.status(200).json({
        message: "now i am learning in express js",
        status: "successfully"
    })
});

app.post('/products', async (req: Request, res: Response) => {
    console.log(req.body);
    res.status(201).json({
        message: 'product received',
        data: req.body
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})