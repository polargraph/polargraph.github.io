import React, { Component } from 'react';
import './App.css';
import { Dropdown, Container } from 'react-bootstrap';
import Script from 'react-load-script'


let scripts = ['/main.js', '/main.js', '/main.js', '/main.js'];
class Home extends Component {
  state = {
    loadScript: 0
  }
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = { value: '' };
  }
  render() {
    return (
      <div className="Contact">
        <Container>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
              Load other script
            </Dropdown.Toggle>

            <Dropdown.Menu>
              { scripts.map((script, index) =>
                <Dropdown.Item href={'/?script=' + index}> {script} </Dropdown.Item>
              ) }
            </Dropdown.Menu>
          </Dropdown>
        </Container>
        <div id="canvas"> </div><
          Script url={scripts[this.getUrlParameter('script')] }/>
      </div>
    );
  }

  componentDidMount () {
    
  }

  getUrlParameter = (name) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    let results = regex.exec(window.location.href);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  handleChange (e) {
    this.setState({ loadScript: e });
  }
}

export default Home;
