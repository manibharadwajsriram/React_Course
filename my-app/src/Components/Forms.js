import React, { useState } from "react";

function Form(){
    const [form,setForm]=useState({
        name:"",
        role:"",
        subScription:"",
        isAgreed: false,

    });
    function handleChange(event){
        const {name,type,value,checked}=event.target;

        setForm(prevform => ({
            ...prevform,
            [name]: type==="checkbox"? checked : value
        }))
    }
    return(
        <>
            <label>Name: </label>
            <input 
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
            />

            <label>Role: </label>
            <select
                type="select"
                id="role"
                name="role"
                value={form.role}
                onChange={handleChange}
            >
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="guest">Guest</option>
            </select>
            <label>
                <input
                    type="radio"
                    id="subScription" 
                    name="subScription"
                    value="monthly"
                    checked={form.subScription=== "monthly"}
                    onChange={handleChange}
                />
                Monthly
            </label>
            <label>
                <input
                    type="radio"
                    id="subScription" 
                    name="subScription"
                    value="yearly"
                    checked={form.subScription=== "yearly"}
                    onChange={handleChange}
                />
                Yearly
            </label>

            <label>
                <input 
                    type="checkbox"
                    id="isAgreed"
                    name="isAgreed"
                    checked={form.isAgreed}
                    onChange={handleChange}
                />
                I am Agreed.
            </label>


            <p>
                {form.name}
                <br></br>
                {form.role}
                <br></br>
                {form.subScription}
                <br></br>
                {form.isAgreed ? "checked" :"NotChecked"}
            </p>
        </>
    );
    
}

function DisplayName(){
    const [name,setName]=useState("");

    function handleName(e){
        console.log("Event object:", e);
        console.log("Target element:", e.target);
        console.log("Value typed:", e.target.value);
        setName(e.target.value);
    }
    return(
        <>
            <form>
                <label>Name: </label>
                <input value={name} onChange={handleName}/>
            </form>

            <h1>{name}</h1>
        </>
    );
}

function NameonSubmit(){
    const [name,setName]=useState("");
    function handleName(e){
        setName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        alert(name);
    }
    return(
        <>
        <form>
            <label>Name: </label>
            <input type="text" value={name} onChange={handleName}/>
            <button  onClick={handleSubmit}>Submit</button>
        </form>
        <h1>{name}</h1>
        </>
    );
}

export {Form,DisplayName};