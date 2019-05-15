import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDtN9VgXYc2bA-FWni9BPYJc65IR-C6rvQ",
    authDomain: "app-music-c4581.firebaseapp.com",
    databaseURL: "https://app-music-c4581.firebaseio.com",
    projectId: "app-music-c4581",
    storageBucket: "app-music-c4581.appspot.com",
    messagingSenderId: "386735282091",
    appId: "1:386735282091:web:70173585a6040aad"
}

firebase.initializeApp(firebaseConfig);

export default firebase;