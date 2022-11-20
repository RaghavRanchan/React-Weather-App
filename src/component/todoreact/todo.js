import React,{ useState,useEffect } from 'react';
import "./style.css"
//get the local storage data
const getLocalData=()=>
{
    const lists=localStorage.getItem("mytodolist");
    if(lists){
        return JSON.parse(lists);
    }
    else
    {

        return [];
    }
}
const Todo = () => {
    const [inputData, setinputData]=useState("");
    const[items,setitems]=useState(getLocalData());
    const[isEditItem, setisEditItem]=useState("");
    const[toggleButton, settoggleButton]=useState(false);
    // add the items fucntion
    const addItem = ()=>{
        if(!inputData){
            alert('Please Fill the Tasks');

        }else if(inputData && toggleButton){
            setitems(
              items.map((curElem)=>{
                if(curElem.id===isEditItem){
                    return{...curElem,name:inputData};
                }
                return curElem;
              })
            );
            setinputData([]);
            setisEditItem(null);
            settoggleButton(false);
        }
        else{
         const myNewInputData = {
            id:new Date().getTime().toString(),
            name: inputData,
         }
            setitems([...items,myNewInputData]); 
            setinputData("");

        }
    };
    //edit item
    const editItem=(index)=>{
        const item_todo_edited=items.find((curElem)=>{
            return curElem.id===index;
        });
        setinputData(item_todo_edited.name);
        setisEditItem(index);
        settoggleButton(true);

    };
    //deleteitmes
    const deleteItem=(index)=>{
        const updatedItem=items.filter((curElem)=>{
            return curElem.id !== index;
        });
        setitems(updatedItem);
    }
    ;
    //remove all
    const removeAll= ()=>{
    setitems([]);
    };

    //adding local storage
    useEffect(() => {
        localStorage.setItem("mytodolist",JSON.stringify(items))
    })



  return (
    <>
    <div className="main-div">
        <div className="child-div">
            <figure>
                <img src="./images/todo.svg" alt="todologo"/>
                <figcaption>Add Your List Here</figcaption>
            </figure>
            <div className="addItems">
                <input type="text"placeholder="AddItems"
                className="form-control"
                value={inputData}
                onChange={(event)=>setinputData(event.target.value)}
                />
                {toggleButton ? (<i className="far fa-edit add-btn" onClick={addItem}></i>): 
                 <i className="fa fa-plus add-btn" onClick={addItem}></i>}
             



            </div>
            <div className="showItems">
                {
                items.map((curElem, index) =>{
                    return(
                        <div className="eachItem" key={curElem.id}>
                        <h3>{curElem.name}</h3>
                        <div className="todo-btn">
                        <i className="far fa-edit add-btn" onClick={()=>editItem(curElem.id)}></i>
                        <i className="far fa-trash-alt add-btn" onClick={() =>deleteItem(curElem.id)}></i>
                        </div>
                            </div> 
                    )
                })

                }
             
            </div>
            <div className="showItems">
                <button className="btn effect04" data-sm-link-text="Remove All"
                onClick={removeAll}>
                   <span>Check List</span> 
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Todo;