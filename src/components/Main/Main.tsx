import React from "react";
import classNames from "classnames";
import {CharType} from "../../TypeScript/Types";


type propsType = {
    data: CharType[],
    shareChar: (index:number) => void
}


const Main:React.FC< propsType> = ({data, shareChar}) => {
    return <main>

        <div className="row row-cols-xl-4   row-cols-md-3  g-4 col-md-offset-2">
            {
                data.map((c: CharType, index: number) => <div  key={c.id} style={{padding:10}}>
                        <div className="card ">
                            <div className="row ">
                                <img src={c.image} className="img-fluid rounded-start" alt={c.name}/>
                                <div className="card-body" style={{padding: '1rem 1.7rem'}}>
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
                        </div>
                    </div>
                )
            }
        </div>

    </main>

}
export default Main