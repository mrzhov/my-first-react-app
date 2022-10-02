import React from 'react';
import './Header.css';

const name = 'Maxim';

class Header extends React.Component {
    componentDidMount() {
        console.log('check mount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <header className="App-header">
                <p>Hello, {name}!</p>
            </header>
        )
    }
}

export default Header;