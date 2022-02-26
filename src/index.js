const express = require('express');
const app = express();
const users = require('./routes/users.routes')
const path = require('path');
//middleware
const middleware = (req,res,next) => {
  let logged =false 
  if (logged) {
  next();
  }else {
    res.send("Iniciar sesion")
    console.log("hello world");
  }
}
//app.use(middleware);
//settings

app.set('port', 3000)
app.use(express.urlencoded({extended:false}))
//Statics files
app.use(express.static(path.join(__dirname,'public')));
//routes
app.use("/users",users);

app.listen(app.get('port'), ()=>{
  console.log("The server is listening on port " + app.get('port'));
})
