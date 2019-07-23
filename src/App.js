import React from 'react';

import CardList from './CardList';
import SearchBox from './SearchBox';

import { cats } from './cats';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            cats: cats,
            searchfield: ''
        };
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    };

    render() {
        const filteredCats = this.state.cats.filter(cat => {
            return cat.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        return (
            <div className='tc'>
                <h1>CatFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList cats={filteredCats} />
            </div>
        );
    }
}

export default App;