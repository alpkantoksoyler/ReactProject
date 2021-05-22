import React, { Component } from 'react'
import HomeScreen from './components/homepage'
import ReactDOM from 'react-dom';
import './App.css';
import Game1 from './components/Game1/Game1'
import Game2 from './components/Game2/Game2'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isHomePage: true, isGame1: false, isGame2: false, isGame3: false };

    this.gamechanger = this.gamechanger.bind(this);
  }
  gamechanger(e) {
    if (e == "Game1") {
      this.setState(state => ({
        isGame1: true,
        isGame2: false,
        isGame3: false,
        isHomePage: false,
      }));
    }
    else if (e == "Game2") {
      this.setState(state => ({
        isGame1: false,
        isGame2: true,
        isGame3: false,
        isHomePage: false,
      }));
    }
    else if (e == "Game3") {
      this.setState(state => ({
        isGame1: false,
        isGame2: false,
        isGame3: true,
        isHomePage: false,
      }));
    }
    else if (e == "HomePage") {
      this.setState(state => ({
        isGame1: false,
        isGame2: false,
        isGame3: false,
        isHomePage: true,
      }));
    }
  }
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <div className="Navbar">
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#" onClick={(e) => this.gamechanger("HomePage")}>HomePage</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="nav-link" href="#" onClick={(e) => this.gamechanger("Game1")}>Game 1 </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#" onClick={(e) => this.gamechanger("Game2")}>Game 2</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#" onClick={(e) => this.gamechanger("Game3")}>Game 3</a>
                    </li>

                  </ul>

                </div>
              </nav>
            </div>
            <div>
              {
                this.state.isHomePage ? <HomeScreen /> : null
              }
              {
                this.state.isGame1 ? <Game1 /> : null
              }
               {
                this.state.isGame2 ? <Game2 /> : null
              }

            </div>
          </header>
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);