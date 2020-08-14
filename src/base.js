import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDkoUurAak7E7YhLEUj9B9j8T_s0tBZjKQ",
    authDomain: "chatbox-mano.firebaseapp.com",
    databaseURL: "https://chatbox-mano.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export{ firebaseApp }
export default base