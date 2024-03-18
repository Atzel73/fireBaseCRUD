// Importa las funciones que necesitas del SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAdzl-HhOVAAhSJE4CTxYjdO7toEbT62U0",
  authDomain: "crud-569a6.firebaseapp.com",
  projectId: "crud-569a6",
  storageBucket: "crud-569a6.appspot.com",
  messagingSenderId: "857019519989",
  appId: "1:857019519989:web:0a6a80a9047092cdfe46bc"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const saveTask = (title, description) => {

    
  addDoc(collection(db, 'tasks'), { title, description })
    .then(() => {
      console.log("Tarea guardada correctamente:", title, description);
    })
    .catch((error) => {
      console.error("Error al guardar la tarea:", error);
    });
};
