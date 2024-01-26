const TodoModel = require('../Model/TodoModel')

module.exports.getTodo = async(req,res)=>{
    const toDO =await TodoModel.find()
    res.send(toDO)
}

module.exports.SaveTodo = async(req,res)=>{
    const {text} = req.body

    TodoModel
    .create({text})
    .then((data)=>{
        console.log('Added Successfully...')
        console.log(data)
        res.send(data)
    })    
} 

module.exports.UpdateTodo = async(req,res)=>{
    const {_id, text} =req.body
    
    TodoModel
    .findByIdAndUpdate(_id,{text})
    .then(()=>{res.send('Update Successfully...')})
    .catch((err)=>console.log(err))
}

module.exports.DeleteTodo = async(req,res)=>{
    const {_id} =req.body
    
    TodoModel
    .findByIdAndDelete(_id)
    .then(()=>{res.send('Delete Successfully...')})
    .catch((err)=>console.log(err))
}