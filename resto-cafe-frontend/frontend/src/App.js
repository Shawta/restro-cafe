import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/style.css'
import Home from './containers/Home';
import WriteReview from './components/popup/WrtieItemReview';

function App() {
  return (
    <div className="App">  
      <Router >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/writeReview' element={<WriteReview/>} />
        </Routes>

    </Router>
    </div>
  );
}

export default App;
