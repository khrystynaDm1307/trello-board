import '../App.css';
import moment from "moment";

function Task({ card, updateCardFunc }) {

    function deleteTask(taskId) {

        const newArray = card.tasks.filter((el, id) => id !== taskId)
        updateCardFunc(card, newArray)
    }

    function dragStartHandler(e, card, task) {
        localStorage.setItem("card", JSON.stringify(card))
        localStorage.setItem("task", JSON.stringify(task))
        // setCurrentCard(card)
        // setCurrentTask(task)
    }
    function dragOver(e) {
        e.preventDefault()
    }

    function drop(e, card, task) {

        e.preventDefault()

        const currentCard = JSON.parse(localStorage.getItem("card"))
        const currentTask = JSON.parse(localStorage.getItem("task"))

        if (card._id == currentCard._id) {

        }
        else {
            const currentIndex = currentCard.tasks.indexOf(currentTask)
            const arrFromCard = currentCard.tasks
            arrFromCard.splice(currentIndex, 1)

            updateCardFunc(currentCard, arrFromCard)

            const dropIndex = card.tasks.indexOf(task)
            let arrToCard = card.tasks
            arrToCard.splice(dropIndex + 1, 0, currentTask)

            updateCardFunc(card, arrToCard)
        }

        localStorage.removeItem("card")
        localStorage.removeItem("task")

    }

    function getIntervalOfTime(publishedDate) {
        if (!publishedDate) return "published..."
        return moment.duration(moment().diff(publishedDate)).humanize() + " ago";
    }

    return (
        <div>
            {card.tasks.map((task, id) =>
                <div className="card mt-2 mb-2"
                    key={id}
                    onDragStart={e => dragStartHandler(e, card, task)}
                    draggable={true}
                    onDrop={e => drop(e, card, task)}
                    onDragOver={e => dragOver(e)}
                >

                    <div className="card-body  d-flex" >
                        <div>
                            <h5 className="card-title">{task.title}</h5>
                            <p>{getIntervalOfTime(task.date)}</p>
                        </div>
                        <div onClick={() => deleteTask(id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>
                    </div>
                </div>)}
        </div>
    );
}

export default Task;