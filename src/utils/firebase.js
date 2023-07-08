import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { uid } from "uid";
import { ref, set, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";

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

export const writeToDB = (datas) => {
  const uuid = uid();
  set(ref(db, `files/${uuid}`), datas);
};

export const readfromDB = (settingFunction) => {
  onValue(ref(db), (snapshot) => {
    const data = snapshot.val();
    settingFunction(data ? data.files : {});
  });
};
