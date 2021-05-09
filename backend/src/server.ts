import express from "express";
import "reflect-metadata";
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.listen(3333, () => {
  console.log("Rodando na porta 3333"); 
});