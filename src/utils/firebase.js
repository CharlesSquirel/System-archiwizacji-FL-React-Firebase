import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { uid } from "uid";
import { deleteObject, getStorage, ref as storageRef, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
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

export const deleteFromStorage = (fileName) => {
  const fileRef = storageRef(storage, `edicts/${fileName}`)
  deleteObject(fileRef).then(() => {
    console.log("deleted")
  }).catch((error) => {
    throw error
  });
}

export const uploadToStorage = (filename, file) => {
  const fileRef = storageRef(storage, `edicts/${filename}`)
  uploadBytes(fileRef, file).then(() => {
    console.log("uploaded")
  }).catch((error) => {
    throw error
  })
}

export const uptadeInStorage = (fileName, file) => {
  deleteFromStorage(fileName)
  uploadToStorage(fileName, file)
}

export const getActualUser = (func) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      func(user.email);
    }
  });
};
