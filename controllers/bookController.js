const Book = require('../models/Book')

const createBook  = async(req,res) => {
    try{
        const {name,img,summary} = req.body

        const book = new Book({
            name,
            img,
            summary
        })
        await book.save();
        res.status(201).send(book);
    }catch(error){
        console.log('There is an error:',error)
        res.status(500).json({message:'server error'})
    } 
}

module.exports = {createBook};