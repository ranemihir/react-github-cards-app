import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const testData = [
    { id: 1, name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
    { id: 2, name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
    { id: 3, name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];

class Form extends React.Component {
    state = {
        username: ''
    };

    handleSubmit = async (event) => {
        // this prevent navtive HTML events
        // without this the page will reload.
        event.preventDefault();

        const res = await (await fetch(`https://api.github.com/users/${this.state.username}`)).json();
        console.log(res);

        this.props.onSubmit(res);

        this.setState({
            username: ''
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="GitHub Username" value={this.state.username} onChange={event => this.setState({ username: event.target.value })} required />
                <button className="add-button" onClick={this.handleSubmit}>Add Card</button>
            </form>
        );
    }

}

const CardList = (props) => {
    return (
        <div>
            {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
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
    state = {
        profiles: testData
    };

    addNewProfile = (profile) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profile]
        }));
    };

    render() {
        return (
            <div className="container">
                <h1 className="header">{this.props.title}</h1>
                <Form onSubmit={this.addNewProfile} />
                <CardList profiles={this.state.profiles} />
            </div>
        );
    }
}

ReactDOM.render(
    <App title='The GitHub Cards App' />,
    document.getElementById('root')
);