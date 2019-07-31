const express=require ('express');
const app=express();
const path=require('path');
const exphbs = require('express-handlebars');
const methodOverride= require('method override');
const session = require('express-session');

//configuración
app.set('port', process.env.PORT|| 3000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir: path.join (app.get(views),'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}) );
app.set('view engine','hbs');
//Aquí van las middleware
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(session({
    secret:'my secretapp',
    resave:true,
    saveUninitialized:true
}))
//Global services

//rutas


//archivos que son estáticos


// servidor escuchando
app.listen(app.get('port'),()=>{
    console.log("Server on port ", app.get('port'));
});