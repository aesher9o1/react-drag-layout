import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBie5drEp_l3zmNsHUOkMZr2hFVzvZvWqg",
    authDomain: "internshala-video-player-demo.firebaseapp.com",
    databaseURL: "https://internshala-video-player-demo.firebaseio.com",
    projectId: "internshala-video-player-demo",
    storageBucket: "internshala-video-player-demo.appspot.com",
    messagingSenderId: "797710441922",
    appId: "1:797710441922:web:85c9b05edfe7e08f33ca5b"
  }

  firebase.initializeApp(firebaseConfig)

  export default firebase

