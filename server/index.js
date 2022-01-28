import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import router from "./routes/user.js";
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());



app.use('/posts', postRoutes);
app.use(router);

const CONNECTION_URL = 'mongodb+srv://User:projectmern@mernproject.fcdz1.mongodb.net/Mernprojectdb?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, })
.then(() => app.listen(process.env.MONGO_URI, () => console.log(`DB is Connected`)));

app.listen(PORT || 5000, () => {
    console.log('Server is listening on port 5000');
});
