import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  
  const [note,setNote] = useState([])

  function handleAdd(item){

    setNote((prevValues)=>{
      return [
        ...prevValues,
        item
      ]
    })
   
  }

  function handleDelete(itemIndex){
    setNote((prevValues)=> {
      return prevValues.filter((item,index)=>{ return index!==itemIndex;})
                                })
    }

  return (
    <div>
      <Header />
      <CreateArea addNote={handleAdd} />
      {note.map((data,index)=>{ return (<Note key={index} id={index} title={data.title} content={data.content} onDelete={handleDelete} />)})}
      <Footer />
    </div>
  );
}

export default App;
