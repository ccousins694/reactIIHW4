import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = ReactDOM.render(<My Form />, document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function MyForm() {
  return (
    <form>
        <label>
          Name: Welcome back, Miss Cousins
          <input type='text' />
          <button type='submit'>Welcome back, Miss Cousins</button>
        </label>
    </form>
  )

}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// ();
