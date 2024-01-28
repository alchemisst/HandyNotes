import React, { useState } from "react";
import AddIcon from '@mui/icons-material/DrawOutlined';
import { Fab, Zoom } from "@mui/material";





function CreateArea(props) {
    const [expanded,setExpand] =useState(false);

    const[note,setNote] = useState({
        title:"",
        content:""
    })

    function handleChange(event){
        var newitem=event.target.value;
        var name=event.target.name;
        setNote((prevValues)=>{
            return {
                ...prevValues,
                [name]:newitem
            }
        })
    }
    function submitNote(event){
      props.addNote(note);
      setNote({ 
      title:"",
      content:""

      })
      event.preventDefault();
    }


    function expand(){
      setExpand(true);
    }

  return (
    <div>
      <form className="create-note" >
      {expanded && (<input  onChange={handleChange} name="title" placeholder="Title" value={note.title}/>)}
   
      <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows={expanded ? 3 : 1} value={note.content} />
      <Zoom in={expanded}>
      <Fab utton onClick={submitNote}>
      <AddIcon />
      </Fab> 
      </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
