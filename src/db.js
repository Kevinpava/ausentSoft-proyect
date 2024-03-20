//Se importa mongoDb 
import mongoose from "mongoose";



// Importamos la librería mongoose para trabajar con MongoDB


export const connectDB = async () => {
  try {
    // Conectamos a la base de datos de MongoDB
    await mongoose.connect("mongodb://localhost/merndb");
    console.log("Conectado a MongoDB"); // Si se conecta correctamente, imprimimos un mensaje en la consola
  } catch (error) {
    console.log(error); // Si hay un error, imprimimos el mensaje de error en la consola
  }
};


