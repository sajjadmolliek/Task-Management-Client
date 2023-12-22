/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState(null);
  const [userPhoto, setUserPhoto] = useState(null);
  const [findShoes, setFindShoes] = useState([]);

  // Create User by email and Password
  const userCreateByEmailPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login by email and Password
  const userLoginByEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   All Logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Keep The State True When User Belongs
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      const sendingUser = { email: user?.email };
      setLoading(false);

      if (currentUser) {
        axios
          .post("https://task-management-weld-pi.vercel.app/jwt", sendingUser, {
            withCredentials: true,
          })
          .then(() => {});
      } else {
        axios
          .post("https://task-management-weld-pi.vercel.app/logout-jwt", sendingUser, {
            withCredentials: true,
          })
          .then(() => {});
      }
    });

    return () => {
      unSubscribe();
    };
  }, [user]);

  // Receving name

  updateProfile(auth.currentUser, {
    displayName: userName,
    photoURL: userPhoto,
  })
    .then()
    .catch();

  //   Passing Value By ContextAPI
  const passValue = {
    userCreateByEmailPassword,
    userLoginByEmailPassword,
    googleLogin,
    user,
    logOut,
    loading,
    // passing setUserName() to catch user name when Resister
    setUserName,
    // passing setUserPhoto() to catch user Photo Url when Resister
    setUserPhoto,
    // passing setFindShoes() to Received Finding Shoes by clicking 6 by one card
    setFindShoes,
    // Passing Finding Shoes to use
    findShoes,
  };

  return (
    <AuthContext.Provider value={passValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
