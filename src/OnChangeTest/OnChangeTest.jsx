import { useState } from "react"

export const OnChangeTest=()=>{

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")

    function handleChangeName(event){
        setName(event.target.value);
    }

    function handleChangeAge(event){
        setAge(event.target.value);
    }

    function handleChangeRadio(event){
        setGender(event.target.value);
    }

    return (

        <div>
            <input value={name} onChange={handleChangeName} placeholder="Enter Name"></input>
            <p>The Name is : {name} </p>
            <br></br>

            <input value={age} onChange={handleChangeAge} placeholder="Put Age" type="number"></input>
            <p>The Age is : {age} </p>
            <br></br>

            <label>
                <input type="radio" value = "Male"
                checked = {gender==="Male"}
                onChange={handleChangeRadio} ></input>
                Male
            </label>
            <label>
                <input type="radio" value = "Female"
                checked = {gender==="Female"}
                onChange={handleChangeRadio} ></input>
                Female
            </label>
            <p>The gender is : {gender}</p>


        </div>
    )
}