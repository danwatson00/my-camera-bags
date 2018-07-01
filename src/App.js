import React, { Component } from 'react'
import './App.css'
import { rebase } from './components/Base/Base'
import Header from './components/Header/Header'
import Sidebar from './components/SideBar/Sidebar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import { Route, Switch } from 'react-router-dom'
import * as routes from './constants/routes'
// import $ from 'jquery'
import AllGear from './components/AllGear/AllGear'
import AllBags from './components/AllGear/AllGear'
import UserGear from './components/UserGear/UserGear'
import UserBags from './components/UserBags/UserBags'



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
      

      <div className="App">
            <Header />
            <Sidebar />
            <Footer />

            <Switch>

                <Route 
                  exact path={routes.HOME}
                  component={() => <Home />} 
                />

                <Route 
                  exact path={routes.ALL_GEAR}
                  component={() => <AllGear />} 
                />

                <Route 
                  exact path={routes.ALL_BAGS}
                  component={() => <AllBags />}
                />

                <Route 
                  exact path={routes.MY_GEAR}
                  comontent={() => <UserGear />}
                />

                <Route 
                  exact path={routes.MY_BAGS} 
                  component={() => <UserBags />}
                />
            </Switch>
      </div>
          
       
      
    );
  }
}

export default App;
