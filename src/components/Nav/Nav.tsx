import React, {useRef} from "react";
import classNames from "classnames";
import FilterDrop from "./FilterDrop";
import {InfoType} from "../../TypeScript/Types";

type PropsType = {
    info: InfoType,
    changePage: (p: number) => void,
    prevPage: () => void,
    nextPage: () => void,
    clearFilters: () => void,
    searchWithFilters: () => void,
    setGender: (s: string) => void,
    setStatus: (s: string) => void,
    setType: (s: string) => void,
    setSpecies: (s: string) => void,
    setName: (s: string) => void,
    name: string,
    type: string,
    gender: string,
    species: string,
    status: string,
    currentPage: number,
}

const Nav: React.FC<PropsType> = ({
                                      info, changePage, prevPage, currentPage, nextPage, status, setStatus, searchWithFilters,
                                      clearFilters, setGender, gender, type, setType, name, setName, species, setSpecies
                                  }) => {
    const nameSearch = useRef<HTMLInputElement>(null)

    let pages: number[] = [];
    for (let i = 1; i <= info.pages; i++) {
        pages.push(i)
    }

    const statusList: Array<string> = ['', 'alive', 'dead', 'unknown']
    const genderList: Array<string> = ['', 'male', 'female', 'genderless', 'unknown']
    const speciesList: Array<string> = ['', 'Alien', 'Animal', 'Human', 'Humanoid', 'Poopybutthole', 'Mythological Creature', 'unknown']
    const typeList: Array<string> = ['', 'Anime', 'Parasite', 'Monster', 'Conjoined twin', 'Turkey', 'Snake', 'Soulless Puppet', 'Sentient ant colony'
        , 'Human Gazorpian', 'Boobie buyer reptilian', 'The Devil', ' Superhuman']

    function updateNameSearch(): void {
        if (null !== nameSearch.current) {
            setName(nameSearch.current.value)
        }
    }

    return <div className='mt-3'>
        <h3 className='text-success mt-5'>Filters</h3>
        <div className="filtersWrap flex-wrap">


            <FilterDrop list={statusList} getter={status} setter={setStatus} header='status'/>
            <FilterDrop list={genderList} getter={gender} setter={setGender} header='gender'/>
            <FilterDrop list={speciesList} getter={species} setter={setSpecies} header={'species'}/>
            <FilterDrop list={typeList} getter={type} setter={setType} header={'types'}/>


        </div>

        <div className="  col-md-3">
            <label>Search by name</label>
            <input onChange={updateNameSearch} ref={nameSearch} className="form-control me-2" type="text" value={name}
                   placeholder="Search by name"/>

        </div>

        <div className="mt-3">
            <button style={{'marginRight': 10}} className='btn btn-success ' onClick={searchWithFilters}>Search</button>
            <button className='btn btn-danger  ' onClick={clearFilters}>Clear</button>
        </div>

        <nav className='mt-4  d-flex justify-content-center'>
            <ul className="d-flex pagination flex-wrap justify-content-center">
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
                {pages.map((p: number, index:number) => {
                    if ((p >= currentPage && p < currentPage + 10)) {
                        return <li key={index} onClick={() => changePage(p)} className={classNames({
                            'page-item': true,
                        })}>
                            <button className={classNames({
                                'page-link': true,
                                'bg-success': currentPage === p,
                                'text-white': currentPage === p,
                                'text-success': currentPage !== p,
                            })}>{p}
                            </button>
                        </li>
                    } else if ((p > info.pages - 10 && p <= info.pages) && currentPage > info.pages - 10 && currentPage <= info.pages) {
                        return <li key={index} onClick={() => changePage(p)} className={classNames({
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