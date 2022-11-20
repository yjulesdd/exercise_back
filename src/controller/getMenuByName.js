module.exports = (menuEntity) =>{

    return async function (req, res) {

        try{
            const title = req.params.title
            const result = await menuEntity.find({'title' : {'$regex':''+title+''}})

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
