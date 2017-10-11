import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
	padding: 4em;
	background: papayawhip;
`;

// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
	padding: 0.5em;
	margin: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
`;

const Button = styled.button`
	/* Adapt the colours based on primary prop */
	background: ${props => props.primary ? 'palevioletred' : 'white'};
	color: ${props => props.primary ? 'white' : 'palevioletred'};

	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Wrapper>
          <Title>
            Hello World, this is my first styled component!
          </Title>
        </Wrapper>
        <div>
      		<Input placeholder="@mxstbr" type="text" />
      		<Input value="@geelen" type="text" />
      	</div>
        <div>
      		<Button>Normal</Button>
      		<Button primary>Primary</Button>
      	</div>
      </div>
    );
  }

}

export default App;
