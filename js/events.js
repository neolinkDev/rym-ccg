import { rymAPI } from "./api";

// VARIABLES
const d = document;
      

// EVENTOS
// Función que contiene el evento click del botón generar
export function fnGenerateBtn(){

    const $generateBtn = d.getElementById('btn-generate');
    
    $generateBtn.addEventListener('click', () => {

        rymAPI();

    });
}