import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';//.js가 생략
 // import App과 render에 있는 App의 이름이 같아야한다.
//But from './App'의 이름이 import render와 같이 바꾸면 안된다.
//그 부분은 파일의 이름을 나타내는 것이다.
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
