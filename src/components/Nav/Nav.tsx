import React, {useRef, useState} from "react";
import classNames from "classnames";
import FilterDrop from "./FilterDrop";

const Nav = ({info, changePage, prevPage, currentPage, nextPage, status, setStatus, searchWithFilters, clearFilters, setGender, gender, type, setType, name, setName, species, setSpecies}: any) => {
    const nameSearch: any = useRef()
    let pages = [];
    for (let i = 1; i <= info.pages; i++) {
        pages.push(i)
    }

    const statusList: Array<string> = ['', 'alive', 'dead', 'unknown']
    const genderList: Array<string> = ['', 'male', 'female', 'genderless', 'unknown']
    const speciesList: Array<string> = ['', 'Human', 'Alien', 'Humanoid', 'Poopybutthole', 'Mythological Creature', 'unknown']
    const typeList: Array<string> = ['', 'Parasite', 'Monster', 'Conjoined twin', 'Sentient ant colony', 'Human Gazorpian', 'Boobie buyer reptilian', 'The Devil', ' Superhuman']

    function f() {
        setName(nameSearch.current.value)
    }

    return <div className='mt-3'>
        <h3 className='text-success mt-5'>Filters</h3>
        <div className="filtersWrap">


            <FilterDrop list={statusList} getter={status} setter={setStatus} header='status'/>
            <FilterDrop list={genderList} getter={gender} setter={setGender} header='gender'/>
            <FilterDrop list={speciesList} getter={species} setter={setSpecies} header={'species'}/>
            <FilterDrop list={typeList} getter={type} setter={setType} header={'species'}/>


        </div>

        <div className="  col-md-3">
            <label>Search by name</label>
            <input onChange={f} ref={nameSearch} className="form-control me-2" type="text" value={name}
                   placeholder="Search by name"/>

        </div>

        <div className="mt-3">
            <button style={{'marginRight': 10}} className='btn btn-success ' onClick={searchWithFilters}>Search</button>
            <button className='btn btn-danger  ' onClick={clearFilters}>Clear</button>
        </div>

        <nav className='mt-2 d-flex justify-content-center'>
            <ul className="pagination">
                <li onClick={prevPage}
                    className={classNames({
                        'page-item': true,
                        'disabled': info.prev === null,
                    })}>
                    <button className="page-link ">
                                <span className={classNames({
                                    'text-success': info.prev !== null
                                })}>&laquo;</span>
                    </button>
                </li>
                {pages.map((p: number) => {
                    if ((p >= currentPage && p < currentPage + 10)) {
                        return <li key={p} onClick={() => changePage(p)} className={classNames({
                            'page-item': true,
                        })}>
                            <button className={classNames({
                                'page-link': true,
                                'bg-success': currentPage === p,
                                'text-white': currentPage === p,
                                'text-success': currentPage !== p,
                            })}>{p}</button>
                        </li>
                    }
                })}


                <li onClick={nextPage}
                    className={classNames({
                        'page-item': true,
                        'disabled': info.next === null,
                    })}>
                    <button className="page-link">
                                <span className={classNames({
                                    'text-success': info.next !== null
                                })}>&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
        <div>
            Characters: {info.count}
        </div>
    </div>


}
export default Nav