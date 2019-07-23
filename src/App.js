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

    render() {
        return (
            <div className='tc'>
                <h1>CatFriends</h1>
                <SearchBox />
                <CardList cats={this.state.cats} />
            </div>
        );
    }
}

export default App;