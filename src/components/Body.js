import { Button } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import "../css/Body.css"
import AddIcon from '@material-ui/icons/Add';
import ActivitiesList from "./ActivitiesList"
import db from '../firebase';
import firebase from "firebase";

function Body() {
const [input, setInput] = useState("");
const [tasks, setTasks] = useState([]);

useEffect(() => {
    //run once when app component is loading
    db.collection("todo")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTasks(
          snapshot.docs.map((doc) => ({ id: doc.id, content: doc.data() }))
        );
      });
  }, []);
  console.log(tasks)

const add = (e) => {
    e.preventDefault();
    db.collection("todo").add({
        task: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInput("");
}


    return (
        <div className="body">
            <div className="body__app">
            <h2>TO-DO APP</h2>
            <form>
              <div className='form__input'></div>
                <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                    <Button onClick={add} type="submit">
                        <AddIcon />
                    </Button>
            </form>
            <div className="body__tasks">
            
          {tasks.map(({ id, content }) => (
            <ActivitiesList key={id} del={id} contents={content} />
          ))}
            </div>
            
            </div>
            
        </div>
    )
}

export default Body
