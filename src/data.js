//window es un objeto global que contiene la funcion consult.
window.data = {
  consult: (injuriesBy, yearValue, userValue) => {
    //Variables que guardan en resultado de la busqueda
    let yearResult = "";
    let userResult = "";
    //Usamos FIND para buscar el año dentro del objeto.
    const yearFound = injuriesBy.find(element => element.Year == yearValue);
      //Dentro de un ciclo FOR buscamos las Key y comparamos con el valor del Usuario.
      for (const key in yearFound) {
        if (yearFound.hasOwnProperty(key)) {
          const element = yearFound[key];
          if (  key == userValue) {
            yearResult = yearValue.substr(0, 4);
            userResult = element;
          } //for if If
        } //For IF
      } // For
    return [yearResult, userResult]
  }, //Consult
  order: (injuriesBy, yearValue, userValue) => {
    let arrayOrder = [];
    injuriesBy.forEach(element => {
      let year = element.Year;
      let moto = ["MOTOCICLISTA",element.Total_Injured_Persons_Motorcyclists];
      let bike = ["CICLISTA",element.Total_Injured_Persons_Pedalcyclists];
      let walk = ["PEATON",element.Total_Injured_Persons_Pedestrians];
      let transit = ["AUTOMOVILISTAS",element.Total_Injured_Persons_Transit_Total];
        if (yearValue === year && userValue === "all") {
            arrayOrder.push(year.substr(0,4), moto, bike, walk, transit);
        }
      }) //ForEach
      return arrayOrder;
  },//Order
  orderByAsc: (arrayOrder, order) => { //funcion orden ascendente y descendente

      if (order === "asc") {
        arrayOrder.sort(function (a, b) {
          return a[1] - b[1];

        });
      } else if (order === "desc") {
        arrayOrder.sort(function (a, b) {
          return b[1] - a[1];
        });
      }
      return arrayOrder;
    }//orderByAsc
}; //window
