const express=require ("express")
const http = require('http');
const path=require ('path');
const port = process.env.PORT || 5000;
const dotenv=require("dotenv")

require('dotenv').config();
const seedRouter=require('./routes/seedRoutes');
const productRouter= require('./routes/productRoutes.js');
const userRouter =require('./routes/userRoutes.js');
const orderRouter =require('./routes/orderRoutes.js');
const uploadRouter =require('./routes/uploadRoutes.js');
require('./connection')
dotenv.config();



const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/api/upload', uploadRouter);
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);


app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
);
app.use((err, req, res, next) => {
 res.status(500).send({ message: err.message });
});
server.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});