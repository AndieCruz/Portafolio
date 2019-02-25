//Declaramos select del año
let yearbutton = document.getElementById("yearbttn");
//Declaramos select del usurio
let userbutton = document.getElementById("user");
//Declaramos boton del consulta
let searchbutton = document.getElementById("search");
//Constante de la sección know del HTML
const resultArea = document.getElementById("result");
//Constante que contiene la data
const injuriesBy = window.INJURIES;
//Constante que contiene la tabla
const table = document.getElementById('table');
//Declaramos select de ordenaenar
const order = document.getElementById('order');
//Constante que contiene el resultado de la tabla en arreglo
let arrOrderCheat = [];

//Función al botón de consulta. Toma los inputs y Obtiene su Valor. Ejecuta la función consult y muestra el resultado.
searchbutton.addEventListener("click", () => {
  let yearValue = yearbutton.value;
  let userValue = userbutton.value;

//Se imprime la tabla con los datos da la función order
const printTable = (arrayOrder) =>{
  document.getElementById('table').innerHTML = "";
  table.innerHTML= `<table>
                <tr>
                 <th colspan='2'> AÑO </th>
                 </tr>
                 <tr>
                 <td colspan='2'>${arrayOrder[0]}</td>
                 <tr>
                 <th> TIPO DE HERIDO </th>
                 <th> TOTAL </th>
                 </tr>
                 </table>`

  for (let i = 1; i <arrayOrder.length; i++) {
  const column = "<tr><td>"+arrayOrder[i][0]+"</td><td>"+arrayOrder[i][1]+"</td></tr>"
  const row = document.createElement("tr");
  row.innerHTML= column;
  document.getElementById("table").appendChild(row);
  }
}

  const orderByAscent = () => { //funcion ordenar asc/desc
  let orderSelect = order.value;
     const orderObj = window.data.orderByAsc(arrOrderCheat, orderSelect)
     printTable(orderObj)
   }
  order.addEventListener('change', orderByAscent); //funcion recorre el objeto*/


  if(userValue === 'all'){
    resultArea.innerHTML = '';
    const resultTable = window.data.order(injuriesBy, yearValue, userValue);
    printTable(resultTable);
    arrOrderCheat = resultTable
  } else {
    table.innerHTML = '';
    const resultData = window.data.consult(injuriesBy, yearValue, userValue);
    resultArea.innerHTML = `<b>Año:</b>${resultData[0]} <br><b>Total de heridos:</b>${resultData[1]}`;
  }
});
