import React from "react";
import classNames from "classnames";
import {CharType} from "../../TypeScript/Types";
import CSS from 'csstype';

type PropsType = {
    share: CharType,
    setToggleModal: (b: boolean) => void
}

const Modal: React.FC<PropsType> = ({share, setToggleModal}) => {

    let createdDate: Array<string> = share.created.split('T')

    const customPopup: CSS.Properties = {
        position: "fixed",
        width: '90%',
        minWidth: '280px',
        maxWidth: '870px',
        zIndex: 2,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        padding: '25px',
        paddingTop: '25px',
        paddingBottom: '35px',
        borderRadius: '14px',

    }
    const alignArticleCenter: CSS.Properties = {
        paddingLeft: '20',
        paddingRight: '20',
        paddingBottom: '20',
        fontSize: `1.2em`,
    }
    return <div className="card  col" style={customPopup}>
        <div className="row  g-0" style={{
            overflow: 'auto'
        }}>
            <div className='col-md-12 d-flex justify-content-end '>
                <button onClick={() => setToggleModal(false)} type="button" className="btn-close"/>
            </div>
            <div className="col-sm-6 overflow-hidden">
                <img className='w-100' src={share.image} alt={share.name}/>
                <p className='card-text'><small
                    className='text-muted'>created: </small>{createdDate[0].replace(/-/g, '.')}</p>
            </div>
            <div className="col-sm-6" style={alignArticleCenter}>
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
        <div className="col-md-12 mt-3">
            <h3>Episodes</h3>
            {share.episode.map((ep: string, index: number) => (index < 9)
                ? <span key={index}><a href={ep} className="link-info">{ep}</a> </span> : '')}
            {(share.episode.length >= 10) ? <span className='text-muted'>...</span> : ''}
        </div>
    </div>

}
export default Modal