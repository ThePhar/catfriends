import React from 'react';
import { connect } from 'react-redux';

import { setSearchField } from "../actions";

import ErrorBoundary from './ErrorBoundary';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

const mapStateToProps = (state) => ({
    searchField: state.searchField
});
const mapDispatchToProps = (dispatch) => ({
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cats: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ cats: users }));
    }

    render() {
        const { cats } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredCats = cats.filter(cat => {
            return cat.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return (
            <div className='tc'>
                <h1 className='f1'>~ CatFriends ~</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList cats={filteredCats} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);