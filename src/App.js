import React from 'react';
import Header from './Header';
import Search from './Search';
import Results from './Results';

const BASEURL='https://www.googleapis.com/books/v1/volumes?';

const generateURL=function (searchParams,bookType,printType){
  return `${BASEURL}q=${searchParams}&filter=${bookType}&printType=${printType}`  
}

class App extends React.Component{
  state={
    books:[],
    printType:'all',
    bookType:'full'
  }
  
  handleSearchSubmit=function (e,bookType,printType) {
    e.preventDefault();
    const fetchString=generateURL(e.target.bookSearch.value,bookType,printType);
  
    fetch(fetchString)
    .then(response => response.json())
    .then(results => {
      this.setState({books:results.items})
    })
    .then(()=>console.log(this.state.books))
  }

  render(){
    return (
      <div className='App'>
        <Header />
        <Search handleSearchSubmit={e=>this.handleSearchSubmit(e,this.state.bookType,this.state.printType)} bookType={this.state.bookType} printType={this.state.printType}/>
        {/* <Filters /> */}
        <Results books={this.state.books}/>
      </div>
    )
  }
}

export default App