module.exports = (menus) =>{

    return async function (req, res) {

        try{
            const menu = req.query.menu
            const founded = await menus.findOne({$loki : parseInt(menu.id)})

            if(founded){
                 founded.title = menu.title || founded.title 
                 founded.preparationTime = menu.PreparationTime || menu.PreparationTime
                 founded.picture = menu.picture || founded.picture
            }

            //const res = await menuEntity.update(menu)

            const result = await founded.save()

            res.json({
                statusCode: 201,
                contentType: 'application/json',
                body: {
                    data : result
                }
            })

        }catch(err){

            res.json({
                statusCode: 404,
                contentType: 'application/json',
                body: {
                    error : err.message
                }
            })
        }
    }
}
