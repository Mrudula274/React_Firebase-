import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBmokp1jsJHzB5AciVTNG0_DNYDKr_K4aY",
    authDomain: "first-firebase-app-29f8a.firebaseapp.com",
    projectId: "first-firebase-app-29f8a",
    storageBucket: "first-firebase-app-29f8a.appspot.com",
    messagingSenderId: "847339100913",
    appId: "1:847339100913:web:0d0f41a9dae7430aaae750",
    databaseURL: "https://first-firebase-app-29f8a-default-rtdb.firebaseio.com",
  };

  const app = initializeApp(firebaseConfig);

  export { app } ; 