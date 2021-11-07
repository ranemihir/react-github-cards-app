import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const testData = [
    { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
    { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
    { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];

class Form extends React.Component {
    render() {
        return (
            <form action="">
                <input type="text" placeholder="GitHub Username" />
                <button className="add-button">Add Card</button>
            </form>
        );
    }

}

const CardList = () => {
    return (
        <div>
            {testData.map(profile => <Card {...profile} />)}
        </div>
    );
};

class Card extends React.Component {
    render() {
        const profile = this.props;

        return (
            <div className="github-profile">
                <img src={profile.avatar_url} alt="github profile" />
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
}


class App extends React.Component {
    render() {
        return (
            <div class="container">
                <h1 className="header">{this.props.title}</h1>
                <Form />
                <CardList />
            </div>
        );
    }
}

ReactDOM.render(
    <App title='The GitHub Cards App' />,
    document.getElementById('root')
);