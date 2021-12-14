import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import classNames from "classnames";
import Modal from "./components/Modal";

export type CharType = {
    created: any
    episode: any
    gender: any
    id: number
    image: string
    location: any
    name: string
    origin: any
    species: string
    status: string
    type: string
    url: string
}


const App: React.FC = () => {
    const initialState: CharType | any = {};
    const [data, setData] = useState([])
    const [share, setShare] = useState(initialState)
    const [toggleModal, setToggleModal] = useState(false)
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character').then(res => setData(res.data.results))

    }, [])

    function shareChar(index: number) {
        setShare(data[index])
        setToggleModal(true)
    }

    console.log(data)



    return (
        <div className="container-sm mt-5">
            <header className="App-header">
                <h1>Rick & Morty</h1>
                {
                    toggleModal && <Modal setToggleModal={setToggleModal} share={share}/>
                }

            </header>
            <main>

                <div className="row row-cols-4   row-cols-md-2 g-4 m-auto">
                    {
                        data.map((c: CharType, index: number) => <div key={c.id} className="card m-2"
                                                                      style={{maxWidth: 308}}>
                            <div className="row ">
                                <img src={c.image} className="img-fluid rounded-start" alt={c.name}/>
                                <div className="card-body">
                                    <h5 className="card-title">{c.name}</h5>
                                    <p className="card-text">
                                        status: <span className={classNames({
                                        "badge bg-secondary": c.status === 'unknown',
                                        "badge bg-success": c.status === 'Alive',
                                        "badge bg-danger": c.status === 'Dead',
                                    })}> {c.status}</span> <br/>
                                        species: {c.species}<br/>
                                        gender: {c.gender}<br/>
                                        {c.type ? `type: ${c.type} ` : ''}
                                    </p>
                                    <button onClick={() => shareChar(index)} className="btn btn-success">Show more
                                    </button>
                                </div>

                            </div>
                        </div>)
                    }
                </div>

            </main>
        </div>
    );
}

export default App;
