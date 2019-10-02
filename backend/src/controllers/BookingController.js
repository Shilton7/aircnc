const Spot = require('../models/Spot')
const User = require('../models/User')
const Booking = require('../models/Booking')

module.exports = {
    async store(req, res) {

        const { date } = req.body
        const { spot_id } = req.params
        const { user_id } = req.headers

        const user = await User.findById(user_id)
        if (!user) {
            return res.status(400).json({ error: 'User does not exists' })
        }

        const spot = await Spot.findById(spot_id)
        if (!spot) {
            return res.status(400).json({ error: 'Spot does not exists' })
        }

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date
        })

        // Relationship
            await booking.populate('spot').populate('user').execPopulate();

        return res.json({ booking })
    }
}