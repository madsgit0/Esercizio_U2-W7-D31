
class UserList{
    
    constructor(nome, surname, year){
        this.nome = nome
        this.cognome = surname
        this.anno = year
 }

//  createUserDiv() {
//     let userDiv = document.createElement('div') 
//     userDiv.classList.add('car')
//     userDiv.innerText = this.nome, this.cognome, this.anno 
//     return userDiv
//   }
}



let users = [
    new UserList("Mario", "Rossi", "11/4/1982"),
    new UserList("Giuseppe", "Verdi", "11/4/1938"),
    new UserList("Francesco", "Bianchi", "11/4/1992"),
]

let userDiv = document.querySelector("div")
for( let i = 0; 1 < users.length; i++){
    userDiv.innerHTML += `<li> ${us[i]} </li>`
}

// for (let user of users) { 
//     let userList = document.getElementById("cars-list")
//     .innerText
//   }

// console.log(users);

//--------
  

// class Car {

//     constructor(marca, modello, prezzo) {
//       this.brand = marca
//       this.model = modello
//       this.price = prezzo
//     }
  
//     createCarDiv() {
//       let carDiv = document.createElement('div') 
//       carDiv.classList.add('car')
//       carDiv.innerText = this.brand
//       return carDiv
//     }
//   }
  
//   let car1 = new Car("Toyota", "Yaris", 5000)
//   let car2 = new Car("Mercedes", "Classe A", 30000)
  
//   console.log(car1)
//   console.log(car2)
  
 
//   let cars = [
//     new Car("Toyota", "Yaris", 5000),
//     new Car("Mercedes", "Classe A", 5000),
//     new Car("Toyota", "Yaris", 5000),
//     new Car("Fiat", "Punto", 5000)
//   ]
  
 
  
//   for (let car of cars) { 
//     let carsList = document.getElementById("cars-list")
//     let carDiv = car.createCarDiv()
//     carsList.appendChild(carDiv)
//   }

  