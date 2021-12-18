import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Modal from "./components/Modal/Modal";
import Main from "./components/Main/Main";
import Nav from './components/Nav/Nav';
import {CharType, InfoType} from "./TypeScript/Types";

const App: React.FC = () => {
    const initialInfo: InfoType = {
        count: 0,
        next: '',
        prev: '',
        pages: 0,
    }
    const initialShare: CharType  = {
        created: '',
        episode: [],
        gender: '',
        id: 0,
        image: '',
        location: {
            name: '',
            url: '',
        },
        name: '',
        origin: {
            name: '',
            url: '',
        },
        species: '',
        status: '',
        type: '',
        url: '',
    };
    const [data, setData] = useState([])
    const [info, setInfo] = useState(initialInfo)
    const [share, setShare] = useState(initialShare)
    const [currentPage, setCurrentPage] = useState(1)
    const [toggleModal, setToggleModal] = useState(false)


    const [name, setName] = useState('')
    const [status, setStatus] = useState('')
    const [species, setSpecies] = useState('')
    const [type, setType] = useState('')
    const [gender, setGender] = useState('')

    const baseUrl: string = 'https://rickandmortyapi.com/api/character/';

    useEffect(() => {
        axios.get(baseUrl).then(res => {
            setData(res.data.results)
            setInfo(res.data.info)
            setCurrentPage(1)
        })

    }, [])


    function searchWithFilters(): void {

        axios.get(baseUrl + `?page=1&name=${name}&status=${status}&species=${species}&type=${type}&gender=${gender}`).then(res => {
            setData(res.data.results)
            setInfo(res.data.info)
            setCurrentPage(1)

        })
    }

    function clearFilters(): void {
        setName('')
        setGender('')
        setType('')
        setStatus('')
        setSpecies('')

    }

    console.log(info)

    function nextPage(): void {
        if (info.next === null) {
            return
        }
        axios.get(info.next).then(res => {
            setData(res.data.results)
            setInfo(res.data.info)
            setCurrentPage(currentPage + 1)

        })
    }

    function prevPage(): void {
        if (info.prev === null) {
            return
        }
        axios.get(info.prev).then(res => {
            setData(res.data.results)
            setInfo(res.data.info)
            setCurrentPage(currentPage - 1)
        })
    }

    function changePage(p: number) {
        if (p === currentPage) {
            return
        }
        axios.get(`${baseUrl}?page=${p}&name=${name}&status=${status}&species=${species}&type${type}&gender=${gender}`).then(res => {
            setData(res.data.results)
            setInfo(res.data.info)
            setCurrentPage(p)
        })
    }

    function shareChar(index: number): void {
        setShare(data[index])
        setToggleModal(true)
    }


    return (
        <div className="container-sm ">

            <header className="App-header">
                <img alt='HeaderLogo' className='headerLogo'
                     src='https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUmVLxeatH508rcDIJJz2cyvcGOzvAth5IzI5MrAJKYF_Od9t-t05i6neGRE8GUuTXqK_PwaWrp4PtcgHCq5FcrIJ32JKfRUPc4w.png?r=a66'/>

            </header>

            {
                toggleModal && <Modal setToggleModal={setToggleModal} share={share}/>
            }

            <Nav
                clearFilters={clearFilters}
                setName={setName}
                name={name}
                setGender={setGender}
                gender={gender}
                setType={setType}
                type={type}
                setSpecies={setSpecies}
                species={species}
                searchWithFilters={searchWithFilters}
                status={status}
                setStatus={setStatus}
                info={info}
                currentPage={currentPage}
                prevPage={prevPage}
                changePage={changePage}
                nextPage={nextPage}/>

            <Main data={data} shareChar={shareChar}/>
        </div>
    );
}

export default App;
