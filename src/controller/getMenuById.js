module.exports = (menus) =>{

    return async function (req, res) {

        try{
            const id = req.params.id
            const result = await menus.findOne({$loki : parseInt(id)})

            res.json({
                statusCode: 200,
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
