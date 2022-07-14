import React, { useRef } from "react";

const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const sumbitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const eneteredText = todoTextInputRef.current!.value;

    if (eneteredText.trim().length === 0) {
      return;
    }

    
  };

  return (
    <form onSubmit={sumbitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef}></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
