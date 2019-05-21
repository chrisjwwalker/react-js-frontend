import React from 'react';
import './App.css';
import './Forms.css';
import RegisterForm from './forms/RegisterForm';

function App() {
  return (
      <div className="row App-header">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="row">
              <RegisterForm/>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
  );
}

export default App;
