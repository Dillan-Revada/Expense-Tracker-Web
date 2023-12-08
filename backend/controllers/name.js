const NameSchema = require("../models/nameModel")

exports.addName = async (req, res) => {
    const {Fullname} = req.body

    const name = NameSchema({
        Fullname,
    })

    try{
        //validations
        if(!Fullname){
            return res.status(400).json({message: 'All fields are required!'})
        }
        await name.save()
        res.status(200).json({message: 'Name Added'})
    } catch (error){
        res.status(500).json({message: 'Server Error'})
    }

    console.log(name)
}

exports.getName = async (req, res) =>{
    try {
        const names = await NameSchema.find().sort({createdAt: -1})
        res.status(200).json(names)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}