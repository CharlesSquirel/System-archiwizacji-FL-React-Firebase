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
  set(ref(db, `files/archive/${uuid}`), datas);
};

export const readfromArchive = (settingFunction) => {
  onValue(ref(db, "files/archive"), (snapshot) => {
    const data = snapshot.val();
    settingFunction(data ? data : {});
  });
};

export const writeToEdicts = (values) => {
  const uuid = uid();
  set(ref(db, `files/edicts/${uuid}`), {
    number: values.number,
    date: values.date,
    title: values.title,
    toWhom: {
      da: values.toWhom.da,
      dt: values.toWhom.dt,
      dk: values.toWhom.dk,
      k: values.toWhom.k,
    },
  });
};

export const readfromEdicts = (settingFunction) => {
  onValue(ref(db, "files/edicts"), (snapshot) => {
    const data = snapshot.val();
    settingFunction(data ? data : {});
  });
};

export const writeToContracts = (datas) => {
  const uuid = uid();
  set(ref(db, `files/contracts/${uuid}`), datas);
};

export const readfromContracts = (settingFunction) => {
  onValue(ref(db, "files/contracts"), (snapshot) => {
    const data = snapshot.val();
    settingFunction(data ? data : {});
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
