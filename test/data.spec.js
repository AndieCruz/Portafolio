require('../src/data.js');
require('../src/data/injuries/injuries.js');

describe('DATA', () => {
  it('Debería ser un objeto', () => {
    expect(typeof data).toBe('object');
  });
});

describe('CONSULT', () => {
    it('Debería ser una funcion', () => {
      expect(typeof window.data.consult).toBe('function');
    });
    it('Debería devolver el año 2015 y 2443175, al elegir 2015 y TODOS', () =>{
      expect(window.data.consult(window.INJURIES,"2015-01-04","Total_Injured_Persons")).toEqual(["2015", 2443175])
    });
    it('Debería devolver el año 2001 y 60236, al elegir 2001 y MOTOCICLISTAS', () =>{
      expect(window.data.consult(window.INJURIES,"2001-01-04","Total_Injured_Persons_Motorcyclists")).toEqual(["2001", 60236])
    });
  });

describe('ORDER', () => {
   it('Debería ser una funcion', () => {
    expect(typeof window.data.order).toBe('function');
   });
   it('Debería devolver el año 2010 y 82000,52000,70000,25222,  al elegir 2010 y TODOS LOS HERIDOS', () =>{
     expect(window.data.order(window.INJURIES,"2010-01-04","all")).toEqual([["MOTOCICLISTA",82000],["CICLISTA",52000],["PEATON",70000],["AUTOMOVILISTAS",25222]])
   });
   it('Debería devolver el año 2015 y 88000,45000,70000,24252,  al elegir 2015 y TODOS LOS HERIDOS', () =>{
     expect(window.data.order(window.INJURIES,"2015-01-04","all")).toEqual([["MOTOCICLISTA", 88000],["CICLISTA",45000],["PEATON",70000],["AUTOMOVILISTAS",24252]])
   });
  });

describe('ORDER BY ASC', ()=>{
  it('Debería ser una funcion', () =>{
    expect(typeof window.data.orderByAsc).toBe('function');
  });
  it('Debería devolver el año 2010 y 25222,52000,70000,82000, al elegir MENOS HERIDOS', () =>{
    expect(window.data.orderByAsc([["MOTOCICLISTA",82000],["CICLISTA",52000],["PEATON",70000],["AUTOMOVILISTAS",25222]],"des")).toEqual([["AUTOMOVILISTAS",25222],["CICLISTA",52000],["PEATON",70000],["MOTOCICLISTA",82000]])
  });
  it('Debería devolver el año 2015 y 24252,45000,70000,88000 al elegir MENOS HERIDOS', () =>{
    expect(window.data.orderByAsc([["MOTOCICLISTA",88000],["CICLISTA",45000],["PEATON",70000],["AUTOMOVILISTAS",24252]],"des")).toEqual([["AUTOMOVILISTAS",24252],["CICLISTA",45000],["PEATON",70000],["MOTOCICLISTA",88000]])
  });
  it('Debería devolver el año 2010 y 82000,70000,52000,25222, al elegir MAS HERIDOS', () =>{
    expect(window.data.orderByAsc([["MOTOCICLISTA",82000],["CICLISTA",52000],["PEATON",70000],["AUTOMOVILISTAS",25222]],"asc")).toEqual([["MOTOCICLISTA",82000],["PEATON",70000],["CICLISTA",52000],["AUTOMOVILISTAS",25222]])
  });
  it('Debería devolver el año 2015 y 24252,45000,70000,88000 al elegir MENOS HERIDOS', () =>{
    expect(window.data.orderByAsc([["MOTOCICLISTA",88000],["CICLISTA",45000],["PEATON",70000],["AUTOMOVILISTAS",24252]],"des")).toEqual([["AUTOMOVILISTAS",24252],["CICLISTA",45000],["PEATON",70000],["MOTOCICLISTA",88000]])
  });
});
//   it('Debería devolver el año 2001 y 60236, al elegir 2001 y MOTOCICLISTAS', () =>{
//     expect(window.data.consult(window.INJURIES,"2001-01-04","Total_Injured_Persons_Motorcyclists")).toEqual(["2001", 60236])
//   });
// });
