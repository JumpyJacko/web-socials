import './App.css';
import Bird from './components/bird';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <Bird />            
            <div className="footer">
                Powered by Heroku, Written with React.js
            </div>
        </header>
    </div>
  );
}

export default App;
