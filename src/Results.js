import React from 'react'
import Book from './Book'

const Results = function (props) {

    //if error
    if(props.error){
        return(
            <div className='error-message'>
                Error: {props.error}
            </div>
        )    
    }else{

        //if loading
        if(props.loading===true){
            return <div>Searching...</div>
        }else{

            //if no search results
            if(props.books.length===0&&!(props.searchValue===null)){
                return (
                    <div>
                        No Results Found
                    </div>
                )        
            }else{

                //display results
                const books = props.books.map((book,index) => {
                    return(
                        <li>
                            <Book key={index} saleInfo={book.saleInfo} volumeInfo={book.volumeInfo} />
                            <hr />
                        </li>
                    )
                })

                return(
                    <ul className='results-container'>
                        {books}
                    </ul>

                )
            }
        }
    }
}

export default Results