import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <span>Projeto Folha &copy; 2018 CEPESC.</span>
        <span className="ml-auto">Produzido por <a href="https://redes.unb.br/latitude/index.html">UnB</a></span>
      </footer>
    )
  }
}

export default Footer;
