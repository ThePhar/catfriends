import React from 'react';
import { connect } from 'react-redux';

import { setSearchField, requestCats } from "../actions";

import ErrorBoundary from './ErrorBoundary';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

const mapStateToProps = (state) => ({
    searchField: state.searchCats.searchField,
    cats: state.requestCats.cats,
    isPending: state.requestCats.isPending,
    error: state.requestCats.error
});
const mapDispatchToProps = (dispatch) => ({
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestCats: () => dispatch(requestCats())
});

class App extends React.Component {
    componentDidMount() {
        this.props.onRequestCats();
    }

    render() {
        const { cats, isPending, searchField, onSearchChange } = this.props;
        const filteredCats = cats.filter(cat => {
            return cat.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return isPending ? <h1>Loading</h1> :
        (
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