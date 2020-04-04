import React from 'react';
import Nav from './Nav.js';
import SearchArea from './search';
import Movielist from './movielist';
import Pagination from './pagination';

class  App extends React.Component {

state ={
    movies :[],
    searchterm : '',
    currentpage : 1,
    totalresults : 0
  }

handlesubmit=(e)=>{
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=0f76c75094910223cd6d1252da29914a&query=${this.state.searchterm}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data.results);
      this.setState({
        movies : [...data.results],
        totalresults : data.total_results
      })
    })
  }

  handlechange=(e)=>{
        this.setState({searchterm :e.target.value})
  }
  nextpage=(pagenumber)=>{
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=0f76c75094910223cd6d1252da29914a&query=${this.state.searchterm}&page=${pagenumber}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data.results);
      this.setState({
        movies : [...data.results],
        currentpage : pagenumber
         })
    })

  }
  render(){

    const numberpages=Math.floor(this.state.totalresults/20);

    return(
    <div>
    <Nav/>
    <SearchArea handlesubmit={this.handlesubmit} handlechange={this.handlechange}/>
    <Movielist  movies={this.state.movies} />
     {this.state.totalresults > 20 ? <Pagination totalresults={this.state.totalresults} nextpage={this.nextpage} pages={numberpages} currentpage ={this.state.currentpage}/> : ''}
    </div>
  );
}
}

export default App;
