import React from "react";

import { useState } from "react";
import { TextField,Button } from '@mui/material';

export default ({ addTodo }) =>{

    const [text, setText] = useState(null)

    const [id, setId]  = useState(0)

    const todoCreate = (text) => {
        
        const todoObj = {text: text, id: id}

        if(todoObj.text === undefined){
            return(-999)
        }else{

            setId(id + 1);
            addTodo(todoObj);
            
            document.getElementById('outlined-basic').value = null;
            setText();
        }
    
    }

    return(
        <div style={{
            padding:'1em',
            border:"none",
            backgroundColor:'#cfcfcf',
            borderRadius:"0.3rem"
        }}> 
        <div style={{
            display:'flex',
            justfyContent:'center'
        }}>
        
        <TextField id="outlined-basic" label="Tarefa" variant="outlined" onChange={(e) => setText(e.target.value)} fullWidth />
        <Button variant="text" onClick={ ()=> todoCreate(text) }>Add</Button>

        </div>
        </div>
    )
}