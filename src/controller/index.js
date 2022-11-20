module.exports = (menus) => {
    
        //const menuEntity = require('../entity/menu')();
        const addMenu= require('./addMenu')(menus);
        const getMenuById = require('./getMenuById')(menus)
        const getAll = require('./getAll')(menus)
        const updateMenu = require('./updateMenu')(menus)
        const getByName = require('./getMenuByName')(menus)

        return  {
            addMenu,
            getMenuById,
            getAll,
            updateMenu,
            getByName
        }
}
