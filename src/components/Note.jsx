

function Note(props){
    return (
        <div className="note">
            <h1 className="noteh1">{props.title}</h1>
            <p className="notep">{props.content}</p>
        </div>
    )
}

export default Note;