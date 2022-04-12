import React from "react";
import "./App.css";
import Activite from "./activites";
import Chien from "./chiens";
import Devise from "./devises";
import CAD from "./CAD";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activites: [],
      chiens: [],
    };
  }

  ajouterChien() {
    let chien = <Chien />;
    let chiens = this.state.chiens.concat(chien);
    this.setState({ chiens: chiens });
  }

  ajouterActivite() {
    let activite = <Activite />;
    let activites = this.state.activites.concat(activite);
    this.setState({ activites: activites });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TP2</h1>
        </header>
        <div className="body">
          <div className="devises">
            <h2>Bitcoin To USD: <Devise /></h2>
            <h2>Bitcoin To CAD: <CAD /></h2>
          </div>
          <div className="activites">
            <h2>Idées d'activités:</h2>
            <p><Activite /></p>
            <p><Activite /></p>
            <p><Activite /></p>
            <p>{this.state.activites}</p>
            <button onClick={() => this.ajouterActivite()}>
              Ajouter une activité!
            </button>
          </div>
          <div className="chiens">
            <h2>Photos de chiens:</h2>
            <button onClick={() => this.ajouterChien()}>
              Ajouter une photo de chien!
            </button>
            <h5>{this.state.chiens}</h5>
        </div>
      </div>
      </div>
    );
  }
}
export default App;
