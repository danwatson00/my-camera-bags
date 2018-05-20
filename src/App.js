import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { rebase } from './components/Base';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainDiv from './components/MainDiv';
import Footer from './components/Footer';
import $ from 'jquery';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authed: false,
      loading: true,
      user: {},
      uid: null,

    }

  }

  componentDidMount() {
    console.log("componentDidMount");
    this.authListener = rebase.initializedApp.auth().onAuthStateChanged((user) => {

      if (user) {
        this.setState({
          authed: true,
          loading: false,
          uid: user.uid,
          user: user,
        });
        //get DB stuff for user here
      } else {
        this.setState({
          authed: false,
          loading: false,
          uid: null,
        })
      }
    })
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Sidebar />
          <MainDiv />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
