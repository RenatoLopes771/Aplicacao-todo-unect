import React, { useState, useEffect } from 'react'; 
import api from './services/api';

// Imagens ---
import beach from "./assets/beach.png";
//import red from "./assets/"
// -----------

function App() {
    const [tasks, setTasks] = useState([]);

    const [tarefa_input , setTarefa_input] = useState('');

    useEffect(() => {
        async function loadTasks() {
            const response = await api.get("/items/read");
        
            setTasks(response.data);
            console.log(tasks)
        }

        loadTasks();
    }, []);

    async function handleSubmit(e){ // Criar
        e.preventDefault();

        const response = await api.post("/items/create", 
        {
            "content": tarefa_input,
            "done": true
        })

        console.log(response.data);
        setTarefa_input("");
    }

    return ( 
        <div>
            <section id="sectionTop">
                <h1 className="center">uTask</h1>

                <button id="refresh" >refresh!</button> {/* temporário */}
            
                <form className="center" onSubmit={handleSubmit} >
                    <input 
                    type="text" 
                    required 
                    placeholder="Add uma nova tarefa"
                    pattern="[.]{1,48}"
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
                    {/*  {tasks.map(task => (
                        <p>{tasks.id}</p>
                    ))};    */}
                </div>

                {/*

                Não feita

                <div className="center task" >
                    <div className="taskLeft" >
                        <p>C o m p r r r r r r r r r r r a a a a a a a a aa</p>
                    </div>

                    <div className="taskRight" >
                        <button className="taskGreen" alt="" ></button>
                        <button className="taskRed" alt="" ></button>
                    </div>
                </div>

                Feita

                <div className="center task taskD" >
                    <div className="taskLeft" >
                        <p><s>C  r r a a a a a aa</s></p>
                    </div>

                    <div className="taskRight" >
                        <button></button>
                    </div>
                </div>

                Nada (praia)
                
                <div id="nada" className="center" >
                    <img src={beach} alt="Foto de uma praia" className="" ></img>
                    <p>Nada por aqui!</p>
                </div>
                */}

            </section>

            <section id="sectionBottom" >
                <hr></hr>

                <h2 className="center" >DONE</h2>

                <div id="div-rodape" >
                </div>
            </section>
        </div>
    );
}

export default App;