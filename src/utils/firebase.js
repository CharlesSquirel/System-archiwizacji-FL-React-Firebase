import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { uid } from "uid";

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

export const writeToArchive = (datas) => {
  const uuid = uid();
  set(ref(db, `files/${uuid}`), datas);
};

export const readfromArchive = (settingFunction) => {
  onValue(ref(db), (snapshot) => {
    const data = snapshot.val();
    settingFunction(data ? data.files : {});
  });
};

export const getActualUser = (func) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      func(user.email);
    }
  });
};
