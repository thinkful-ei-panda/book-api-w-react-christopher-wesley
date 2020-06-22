import React from 'react'

const Search = function (props) {
    return (
            <div className='search-bar-container'>
                <form id='search' onSubmit={e=>props.handleSearchSubmit(e, props.bookType, props.printType)}>
                    <legend hidden>Book Search Form</legend>
                    <fieldset>
                        <label htmlFor='book-search'>Search: </label>
                        <input name='book-search' id='bookSearch'></input>
                        {props.loading ? <button type='button'>Searching...</button> : <button type='submit'>Search</button>}
                    </fieldset>
                </form>
            </div>
    )
}

export default Search