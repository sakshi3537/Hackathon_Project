import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import Objectives from './routes/objectives.js'
import dotenv from 'dotenv';

const app=express();
dotenv.config();


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/objectives', Objectives);

app.get('/', (req,res) => {
  res.send("Welcome to Self Tracking App")
})


const PORT = 5000;

mongoose.connect('mongodb+srv://sakshi:sakshi@cluster0.i2qhoqc.mongodb.net/test?retryWrites=true&w=majority')
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:5000`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
