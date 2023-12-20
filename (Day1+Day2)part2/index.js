import express from 'express';
import Connection from './database/db.js';
import router from './Routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
const app=express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({extended:true}));
app.use('/',router);

app.use(bodyParser.urlencoded({ extended: true }));
const PORT=9000;
Connection();
app.listen(PORT,()=>console.log(`Server is running successfully on PORT ${PORT}`));