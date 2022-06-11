import React from "react";

function GroceryInput({handleAdd})
{
    const [title,setTitle]=React.useState("");
    return(
        <>
        <input
        type="text"
        placeholder="Add Grocery"
        value={title}
        onChange={(event)=>setTitle(event.target.value)}
        />
        <button onClick={()=>
        {
            handleAdd(title);
            setTitle("");
        }}>Add Grocery</button>
        </>
    );
}
export default GroceryInput;