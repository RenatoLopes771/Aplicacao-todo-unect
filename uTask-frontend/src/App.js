import React, { useState, useEffect } from 'react'; 
import api from './services/api'; // Axios

// Imagens ---
import beach from "./assets/beach.png";
// -----------

function App() {

    const [tasks, setTasks] = useState([]);         // Tasks não feitas
    const [tasksDone, setTasksDone] = useState([]); // Tasks feitas

    const [tarefa_input , setTarefa_input] = useState(''); // Inputs no form

    useEffect(() => {   // Mostra as tasks
        async function loadTasks() {
            function equalsTrue(entry){
                return entry.done === true; 
            }

            function equalsFalse(entry){
                return entry.done === false;
            }

            const response = await api.get("/items/read");
        
            setTasks((response.data).filter(equalsTrue));
            setTasksDone((response.data).filter(equalsFalse));
        }

        loadTasks();
    }, []);

    async function handleSubmit(e){ // Criar nova task
        e.preventDefault();

        const response = await api.post("/items/create", 
        {
            "content": tarefa_input,
            "done": true
        })

        console.log(response.data); // Temporário
        setTarefa_input("");

        setTasks([...tasks, response.data]);
    }

    async function handleDelete(id){
        function taskRemoval(array){
            return array._id !== id;
        }


        const response = await api.delete("/items/delete", 
        {
            "id": id
        })

        console.log(response);

        setTasks(tasks.filter(taskRemoval));
        setTasksDone(tasksDone.filter(taskRemoval));
        
    }

    const praiaNada =
        // Quando não tem tasks
        <div id="nada" className="center" >
            <img src={beach} alt="Foto de uma praia" className="" ></img>
            <p>Nada por aqui!</p>
        </div>;

    return ( 
        <div>
            <section id="sectionTop">
                <h1 className="center">uTask</h1>

                <form className="center" onSubmit={handleSubmit} >
                    <input 
                    type="text"
                    required 
                    placeholder="Add uma nova tarefa"
                    pattern=".{1,48}"
                    title="Entrada deve ter no máximo 48 caracteres"
                    value={tarefa_input}
                    onChange={e => setTarefa_input(e.target.value)} >
                    </input>
                    <button type="submit" ></button>
                </form>

            </section>

            <section id="sectionMiddle" >
                <hr></hr>

                <h2 className="center" >TODO</h2>

                <div id="div-meio" >
                    {tasks.length > 0 && tasks.map(task => (
                        <div key={task._id} className="center task" >
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
                    ))}

                    {tasks.length === 0 && praiaNada }
                </div>
            </section>

            <section id="sectionBottom" >
                <hr></hr>

                <h2 className="center" >DONE</h2>

                <div id="div-rodape" >
                    {tasksDone.length > 0 && tasksDone.map(task => (
                        <div key={task._id} className="center task taskD" >
                            <div className="taskLeft" >
                                <p><s>{task.content}</s></p>
                            </div>
        
                            <div className="taskRight" >
                                <button
                                type = "submit"
                                 >
                                </button>
                            </div>
                        </div>
                    ))}

                    {tasksDone.length === 0 && praiaNada }
                </div>
            </section>
        </div>
    );
}

export default App;