import { useState } from 'react';
import '../App.css';
import Card from './Card';
import { types } from '../constants/constants';
import { useDispatch, useSelector } from 'react-redux'
import { createCard, getCards } from '../redux/action';
import { useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function Dashboard() {
    const [cardTitle, setCardTitle] = useState('')
    const cards = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCards());
    }, [cards, dispatch]);

    function createNewCard() {
        if (cardTitle) dispatch(createCard({ title: cardTitle, tasks: [] }))
        setCardTitle('')
    }

    return (
        <>
            <div className="d-flex justify-content-around mt-4 flex-wrap">
                {cards.length ? cards.map((el, id) => <Card key={id} card={el} />)
                    : "No cards"}
            </div>
            <div className="d-flex justify-content-center mt-4">
                <div className="d-flex flex-column justify-constent-center" style={{ width: "300px" }}>
                    <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                        Create list
                    </button>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create new card</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label">Title for your new card</label>
                                <input value={cardTitle} onChange={e => setCardTitle(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Type here..." />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={createNewCard} className="btn btn-success" data-bs-dismiss="modal" aria-label="Close">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;