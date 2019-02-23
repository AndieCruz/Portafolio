//Declaramos input del año
let yearbutton = document.getElementById("yearbttn");
//Declaramos input del usurio
let userbutton = document.getElementById("user");
//Declaramos input del consulta
let searchbutton = document.getElementById("search");
//Constante de la sección know del HTML
const resultsecc = document.getElementById("result");
//Constante que contiene la data
const injuriesBy = window.INJURIES;
//Constante que contiene la tabla
const table = document.getElementById('table');


//Función al botón de consulta. Toma los inputs y Obtiene su Valor. Ejecuta la función consult y muestra el resultado.
searchbutton.addEventListener("click", () => {
  let yearValue = yearbutton.value;
  let userValue = userbutton.value;

const printTable = (yearFind) =>{
  document.getElementById('table').innerHTML = "";
  for (let i = 1; i <yearFind.length; i++) {
    // Crea las hileras de la tabla
    let hilera = document.createElement("tr");
    console.log(yearFind);
    for (let j = 0; j < 3; j++) {
      // // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // // texto sea el contenido de <td>, ubica el elemento <td> al final
      // // de la hilera de la tabla
      // let celda = document.createElement("th");
      // let textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
      // celda.appendChild(textoCelda);
      // hilera.appendChild(celda);
    }


  const column = "<tr><td>"+yearFind[0]+"</td></tr><td>"+yearFind[i][1]+"</td><td>"+yearFind[2]+"</td>"
  const row = document.createElement("tr");
  row.innerHTML= column;
  document.getElementById("table").appendChild(row);
console.log(yearFind);
}
}


  if(userValue === 'all'){
    const resultDatos = window.data.order(injuriesBy, yearValue, userValue);
    printTable(resultDatos);
  //document.getElementById('table').innerHTML = "";

    // table.innerHTML = `          <table>
    //             <tr>
    //               <th> AÑO </th>
    //               <th> TIPO DE HERIDO </th>
    //               <th> TOTAL </th>
    //               </tr>
    //               <tr>
    //                 <td rowspan="4"> ${resultDatos[0]} </td>
    //                 <td> MOTOCICLISTA </td>
    //                 <td> ${resultDatos[1]} </td>
    //               </tr>
    //               <tr>
    //                 <td> CICLISTA </td>
    //                 <td> ${resultDatos[2]} </td>
    //               </tr>
    //               <tr>
    //         <td> PEATON </td>
    //         <td> ${resultDatos[3]} </td>
    //     </tr>
    //     <tr>
    //       <td> AUTOMOVILISTAS </td>
    //       <td> ${resultDatos[4]} </td>
    //   </tr>
    //           </table>`
  } else {
    table.innerHTML = '';
    const resultData = window.data.consult(injuriesBy, yearValue, userValue);
    resultsecc.innerHTML = `<b>Año:</b>${resultData[0]} <b>Total de heridos:</b>${resultData[1]}`;
  }
});
