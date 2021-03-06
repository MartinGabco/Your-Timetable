import React from 'react';
import _ from 'lodash';

const Pagination = props => {
    const { itemsCount, pageSize, currentPage, onPageChange } = props;

    const pagesCount = Math.ceil(itemsCount / pageSize);

    const pages = _.range(1, pagesCount + 1);

    return ( 
        <ul className="pagination"> 
            {pages.map(page => ( 
                <li 
                    key={page} 
                    style = {{ cursor: "pointer" }}
                    className={page === currentPage ? "page-item active" : "page-item" }
                >
                    <a className="page-link" onClick={() => onPageChange(page)}>{page}</a> 
                </li>
            ))} 
        </ul>
    );
}

export default Pagination;