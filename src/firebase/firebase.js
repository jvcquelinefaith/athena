import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

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
    this.db = app.database();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

  associations = () => this.db.ref('associations');
  companies = () => this.db.ref('companies');


  writeProfileData = (state) =>
    this.db.ref(`profiles/${this.auth.currentUser.uid}`)
    .set({ ...state });
  //  .then(alert());
}

export default Firebase;
