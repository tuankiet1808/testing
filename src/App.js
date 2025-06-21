import React from 'react';

import './index.css';
import './App.css';

let cong = (a,b)=>{
  return a + b;

}
let nhan = (a,b)=> a*b;
let kq = cong(1,6);
let kq2 = nhan(2,3);
console.log("Kết quả của phép nhân là: ", kq2);
console.log("Kết quả của phép cộng là: ", kq);
let hovaten = ( a, b) => {
  return `xin chao ${a}\ntuổi của bạn là: ${b}`;
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <p>
          {hovaten("Nguyen Van A", 20)}
        </p>
        
      </header>
    </div>
  );
}

export default App;
