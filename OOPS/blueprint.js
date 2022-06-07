//lets make a constructor function for the blueprint

function Building(floors) {
  this.what = 'building'
  this.floors = floors
}

//instanciating the blueprint
var myBuilding = new Building(10)
console.log(myBuilding.floors)

//make a method for the blueprint(building)

Building.prototype.tellMeFloor = function () {
  console.log(`i have ${this.floors} floors`)
}

//now i want you to make a blueprint for the apartment (do it its an exercise for you)

//where should a method be placed in the blueprint?
//https://www.thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/

//short summary if you dont want to read the article
//1.you must also know that any method attached via this will get re-declared for every new instance we create, which could affect the memory usage of the application negatively if we wish to create so many instances.

//2. One should note though that modern Javascript engines such as V8 are smart enough for not to recreate instances of a method thanks to hidden classes.

//3. The only way to make a method private is to use the Symbol() constructor.

//4.Despite the advantages of the prototype approach, it will always depend on the situation for which one to follow. For example the first approach can be useful if we needed access to local private variables from our method. In some situations we might find that we will be creating a small number of instances and accessing local object variables is part of the code design, then the first approach is not a bad choice.

//The prototype approach would still be better when there is no need for the method to access local variables and when the creation of so many object instances is expected in which memory consumption becomes a concern.

//5.good approach Back to our Person constructor again, consider a person has a private list of bank records which we do not wish to expose publicly yet we need to get the total balance from it. At the same time we want to have a method for getting the person's name, family and balance in a single string. To achieve that we'll apply a hybrid of both approaches, we need to have some inside access within the object yet make sure to minimize our memory consumption when we can do so(via prototype methods).

function Person(name, family) {
  this.name = name
  this.family = family

  var records = [{type: 'in', amount: 0}]

  this.addTransaction = function (trans) {
    if (trans.hasOwnProperty('type') && trans.hasOwnProperty('amount')) {
      records.push(trans)
    }
  }

  this.balance = function () {
    var total = 0

    records.forEach(function (record) {
      if (record.type === 'in') {
        total += record.amount
      } else {
        total -= record.amount
      }
    })

    return total
  }
}

Person.prototype.getFull = function () {
  return this.name + ' ' + this.family
}

Person.prototype.getProfile = function () {
  return this.getFull() + ', total balance: ' + this.balance()
}

//below two methods are just my doubt if i will put above two methods in prototype then what will happen and i know the answers now that it will not work because records are private and i will not be able to access them

// Person.prototype.addNewtransaction = function (trans) {
//   if (trans.hasOwnProperty('type') && trans.hasOwnProperty('amount')) {
//     console.log(this.records)
//     this.records.push(trans)
//   }
// }

// Person.prototype.totalBalance = function () {
//   var total = 0

//   this.records.forEach(function (record) {
//     if (record.type === 'in') {
//       total += record.amount
//     } else {
//       total -= record.amount
//     }
//   })

//   return total
// }
