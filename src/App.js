import './assets/styles/App.scss';
import './assets/styles/Header.css';
import Characters from './components/Characters';
import Header from './components/Header';

function App() {
    return(
        <div className="app">
            <Header
            title = "Rick and Morty"
            />
            <Characters/>
        </div>
    )
}

export default App;