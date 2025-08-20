import Todo from "../modules/todo.module.js";


export async function handleCreateTodo(req, res) {
    try {
        const body = req.body;

        const todos = await Todo.create(req.body);
        if(!body){
            return res.status(400).json({message: "Todo data is required!"});
        }

        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({message: "Internal server error!"});
        console.log(`error in todo controller ${error}`)
    }
};

export async function handleGetAllTodos(req, res) {
    try {
        const todos = await Todo.find();

        res.status(200).json(todos)
    } catch (error) {
        res.status(500).json({message: "Internal server error!"});
        console.log(`error in todo controller ${error}`)
    }
};

export async function handleGetTodoById(req, res) {
    try {
        const { id }= req.params;

        const todo = await Todo.findById(id);

        if(!todo){
            return res.status(404).json({message: "Todo not found!"});
        }

        res.status(200).json(todo)
    } catch (error) {
        res.status(500).json({message: "Internal server error!"});
        console.log(`error in todo controller ${error}`)
    }
};

export async function handleUpdateTodo(req, res){
    try {
        const {id} = req.params;

        const updates = req.body;

        const todo = await Todo.findByIdAndUpdate(id, updates, {new: true});

        if(!todo){
            return res.status(404).json({message: "Todo not found!"});
        }
        

        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({message: "Internal server error!"});
        console.log(`error in todo controller ${error}`)
    }
};

export async function handleDeleteTodo(req, res){
    try {
        const {id} = req.params;

        await Todo.findByIdAndDelete(id);

        res.status(204).json({message: "Task deleted successfully"})
    } catch (error) {
        res.status(500).json({message: "Internal server error!"});
        console.log(`error in todo controller ${error}`)
    }
};