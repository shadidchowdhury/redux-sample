import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyDKYMIOM8uM4VKHvVMAX6A3gJHVQmP0SIA';
const App = () => {
    return (<div>
        <SearchBar />
    </div>);
}

ReactDOM.render(<App />, document.querySelector('.container'));
