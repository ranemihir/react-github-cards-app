import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class Card extends React.Component {
    render() {
        return (
            <div className="github-profile">
                <img src="https://via.placeholder.com/100" alt="github profile" />
                <div className="info">
                    <div className="name">Name here...</div>
                    <div className="company">Company Name here...</div>
                </div>
            </div>
        );
    }
}


class App extends React.Component {
    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Card />
            </div>
        );
    }
}

ReactDOM.render(
    <App title='The GitHub Cards App' />,
    document.getElementById('root')
);