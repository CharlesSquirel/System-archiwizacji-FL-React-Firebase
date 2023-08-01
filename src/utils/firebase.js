import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { uid } from "uid";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAaiuMwRZ8WJSE--oWSnp9aF2P3-YzD2sg",
  authDomain: "system-archiwizacji-fl.firebaseapp.com",
  databaseURL: "https://system-archiwizacji-fl-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "system-archiwizacji-fl",
  storageBucket: "system-archiwizacji-fl.appspot.com",
  messagingSenderId: "988885929845",
  appId: "1:988885929845:web:c3cb5079f5f9f579458d3c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getDatabase(app);

export const storage = getStorage(app);

export const writeToDb = (where, datas) => {
  const uuid = uid();
  set(ref(db, `files/${where}/${uuid}`), datas);
}

export const readFromDb = (where, settingFunction) => {
  onValue(ref(db, `files/${where}`), (snapshot) => {
    const data = snapshot.val();
    settingFunction(data ? data : {});
  });
}

export const getActualUser = (func) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      func(user.email);
    }
  });
};
