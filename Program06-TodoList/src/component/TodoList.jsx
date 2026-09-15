function TodoList() {
    const person = {
        name: "Gregorio Y. Zara",
        avatar: "https://react.dev/images/docs/scientists/7vQD0fPs.jpg",
        theme: {
            backgroundColor: "black",
            color: "pink",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center"
        }
    };

    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>

            <img
                className="avatar"
                src={person.avatar}
                alt={person.name}
            />

            <div>
                <ul>
                    <li>List 1</li>
                    <li>List 2</li>
                    <li>List 3</li>
                </ul>
            </div>
        </div>
    );
}

export default TodoList;