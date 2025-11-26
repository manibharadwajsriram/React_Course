import React from "react";


const employees=[{
        id: 1,
        name: "Mani",
        age: 24
        },{
        id: 2,
        name: "Varun",
        age: 22
        },{
        id: 3,
        name: "Krishna",
        age: 20
    }];

function Type1List(){
    
    return(
        <ul>
            {employees.map(
                employee => (
                    <>
                        < ListItem id={employee.id} name={employee.name} age={employee.age}/>
                    </>
                )
            )}
        </ul>
    );
}

function ToDoList(){
    const Tasks=[{
        id:1,
        task:"Wake Up"
    },{
        id:2,
        task:"Fresh Up"
    },{
        id:3,
        task:"Breakfast"
    }];

    const Tasks_2=[];
    return (
        Tasks_2.length>0 ? 
        <>
            {Tasks.map(tasks =>

            <p key={tasks.id}>{tasks.task}</p>

            )}
        </>
        :
        <p>NO Tasks</p>
    );

}

function ListItem({id,name,age}){

    return (
        <li key={id}>{id+" "+name +" "+age}</li>
    );
}
export { Type1List,ToDoList} ;