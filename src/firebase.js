import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyB3N-ZU46m8JmnE3FdVkTrm8MSZ-9Y3GMc',
  authDomain: 'linkedin-clone-5c219.firebaseapp.com',
  projectId: 'linkedin-clone-5c219',
  storageBucket: 'linkedin-clone-5c219.appspot.com',
  messagingSenderId: '251755791088',
  appId: '1:251755791088:web:8fd60b4ff65a293acbb835',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db
