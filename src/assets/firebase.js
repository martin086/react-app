// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "myapp-ecommerce-67f3e.firebaseapp.com",
  projectId: "myapp-ecommerce-67f3e",
  storageBucket: "myapp-ecommerce-67f3e.appspot.com",
  messagingSenderId: "959287224114",
  appId: "1:959287224114:web:46f3ab4f15b46b91bad92b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db,"productos"), {
            idCategoria: prod.idCategoria,
            nombre: prod.nombre,
            tipo: prod.tipo,
            precio: prod.precio,
            unidad: prod.unidad,
            cantidad: prod.cantidad, 
            stock: prod.stock,
            imagen: prod.imagen,
        })
    });
}

export {cargarBDD};