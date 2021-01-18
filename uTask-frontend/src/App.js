import React from 'react'; 
import beach from "./assets/beach.png";

function App() {
    return ( 
        <div>
            <section id="sectionTop">
                <h1 className="center">uTask</h1>
            
                <form className="center" post="">
                    <input type="text" required placeholder="Add uma nova tarefa" ></input>
                    <button type="submit" ></button>
                </form>

            </section>

            <section id="sectionMiddle" >
                <hr></hr>

                <h2 className="center" >TODO</h2>

                <div id="div-meio" className="center" >
                </div>

                <div id="nada" className="center" >
                    <img src={beach} alt="Foto de uma praia" className="" ></img>
                    <p>Nada por aqui!</p>
                </div>
            </section>

            <section id="sectionBottom" >
                <hr></hr>

                <h2 className="center" >DONE</h2>

                <div id="div-rodape" >
                </div>

                <div id="nada" className="center" >
                    <img src={beach} alt="Foto de uma praia" className="" ></img>
                    <p>Nada por aqui!</p>
                </div>
            </section>
        </div>
    );
}

export default App;