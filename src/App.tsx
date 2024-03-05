import { useState } from "react";

interface TodoItem {
	id: number;
	todo: string;
	date: string;
}

interface TodoList extends Array<TodoItem> {}

let nextId = 0;

function App() {
	const [todo, setTodo] = useState<TodoList>([]);
	const [newTodo, setNewTodo] = useState("");

	function handleNewTodoEvent(data: TodoItem) {
		setTodo([...todo, data]);
		setNewTodo("");
	}

	return (
		<div className="container">
			<div className="todo-list">
				<h1>React Todo List</h1>
				<input
					type="text"
					placeholder="New todo"
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
				/>
				<button
					onClick={() =>
						handleNewTodoEvent({
							id: nextId++,
							todo: newTodo,
							date: "03/05/24",
						})
					}
				>
					Add item
				</button>
				<ul>
					{todo.map((item: TodoItem) => {
						return <li key={item.id}>{item.todo}</li>;
					})}
				</ul>
			</div>
		</div>
	);
}

export default App;
