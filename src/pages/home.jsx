import React from "react";
import { Container,List } from '@mui/material';
import Form from '../Components/Form';
import TodoItem from '../Components/TodoItem';

import { useState } from "react";

export default () =>{

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const deleteTodo = (id) => {
        var filtered = todos.filter((todo)=>todo.id!==id)
        setTodos(filtered)

    }

    const editTodo = (id, editedText) => {

        var todosArray = [...todos];

        for(var i in todosArray){
            if(todosArray[i].id === id){
                todosArray[i].text = editedText
            }
        }
        setTodos(todosArray)
    }
        return(
        <Container maxWidth='xs' style={{
            marginTop:'1em',
            paddingTop:'1em',
            borderRadius:'0.3rem',
            backgroundColor:'#0404bc',
            marginBottom:"3rem"
           }}>
            <Form addTodo={addTodo}/>
              <List sx={{ marginTop:'1em' }}>
                {todos.map((todo)=>(
                    <div key={todo.id} style={{marginTop:'1rem'}}>
                        <TodoItem editTodo={editTodo} todo={todo} deleteTodo={deleteTodo}/>
                    </div>
                ))}
              </List>
           </Container>
    )
}