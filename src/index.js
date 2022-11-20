(async function(){

    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors'); 
    const app = express();
    
    
    app.use(cors());
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))
    
    // parse application/json
    app.use(bodyParser.json())
    
    
    const loki = require('lokijs')
    var db = new loki('menu.db');
    var menus = db.addCollection('menus');

    const menuController = require('./controller/index')(menus)


    app.put('/menu', menuController.addMenu)
    app.get('/menu/id/:id', menuController.getMenuById)
    app.get('/menus', menuController.getAll)
    app.get('/menu/title/:title', menuController.getByName)
    
    app.listen(9400, function () {
        console.log('app listen port'+ 9400);
    })
    
    module.exports = app

})()

