import React from 'react';
import _ from 'lodash';

const PaginationElective = props => {
    const { items, pageSize2, currentPage2, onElectivePageChange } = props;
    
    const pageNumber = Math.ceil(items/pageSize2);
        if (pageNumber === 0) return null;

    const pages = _.range(1, pageNumber + 1);

    return (
        <ul className="pagination">
            {pages.map(page => (
                <li 
                    key={page}
                    className={
                        page === currentPage2
                        ? "page-item active" 
                        : "page-item"}
                    style={{ cursor: "pointer"}}
                >
                    <a className="page-link" onClick={() => onElectivePageChange(page)}>{page}</a>
                </li>
            ))}
        </ul>
    );
}
 
export default PaginationElective;