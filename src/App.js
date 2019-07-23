import React from 'react';

import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            cats: [],
            searchfield: ''
        };
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ cats: users }));
    }

    render() {
        const filteredCats = this.state.cats.filter(cat => {
            return cat.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        return (
            <div className='tc'>
                <h1 className='f1'>~ CatFriends ~</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList cats={filteredCats} />
            </div>
        );
    }
}

export default App;