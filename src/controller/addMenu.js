module.exports = (menus) =>{

    return async function (req, res) {

        try{
            const menu = req.body.menu
            const inserted = menus.insert(menu);

            res.json({
                statusCode: 201,
                contentType: 'application/json',
                body: {
                    data : inserted
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
