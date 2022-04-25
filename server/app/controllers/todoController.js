import TodoSchema from '../db/models/TodoModel.js';

class TodoController {
  async listTodo(req, res) {
    const todoList = await TodoSchema.find({}).exec();

    res.status(200).json({ todoList });
  }

  async addTodo(req, res) {
    const todo = new TodoSchema({
      userId: req.body.userId,
      text: req.body.text,
    });
    try {
      await todo.save();
      res.status(202).send('Added to list');
    } catch (err) {
      res.status(422).json({ message: err.message });
    }
  }

  async updateTodo(req, res) {
    try {
      await TodoSchema.updateOne(
        { _id: req.body.todoId },
        {
          $set: { text: req.body.updatedText },
        }
      );

      res.status(200).send('Item updated');
    } catch (err) {
      console.log(err);
    }
  }

  async deleteTodo(req, res) {
    try {
      await TodoSchema.deleteOne({ _id: req.body.todoId });
      res.status(200).send('Item deleted');
    } catch (err) {
      console.error(err);
      res.status(500);
    }
  }
}

export default new TodoController();
