import React from 'react'
import Book from './Book'

const Results = function (props) {
    const books = props.books.map(book => {
        return(
            <Book key={book.id} volumeInfo={book.volumeInfo} />
        )
    })


    return(
        <div className='results-container'>
            {books}
        </div>

    )
}

export default Results