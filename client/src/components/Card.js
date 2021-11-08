import { useState } from 'react';
import '../App.css';
import { deleteCard, updateCard } from '../redux/action';
import { useDispatch } from 'react-redux'
import Task from './Task';


function Card({ card }) {

    const [newTask, setNewTask] = useState('');
    const dispatch = useDispatch();
    const [showInput, setShowInput] = useState(false);

    function updateCardFunc(cardToChange, newTaskList) {

        const updatedCard = {
            id: cardToChange._id,
            title: cardToChange.title,
            tasks: newTaskList
        }

        dispatch(updateCard(cardToChange._id, updatedCard))
    }

    function addNewTask() {

        const newTaskObj = {
            title: newTask,
            date: new Date()
        }
        if(newTask)  updateCardFunc(card, [...card.tasks, newTaskObj])
        setNewTask('')
        setShowInput(false)
    }

    function deleteCardFunc() {
        dispatch(deleteCard(card._id))
    }

    return (
        <>
            <div className="card p-4 m-2" style={{ width: "20rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <button type="button" className="btn btn-primary mb-2" onClick={e => setShowInput(true)}>
                        Add task
                    </button>
                    {showInput ? <div>
                        <input value={newTask} onChange={e => setNewTask(e.target.value)} type="text" className="form-control mt-2" id="exampleFormControlInput1" placeholder="Type here..." />
                        <button type="button" onClick={addNewTask} className="btn btn-warning mt-2 mb-2" >Save</button></div>
                        : <></>}

                    <Task card={card} updateCardFunc={updateCardFunc} />
                </div>
                <button onClick={deleteCardFunc} type="button" className="btn btn-danger mb-1" >
                    Delete card
                </button>
                <button onClick={() => updateCardFunc(card, [])} type="button" className="btn btn-danger" >
                    Empty card
                </button>
            </div>
        </>
    );
}

export default Card;
