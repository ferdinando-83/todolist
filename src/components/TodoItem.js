import React from "react";

function TodoItem() {

    const styles = {
        color: "#111"
    };

    return (
        <div className={"todo-item"}>
            <input type={"checkbox"}/>
            <p style={styles}>Placeholder text here</p>
        </div>
    )
}

export default TodoItem;