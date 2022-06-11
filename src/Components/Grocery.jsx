import React from "react";
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";
import { v4 as uuid } from 'uuid';
function Grocery()
{
  const [data,setData]=React.useState([]);

  const handleAdd=(title)=>
  {
      const item={
        title:title,
        status: false,
        id:uuid()
      };
      setData([...data,item]);
      
  }
  const handleDelete=(id)=>
  {
    const updateData=data.filter((item)=>
    
      item.id!==id
    );
    setData(updateData);
  }
    return(
      <>
      <div style={{textAlign:"center"}}>
        <h1>Grocery List</h1>
        <GroceryInput handleAdd={handleAdd}/>
        <GroceryList data={data} handleDelete={handleDelete}/>
      </div>
      </>
    );
}
export default Grocery;