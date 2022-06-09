// VARIABLES
/* '$' hace referencia a las variables o nodos del DOM */
const d     = document,
$fragment   = d.createDocumentFragment();

export const  $card     = d.getElementById("card");

// FUNCIONES
// Obtiene la data del personaje y lo muestra en el HTML
export function cardHTML(data) {

  // console.log(data);

  // Hacemos la destructuración del la data del personaje
  const { image, name, status, species, gender } = data;
  // console.log(image)

  // Lo que se mostrara en el DOM
  // Imagen
  const $img = d.createElement('IMG');
  $img.src = `${ image }`;
  $img.alt = "avatar";

  // Div
  const $div = d.createElement('DIV');
  $div.classList.add('card-body');
  
  // h2
  const $h2 = d.createElement('H2');
  $h2.classList.add('card-title');
  $h2.textContent = `${ name }`;
  $div.appendChild( $h2 );

  // p
  const $p = d.createElement('P');
  $p.classList.add(`${ status == 'Alive' ? "alive" : status == 'Dead' ? "dead" : "unknown"}`, 'card-text');
  $p.textContent = `${ status }`;
  $div.appendChild( $p );

  // ul, li
  const $ul = d.createElement('UL');
  const $li1 = d.createElement('li');
  const $li2 = d.createElement('li');
  $ul.classList.add('list-group');
  $li1.classList.add('list-group-item');
  $li2.classList.add('list-group-item');
  $li1.textContent = `${ species }`;
  $li2.textContent = `${ gender }`;

  $ul.appendChild( $li1 );
  $ul.appendChild( $li2 );


  // "guardamos" en el `$fragment` antes de insertar los elementos en la variable `$card` para mostrarlo en el DOM
  const elements = [$img, $div, $ul];

  elements.forEach(element => {
    
    $fragment.appendChild( element);
    
  });
  
  $card.appendChild( $fragment );

  // $card.innerHTML = `
  //       <img src="${ image }" class="card-img-top" alt="${ name }">
  //       <div class="card-body">
  
  //         <h2 class="card-title">${ name }</h2>
  
  //         <p class="${ status == 'Alive' ? "alive" : status == 'Dead' ? "dead" : "unknown" } card-text">${ status }</p>
  
  //       </div>
  //       <ul class="list-group list-group-flush">
  //         <li class="list-group-item">${ species }</li>
  //         <li class="list-group-item">${ gender }</li>
  //       </ul>
  // `;

  
}

// Limpia el HTML generado con los datos
export function cleanHTML(){
  while($card.firstChild){
      $card.removeChild($card.firstChild);
  }
}

//
// export const sha = () => {

//   if($card.classList.contains('shadow')){
//     $card.classList.remove('shadow')

//     console.log($card)
//   }

// }
// sha()
