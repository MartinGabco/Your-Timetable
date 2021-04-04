import React from 'react';
import _ from 'lodash';

const PaginationComponent = props => {
    const { items, pageSize, currentPage, onCompulsoryPageChange } = props;
    
    const pageNumber = Math.ceil(items/pageSize);
        if (pageNumber === 0) return null;

    const pages = _.range(1, pageNumber + 1);

    return (
        <nav aria-label="...">
            <ul className="pagination">
                {pages.map(page => (
                    <li 
                        className={
                            page === currentPage 
                            ? "page-item active" 
                            : "page-item"}
                        style={{ cursor: "pointer"}}
                    >
                        <a className="page-link" onClick={() => onCompulsoryPageChange(page)}>{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
 
export default PaginationComponent;