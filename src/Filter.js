import React from 'react'

const Filter = function (props) {
    return (
        <div className='filter-container'>
            <div className='print-type-filter-container'>
                <label htmlFor="print-type">Print Type:</label>
                <select onChange= {(e)=>props.handlePrintTypeChange(e,props.searchValue,props.bookType)} name="print-type" id="print-type">
                <option value="all">All</option>
                <option value="books">Books</option>
                <option value="magazines">Magazines</option>
                </select>
            </div>
            <div className='book-type-filter-container'>
                <label htmlFor="book-type">Book Type:</label>
                <select onChange= {(e)=>props.handleBookTypeChange(e,props.searchValue,props.printType)} name="book-type" id="book-type">
                <option value="no-filter">No Filter</option> 
                <option value="full">Full</option>                
                <option value="partial">Partial</option>
                <option value="ebooks">Ebooks</option>
                <option value="free-ebooks">Free Ebooks</option>
                <option value="paid-ebooks">Paid Ebooks</option>
                </select>
            </div>
        </div>
    )
}

export default Filter