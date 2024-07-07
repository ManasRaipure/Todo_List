import  { createContext, useContext } from "react";
import React from "react";

export const TodoContext = createContext({
    todos : [{
        id : 1 ,
        todo: "This is A task",
        completed : false,
    }   
],
addTodo : (todo) =>{} ,
updateTodo : (id , todo) =>{},
toggleComplete : (id)=>{},
deleteTodo: (id)=>{}
})

export const TodoProvider = TodoContext.Provider



export const useTodo = () =>{
    return useContext(TodoContext)

}

