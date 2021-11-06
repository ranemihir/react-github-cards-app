import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const App = (props) => {
    return (
        <div className="header">{props.title}</div>
    );
};

ReactDOM.render(
    <App title='The GitHub Cards App' />,
    document.getElementById('root')
);