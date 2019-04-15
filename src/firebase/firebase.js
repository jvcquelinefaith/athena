import app from 'firebase/app';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyAw_lqHoTQfHzphFg-9oMcaPFA7j4U4iRY",
  authDomain: "athena-6cebb.firebaseapp.com",
  databaseURL: "https://athena-6cebb.firebaseio.com",
  projectId: "athena-6cebb",
  storageBucket: "athena-6cebb.appspot.com",
  messagingSenderId: "134444880631"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

}

export default Firebase;
