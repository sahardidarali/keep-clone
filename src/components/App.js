import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './Header'
import './App.css'
import GoogleAuth from './GoogleAuth'
import DeletedNotes from './DeletedNotes'
import ArchivedNotes from './ArchivedNotes'
const App=()=> {
  return (
    <div className="ui container">
      <BrowserRouter>
      <div>
       <Header/>
        <Route path="/" exact component={GoogleAuth} />
        <Route path="/bin" exact component={DeletedNotes} />
        <Route path="/archive" exact component={ArchivedNotes} />
 
        </div>
      </BrowserRouter> 

    </div>
  );
}
export default App
