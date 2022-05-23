import React,{useState} from "react";
import styles from "./addTask.module.css";
import Counter from "../Counter/Counter";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
    const [output, setOutput] = useState("");
    const [input, setInput] = useState([]);
   
   
   
  return (
    
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" onChange={(e)=>{
            setOutput(e.target.value)
      }}/>
      <button data-cy="add-task-button" onClick={(e)=>{
        setInput([...input,{value:output}])
      } }>Add</button>
     <Counter/>
    </div>
  );
};

export default AddTask;
