import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebase.config";


  firebase.initializeApp(firebaseConfig)

const provider = new firebase.auth.GoogleAuthProvider();

export const handleGoogleSignIn = () => {
 return firebase .auth() .signInWithPopup(provider)
    .then((res) => {
      const { displayName, email, photoURL } = res.user;
      const isSignIn = {
        isLogin: true,
        name: displayName,
        email: email,
        photo: photoURL,
        success: true,
      };
     userVerifyToken();
     return isSignIn;
      
    })
    .catch((error) => console.log(error, error.message));
};

const userVerifyToken = () => {
  firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
  sessionStorage.setItem("token", idToken);
  }).catch(function(error) {
  // Handle error
  });
}

export const handleSignOut = () => {
  console.log("Sign Out is clicked");
 return firebase
    .auth()
    .signOut()
    .then((result) => {
      const signedOut = {
        isLogin: false,
        name: "",
        email: "",
        photo: "",
      };
      return signedOut;
    })
    .catch((err) => console.log(err));
};

export const createUserWithEmailAndPassword = (name, email, password) => {
   return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
            const newUserInfo = res.user;
            newUserInfo.success = true;
            updateUserName(name);
             return newUserInfo;
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
          newUserInfo.success = false;
          return newUserInfo;
        });
}
export const signInWithEmailAndPassword = (email, password) => {
           return firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((res) => {
              const newUserInfo = res.user;
              newUserInfo.success = true;
             return newUserInfo
              //   console.log("sign in user info = ", res.user);
            })
            .catch((error) => {
              const newUserInfo = {};
              newUserInfo.error = error.message;
              newUserInfo.success = false;
              return newUserInfo
            });
    }

     const updateUserName = (name) => {
       var user = firebase.auth().currentUser;

       user
         .updateProfile({
           displayName: name,
         })
         .then(function () {
           console.log("user name update successfully");
         })
         .catch(function (error) {
           console.log(error);
         });
     };