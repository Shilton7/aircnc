const User = require('../models/User')

// metodos existentes index,show,store,update,destroy
module.exports = {
    async store(req, res) {

        //usando desestruturação ou usar const email = req.body.email 
        const { email } = req.body

        let user = await User.findOne({ email })
        
        if (!user){
            user = await User.create({ email })
        }

        return res.json(user)
    }
}