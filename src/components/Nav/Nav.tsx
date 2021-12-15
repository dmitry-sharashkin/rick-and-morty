import React from "react";
import classNames from "classnames";

const Nav = ({info, changePage, prevPage, currentPage, nextPage}: any) => {

    let pages = [];
    for (let i = 1; i <= info.pages; i++) {
        pages.push(i)
    }


    return <div className='mt-3'>
        <div>
            Characters: {info.count}
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

    </div>


}
export default Nav