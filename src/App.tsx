import { useState } from "react";

interface TodoItem {
	id: number;
	todo: string;
	date: string;
}

function App() {
	const [todo, setTodo] = useState([
		{ id: 1, todo: "Hello, world!", date: "03/04/24" },
		{ id: 2, todo: "Hello, again!", date: "03/04/24" },
	]);

	return (
		<div className="container">
			<div className="todo-list">
				<h1>React Todo List</h1>
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
