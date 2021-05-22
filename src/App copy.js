import './App.css';
import homepage  from  './components/homepage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Navbar">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Choose your game </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Game 1 </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Game 2</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Game 3</a>
                </li>

              </ul>

            </div>
          </nav>
        </div>
        <div>
          <homepage/>
        </div>


      </header>
    </div>
  );
}
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

