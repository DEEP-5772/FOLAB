

import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyC9FiSuxjHb6YSb4TRF8HalMbHHr82DDns",
  authDomain: "appointment-7c810.firebaseapp.com",
  databaseURL: "https://appointment-7c810-default-rtdb.firebaseio.com",
  projectId: "appointment-7c810",
  storageBucket: "appointment-7c810.appspot.com",
  messagingSenderId: "811013219698",
  appId: "1:811013219698:web:20a72cede9817669b729eb"
});

export const auth = app.auth()
export default app

