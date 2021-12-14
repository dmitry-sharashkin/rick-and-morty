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
        <div className="container-sm ">
            <header className="App-header">
                <img className='headerLogo'
                    src='https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUmVLxeatH508rcDIJJz2cyvcGOzvAth5IzI5MrAJKYF_Od9t-t05i6neGRE8GUuTXqK_PwaWrp4PtcgHCq5FcrIJ32JKfRUPc4w.png?r=a66'/>
                {
                    toggleModal && <Modal setToggleModal={setToggleModal} share={share}/>
                }

            </header>
            <main className='mt-3'>

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
                                        type: {c.type ? `${c.type} ` : ''}
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
