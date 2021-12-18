import React, {useState} from "react";


type PropsType = {
    list: Array<string>,
    header: string,
    getter: string,
    setter: (s:string) => void,
}

const FilterDrop: React.FC<PropsType> = ({getter, setter, list, header}) => {

    const [toggleFilter, setToggleFilter] = useState(false)

    return <div className="filtersDrop__wrap">
        <button className='btn btn-outline-success' onClick={() => setToggleFilter(!toggleFilter)}>{header}: {getter}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
        </button>
        {toggleFilter && <ul className='list-group filtersDrop'>
            {list.map((value: string, index: number) => <li key={index} className='list-group-item'
                                                            onClick={() => setter(value)}>{(value) ? value : 'all'}</li>)}

        </ul>}


    </div>
}
export default FilterDrop