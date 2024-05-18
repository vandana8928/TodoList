import React, { useState } from "react";

const Todolist = () => {
  const [activity, setActivity] = useState("");
  const [list, setList] = useState([]);

  // Function to add a new activity to the list
  function addActivity() {
    if (activity.trim() === "") {
        alert("Activity cannot be empty.");
        return;
      }
    setList((prevList) => {
      const updatedList = [...prevList, activity];
      console.log(updatedList);
      return updatedList;
    });
    setActivity(""); // Reset activity input
  }

  // Function to remove an activity from the list
  function removeActivity(index) {
    const updatedList = list.filter((elem, id) => id !== index);
    setList(updatedList);
  }
  function removeAll(){
    setList([])

  }

  return (
    <div className="container">
      <div className="todo">
        <h1>My To-Do List</h1>
        <p>Made By vandana Yadav</p>
        <input
          type="text"
          placeholder="Enter your task"
          value={activity}
          required
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        <p>Here is my to-do list:</p>
        {list.length > 0 &&
          list.map((data, i) => (
            <div className="list-item" key={i}>
              <div className="list-record">
                <p className="list-data">{data}</p>
                <button onClick={() => removeActivity(i)}>Remove (-)</button>
              </div>
            </div>
          ))}
          {list.length>=1 && <button onClick={removeAll}>remove all</button>}
      </div>
   
    </div>
  );
};

export default Todolist;
