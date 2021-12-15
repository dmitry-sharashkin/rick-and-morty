import React from "react";
import classNames from "classnames";
import { CharType } from "../../TypeScript/Types";

const Main = ({data,shareChar}:any) => {
    return<main className='mt-1'>

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

}
 export  default Main