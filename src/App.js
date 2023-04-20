import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componets/Navbar';
import News  from './Componets/News';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'


export default class App extends Component {
  state ={
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        />
        <Router>
        <Routes>
        <Route exact path="/" element={<Navbar />}>
         <Route exact path="/business"  element={<News setProgress = {this.setProgress} key = "business" country = "in" category="business"/>}/>
         <Route exact path="/entertainment"  element={<News setProgress = {this.setProgress} key = "entertaiment" country = "in" category="entertainment"/>} />
         <Route exact path="/"  element={<News setProgress = {this.setProgress} key = "general" country = "in" category="general"/>} />
         <Route exact path="/health"  element={<News setProgress = {this.setProgress} key = "health" country = "in" category="health"/>} />
         <Route exact path="/science"  element={<News setProgress = {this.setProgress} key = "science" country = "in" category="science"/>} />
         <Route exact path="/sports"  element={<News setProgress = {this.setProgress} key = "sports" country = "in" category="sports"/>} />
         <Route exact path="/technology"  element={<News setProgress = {this.setProgress} key = "technology" country = "in" category="technology"/>} />
              
         </Route>
     </Routes>
     </Router>
       

      </div>
    )
  }
}


