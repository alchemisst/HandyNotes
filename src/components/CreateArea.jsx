import React, { useState } from "react";

function CreateArea(props) {

    const[note,setNote] = useState({
        titile:"",
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
      titile:"",
      content:""

      })
      event.preventDefault();
    }


  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.name}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
