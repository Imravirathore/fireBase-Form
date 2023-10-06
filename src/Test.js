import React from "react";
import { useState } from "react";

function Test() {
  const [activity, setActivity] = useState("");

  //  saving task into state
  const [task, setTask]= useState([])
    


  function test2(e) {
    setActivity(e.target.value);
  }

  function addActivity() {


    if(activity=='')
    {
        alert('add some data')
    }

    else
    {
        setTask([...task ,activity])
        setActivity('')

    }
        
    
   
   

  }



  return (
    <>
      <input
        type="text"
        placeholder="add some items"
        value={activity}
        onChange={test2}
      />
      <button className="btn btn-primary" onClick={addActivity}>
        ADD
      </button>

      <div>
            <ul>

            {
                task.map((value)=>{

                    return(

                            <li>{value}</li>

                    )

                })
            }
            
            </ul>
      </div>
    </>
  );
}

export default Test;
