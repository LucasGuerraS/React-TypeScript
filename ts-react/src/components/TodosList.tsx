import React from "react"

const TodosList: React.FC<{ text: string}> = (props) => {
    return <li>{props.text}</li>
      
}

export default TodosList