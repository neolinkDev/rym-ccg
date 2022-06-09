import { $card, cardHTML, cleanHTML } from "./functions";


// Fn que conecta con la API
export async function rymAPI(){
    // VARIABLES
    const urlAPI    = 'https://rickandmortyapi.com/api/character/';

    // Creamos el id de uno de los 826 personajes de manera random
    let id = Math.floor(Math.random() * 826) + 1;
    // console.log(id)

    // Concatenamos el id con la url de la API para traernos el personaje con ese id
    const urlCharacter = urlAPI + id;
    // console.log(urlCharacter)

    try {

        const response = await fetch( urlCharacter ),
              result   = await response.json(); 
        // console.log( result )

        cleanHTML();

        if(!response.ok){
            throw {
              status: response.status,
              statusText: response.statusText
            }
        }

        // Obtiene la data del personaje y lo muestra en el HTML
        cardHTML( result );

    } catch (error) {
        
        let msg = error.statusText || "Ocurrió un error";
        $card.innerHTML = `Error ${error.status}: ${msg}`;

    }

}