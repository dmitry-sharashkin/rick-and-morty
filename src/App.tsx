import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import classNames from "classnames";

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
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character').then(res => setData(res.data.results))

        console.log(data)
    }, [])

    function shareChar(id: number) {
        setShare(data[id])

    }

    console.log(share)

    const customPopup:any = {
        maxWidth: 600,
        position: "fixed",
        zIndex: 2,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',

    }
    return (
        <div className="container-sm mt-5">
            <header className="App-header">
                <h1>Rick & Morty</h1>
                <div className="card col" style={customPopup}>
                    <img src={share.image} alt={share.name}/>
                    <div className="card-body">{share.name}</div>
                </div>
            </header>
            <main>

                <div className="row row-cols-4   row-cols-md-2 g-4 m-auto">
                    {
                        data.map((c: CharType) => <div key={c.id} className="card m-2" style={{maxWidth: 308}}>
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
                                    <button onClick={() => shareChar(c.id)} className="btn btn-success">Show more
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
