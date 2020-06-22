import React from 'react'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });


const Book = function (props){    
    let price;
    let authors;
    console.log(props.volumeInfo);
    if(props.volumeInfo.authors){
        authors=props.volumeInfo.authors.join(' and ');
    }else{
        authors='N/A';
    }
    if(props.saleInfo.listPrice){
        price=USCurrencyFormat.format(props.saleInfo.listPrice.amount);
        console.log(price);
    }else if(props.saleInfo.saleability==='FREE'){
        price='FREE';
    }else{
        price='N/A';
    }

    return (
        <div className='book'>
            <div className='title'>{props.volumeInfo.title}</div>
            <section>
                <div className='image-container'>
                    <img src={props.volumeInfo.imageLinks.thumbnail} alt='book' />
                </div>
                <div className='book-details'>
                    <div className='author'>Author: {authors}</div>
                    <div className='price'>Price: {price}</div>
                    <div className='description'>{props.volumeInfo.description}</div>
                </div>
                     
            </section>       
        </div>
    )
}

export default Book