import React from "react";

function GroceryList({data, handleDelete})
{
    return(
        <>
            {
               data.map((item)=>(
                <div
                key={item.id}
                style={{
                    display:"flex",
                    justifyContent:"space-between",
                    width:"40%",
                    margin:"auto,"
                }}>
                    <h1>{item.title}</h1>
                    <button style={{width:"50px",height:"25px",marginTop:"35px"}} onClick={()=>
                    {
                        handleDelete(item.id);
                    }}>Delete</button>
                </div>   
               ))
            }
        </>
    );
}
export default GroceryList;