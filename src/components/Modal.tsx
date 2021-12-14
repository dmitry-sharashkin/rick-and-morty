import React from "react";
import classNames from "classnames";

const Modal = ({share, setToggleModal}: any) => {
    const customPopup: any = {

        position: "fixed",
        minWidth: 280,
        zIndex: 2,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        padding: 25,

        paddingTop: 35,
        paddingBottom: 35,
        borderRadius: 14

    }
    const alignArticleCenter: any = {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        fontSize: `1.2em`,
    }
    return <div className="card  col w-50" style={customPopup}>
        <div className="row g-0">
            <div className="col-md-5 overflow-hidden">
                <img className='w-100' src={share.image} alt={share.name}/>
            </div>
            <div className="col-md-7" style={alignArticleCenter}>
                <div className=' d-flex justify-content-end '>
                    <button onClick={() => setToggleModal(false)} type="button" className="btn-close"/>
                </div>
                <h2 className="card-title">{share.name}</h2>
                <ul className="card-text list-group list-group-flush">

                    <li className='list-group-item'> status: <span className={classNames({
                        "badge bg-secondary": share.status === 'unknown',
                        "badge bg-success": share.status === 'Alive',
                        "badge bg-danger": share.status === 'Dead',
                    })}> {share.status}</span> <br/>
                    </li>
                    <li className='list-group-item'>
                        species: {share.species}<br/>
                    </li>
                    <li className='list-group-item'>
                        gender: {share.gender}<br/>
                    </li>
                    <li className='list-group-item'>
                        type: {share.type}
                    </li>
                    <li className='list-group-item'>

                        location: <a className="link-info" href={share.location.url}> {share.location.name} </a>
                    </li>
                    <li className='list-group-item'>

                        origin: {share.origin.name === "unknown" ? <span> {share.origin.name}</span> :
                        <a className="link-info" href={share.origin.url}> {share.origin.name} </a>}
                    </li>
                </ul>
            </div>
        </div>
    </div>

}
export default Modal