//Módulos
const express = require ('express');
const path = require ('path');
const method = require ('method-override');
const app = express(); 
const method = require('method-override');

//Server Start
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => console.log('Servidor esta corriendo en http://localhost:'+app.get("port")));

// View Engine
app.set('view engine', 'ejs')
app.set("views",path.resolve(__dirname,"./views"));


//Data Configuration
<<<<<<< HEAD
app.use(express.urlencoded({ extended: false })); //para el body
app.use(method('_method')); //para metodos put y delete
=======
app.use(express.urlencoded({ extended: false })); 
app.use (method ("method")) // ?_method=PUT
>>>>>>> f281636c7c1080227240968c9810e30a491fa541

//Archivos Estáticos
app.use(express.static(path.resolve(__dirname,'../public')));

//Rutas
const mainRouter = require('./routes/mainRoutes');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
app.use('/', mainRouter);
app.use('/usuarios', userRouter);
app.use('/productos', productRouter);





// app.get('/',(req,res)=>{res.render('home')})
// app.get('/carrito',(req,res)=>{res.render('carrito')})
// app.get('/detalle',(req,res)=>{res.render('detalle')})
// app.get('/login',(req,res)=>{res.render('login')})
// app.get('/registro',(req,res)=>{res.render('registro')})


