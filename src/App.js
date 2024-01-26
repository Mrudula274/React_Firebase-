//1/import { getDatabase , ref, set } from "firebase/database" ;
import { app } from "./firebase";
import './App.css';
import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";
import SignupPage from "./pages/signup";
import SignInPage from "./pages/signIn";

//1/const db = getDatabase(app);
const auth = getAuth(app);

function App() {
 /*1 const putData = () => {
    set(ref(db, "user/mrudula"), {
      id: 1,
      name: "Mrudula Wakodkar",
      age: 20,
    });
    <button onClick={putData}>Put Data to Firebase DB</button>
  }; 1*/ 
 /* const signupUser = () => {
    createUserWithEmailAndPassword(
      auth, 
      'mrudula.dev@gmail.com' , 
      '1234567').then((value) => console.log(value));
  };*/

  return (
    <div className="App">
      <SignupPage/>
      <SignInPage/>
    </div>
  );
}

export default App;
