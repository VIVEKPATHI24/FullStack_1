import { useState } from "react";

export const UseStateTest = () => {
  const [count, setValue] = useState(0);

  const setDecrement = () => {
    setValue((c) => c - 1);
    // c here is for the update function
    // setValue(c => c - 1);
  };

  const setIncrement = () => {
    setValue((c) => c + 1);
    // setValue(c => c + 1);
  };

  const setreset = () => {
    setValue((c) => (c = 0));
  };

  const [profile, setProfile] = useState({
    name: "",
    age: "",
    weight: "",
    height: "",
  });

  function handleChangeName(event) {
    setProfile((prevProfile) => ({
      ...prevProfile,
      name: event.target.value,
    }));
  }

  function handleChangeAge(event) {
    setProfile((prevProfile) => ({
      ...prevProfile,
      age: event.target.value,
    }));
  }

  function handleChangeHeight(event) {
    setProfile((prevProfile) => ({
      ...prevProfile,
      height: event.target.value,
    }));
  }

  const setDataReset = () =>{
    setProfile((prevProfile) => ({
      ...prevProfile,
      height: ""
    }));
    setProfile((prevProfile) => ({
      ...prevProfile,
      age: ""
    }));
    setProfile((prevProfile) => ({
      ...prevProfile,
      name: ""
    }));
  }


  return (
    <div>
      <div className="container">
        <p> {count}</p>
        <button className="button" onClick={setIncrement}>
          Increment
        </button>
        <button className="button" onClick={setDecrement}>
          Decrement
        </button>
        <button className="button" onClick={setreset}>
          Reset
        </button>
      </div>

      <div>
        <p>{/* name is : {profile.name} and age is : {profile.age} */}</p>
      </div>

      <div>
        <input
          value={profile.name}
          onChange={handleChangeName}
          placeholder="Enter Name"
        ></input>
        <p>The Name now is is : {profile.name} </p>

        <input
          value={profile.age}
          onChange={handleChangeAge}
          placeholder="Enter Age"
          type="number"
        ></input>
        <p>The Age now is is : {profile.age} </p>

        <input
          value={profile.height}
          onChange={handleChangeHeight}
          placeholder="Enter height in kgs"
          // type = "number"
        ></input>
        <p>The Height now is is : {profile.height} </p>
      </div>

      <div> Count value set at the top is : {count}</div>

      <div>
        <button className="button" onClick={setDataReset}>
          Reset data
        </button>
      </div>
    </div>
  );
};
