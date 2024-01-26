const {Router} = require("express");
const { getTodo, SaveTodo, UpdateTodo, DeleteTodo } = require("../controllers/TodoController");

const router = Router()

// router.get('/',(req,res)=>{
//     res.json({message:'hi there...'})
// })
router.get('/', getTodo)
router.post('/save',SaveTodo)
router.put('/update',UpdateTodo)
router.post('/delete',DeleteTodo)

module.exports=router;