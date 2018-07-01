import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBepAdT86l5Ay7iIRmT3mtbuqOB3jV-kNs",
    authDomain: "my-camera-bag.firebaseapp.com",
    databaseURL: "https://my-camera-bag.firebaseio.com"
};

const app = firebase.initializeApp(config);
export const rebase = Rebase.createClass(app.database());

// //add the authProvides your app needs: google, facebook, twitter, github,
export const googleProvider = new firebase.auth.GoogleAuthProvider();