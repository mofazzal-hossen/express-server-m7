import express from 'express';
import type { Request, Response } from 'express';
import { Pool } from "pg"

const app = express()
const port = 9000

app.use(express.json());

const pool = new Pool({
    connectionString: "postgresql://neondb_owner:npg_1HZDcMxe0AVY@ep-dark-glade-apu5y3t7-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

})

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