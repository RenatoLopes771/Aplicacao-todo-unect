import React from 'react';

function TaskComponent({ task }){
    return (
        <div className="center task" >
            <div className="taskLeft" >
                <p>{task.content}</p>
            </div>

            <div className="taskRight" >
                <button className="taskGreen" 
                alt="Marcar tarefa como concluída" 
                type="submit" >
                </button>

                <button
                className="taskRed" 
                alt="Deletar tarefa" 
                type="button"
                value={task._id}
                onClick={e => handleDelete(e.currentTarget.value)} >
                </button>
            </div>
        </div>
    );
}

export default TaskComponent;