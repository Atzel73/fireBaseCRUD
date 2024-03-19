// Importa las funciones que necesitas del SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, 
        collection, 
        addDoc, 
        getDocs, 
        onSnapshot, 
        deleteDoc, 
        doc,
        getDoc,
        updateDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

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




///Guardar datos en FireBase
export const saveTask = (title, description, name) => {
  addDoc(collection(db, 'tasks'), 
  { title,
    description, 
    name})
    .then(() => {
      console.log("Tarea guardada correctamente:", title, description);
    })
    .catch((error) => {
      console.error("Error al guardar la tarea:", error);
    });
};


///Enlistar datos
export const getTasks = () => getDocs(collection(db, 'tasks'))

export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback)

///Borrar datos

export  const deleteTask = id => deleteDoc(doc(db, 'tasks', id))

///Editar datos

export const getTask = id =>  getDoc(doc(db, 'tasks', id))


export const updateTask = (id, newField) => updateDoc(doc(db, 'tasks', id), newField)