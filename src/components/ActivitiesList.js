import { Button } from '@material-ui/core';
import React from 'react'
import "../css/ActivitiesList.css"
import DeleteIcon from '@material-ui/icons/Delete';
import db from '../firebase';

function ActivitiesList({key, del, contents:{task}}) {
    const remove = () => {
        db.collection("todo").doc(del).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
    return (
        <div className="activitiesList"> 
            
            <div className="workList">
            <h2>{task}</h2>
            </div>
            <Button onClick={remove}>
                <DeleteIcon />
            </Button>
            
        </div>
    )
}

export default ActivitiesList
