import React, { Component } from 'react';
import './App.css';
import { rebase } from './components/Base';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainDiv from './components/MainDiv';
import Footer from './components/Footer';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authed: false,
      loading: true,
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
      <div className="App">
        <Header />
        <Sidebar />
        <MainDiv />
        <Footer />
      </div>
    );
  }
}

export default App;
