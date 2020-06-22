import React from 'react'

const Book = function (props){
    console.log(props.volumeInfo.imageLinks);
    return (
        <div className='book'>
            <div className='title'>{props.volumeInfo.title}</div>
            <div className='author'>{props.volumeInfo.authors}</div>
            {/* <div className='price'>{props.volumeInfo.title}</div> */}
            <div className='description'>{props.volumeInfo.description}</div>
            <div className='image-container'>
                <img src={props.volumeInfo.imageLinks.thumbnail} alt='book' />
            </div>            
        </div>
    )
}

export default Book