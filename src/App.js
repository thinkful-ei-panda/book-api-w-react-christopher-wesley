import React from 'react';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import Filters from './Filter';


const BASEURL='https://www.googleapis.com/books/v1/volumes?';

const generateURL=function (searchParams,bookType,printType){
  if(bookType==='no-filter'){
    return `${BASEURL}q=${searchParams}&printType=${printType}`
  }
  return `${BASEURL}q=${searchParams}&filter=${bookType}&printType=${printType}`  
}

class App extends React.Component{
  state={
    loading:false,
    books:[],
    printType:'all',
    bookType:'no-filter',
    searchValue:null,
    error:null,
  }
  
  handleSearchSubmit = function(e,bookType,printType) {
    e.preventDefault();    
    this.setState({searchValue:e.target.bookSearch.value})
    const fetchString=generateURL(e.target.bookSearch.value,bookType,printType);
    
    this.setState({loading:true});
    fetch(fetchString)
    .then(response => (response.ok) ? response.json() : Promise.reject(response.status))
    .then(results => {
      (results.items) ? this.setState({books:results.items}) : this.setState({books: []})
      this.setState({loading:false})
    })
    .catch(error=>{
      console.log(error);
      this.setState({error:error})
      this.setState({loading:false})
    })
  }

  handlePrintTypeChange = function(e,searchValue,bookType) {
    this.setState({printType:e.target.value});

    if(this.state.searchValue){
        const fetchString=generateURL(searchValue,bookType,e.target.value);
      
      this.setState({loading:true});
      fetch(fetchString)
      .then(response => (response.ok) ? response.json() : Promise.reject(response.err))
      .then(results => {
        (results.items) ? this.setState({books:results.items}) : this.setState({books: []})
        this.setState({loading:false})
      })
      .catch(error=>{
        this.setState({error:error})
        this.setState({loading:false})
      })
    }
  }

  handleBookTypeChange=function(e,searchValue,printType){
    this.setState({bookType:e.target.value});
    if(this.state.searchValue){
      const fetchString=generateURL(searchValue,e.target.value,printType);
      
      this.setState({loading:true});
      fetch(fetchString)
      .then(response => (response.ok) ? response.json() : Promise.reject(response.err))
      .then(results => {
        (results.items) ? this.setState({books:results.items}) : this.setState({books: []})
        this.setState({loading:false})
      })
      .catch(error=>{
        this.setState({error:error})
        this.setState({loading:false})
      })
      
    }
  }

  render(){
    return (
      <div className='App'>
        <Header />
        <Search loading={this.state.loading} handleSearchSubmit={e=>this.handleSearchSubmit(e,this.state.bookType,this.state.printType)} bookType={this.state.bookType} printType={this.state.printType}/>
        <Filters handlePrintTypeChange={e=>this.handlePrintTypeChange(e,this.state.searchValue,this.state.bookType)} handleBookTypeChange={e=>this.handleBookTypeChange(e,this.state.searchValue,this.state.printType)}/>
        <Results loading={this.state.loading} searchValue={this.state.searchValue} error={this.state.error} books={this.state.books}/>
      </div>
    )
  }
}

export default App