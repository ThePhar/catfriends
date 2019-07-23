import React from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cats: [],
            searchField: ''
        };
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ cats: users }));
    }

    render() {
        const { cats, searchField } = this.state;
        const filteredCats = cats.filter(cat => {
            return cat.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return (
            <div className='tc'>
                <h1 className='f1'>~ CatFriends ~</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList cats={filteredCats} />
                </Scroll>
            </div>
        );
    }
}

export default App;