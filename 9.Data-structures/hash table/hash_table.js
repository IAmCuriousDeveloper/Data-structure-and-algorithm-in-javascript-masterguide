//what is hash table?
//hash tables are used to store key-value pair ,
//unlike arrays keys are not ordered
//hash tables are fast for finding values,adding aor removing values
//ex-> python-dictionaries,js-objects and maps,java,go,scala-> maps,ruby-> hashes etc
//in js -objects have some restrictions but they are basically a hash table

//what is hashing algorithms?
//hash function/algorithm takes the variable length of input and give output of fixed numbers ,uaually its one way (means we cannot get back the input with o/p provided)

//discuss what makes a good hashing algorithms
//it should be fast(constant time)
//it should not store values at the same spot ,it should distribute values uniformly.
//it should be deterministic (same ip/ yield same output every time)

//what is collison and what to do if it occur?

//lets take an example
//we use only array coz objects and map are inbuilt in js
// que->we have to store the values of colors in hexadecimal and we want to acces those number by there name rather than indices

//ex-> var colors = [#ff0967,#764502,#230099];
//we dont know the value of those colors just by looking at the hex values
//just for info. 1st is pink 2nd is brown 3rd is blue (all are shades of color)
//we want to get those values based on name like colors['pink'] rather than colors[0];

//we need a function to convert those values [pink,brown,blue] into integers so that we can use them to get those values from the array (THIS FUNCTION IS CALLED HASH FUNCTION)

//lets write our hash function which takes the string value (color name ) and array length and our function deide where to put that value in array

var colors = [];
function hashFunction(key, arrayLength) {
  var lowerKey = key.toLowerCase();
  var total = 0;
  for (var char of lowerKey) {
    let value = char.charCodeAt(0) - 96;
    total = total + value;
  }
  total = total % arrayLength;
  console.log(total);
  colors[total] = lowerKey;
}

//lets understand what this function do
//we lowercase the value of key
//every char has a unique charcode value
//we take that values form the keys and sums up also subtract by 96 so that we get the a = 1 for b =2 like results(just for simplicity)
//now we want to store that value in array with provided length so we we mod it and store it so that it fits in the array
hashFunction("pink", 10);
hashFunction("brown", 10);
hashFunction("blue", 10);
console.log(colors);

//we have some problems with our hash table
//1.it only accept strings though we fix the case sensitivity problem (key can be anything)
//2.its not constant time hashing required O(n) according to size of string
//not handling collision ,here pink and blue both gets same index.
//IMPORTANT: if you want to use the hash table then keeping the size of array prime number greatly reduce the collision there are many articles are there on internet you can read that. also use prime number while computing the index greatly reduce collision
//now lets overcome some problems

//well there are many ways to avoid colliosn but two commonly use are
//1.seprate chaining
//2.linear probing
//here we use the seperate chaining
class HashTable {
  constructor(size = 47) {
    this.KeyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let prime_number = 31;
    //here we are not looping key greater than 100 characters
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = total * prime_number + value;
    }
    total = total % this.KeyMap.length;
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    //check if something is present on that index?
    if (!this.KeyMap[index]) {
      this.KeyMap[index] = [];
    }
    this.KeyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.KeyMap[index]) {
      //looping for the every value on that array index if present
      for (let i = 0; i < this.KeyMap[index].length; i++) {
        if (this.KeyMap[index][i][0] === key) {
          return this.KeyMap[index][i][1];
        }
      }
    }
    return `${key} not found`;
  }

  keys() {
    let keyArr = [];
    for (let i = 0; i < this.KeyMap.length; i++) {
      if (this.KeyMap[i]) {
        for (let j = 0; j < this.KeyMap[i].length; j++) {
          if (!keyArr.includes(this.KeyMap[i][j][0])) {
            keyArr.push(this.KeyMap[i][j][0]);
          }
        }
      }
    }
    return keyArr;
  }
  values() {
    let valueArr = [];
    for (let i = 0; i < this.KeyMap.length; i++) {
      if (this.KeyMap[i]) {
        for (let j = 0; j < this.KeyMap[i].length; j++) {
          if (!valueArr.includes(this.KeyMap[i][j][1])) {
            valueArr.push(this.KeyMap[i][j][1]);
          }
        }
      }
    }
    return valueArr;
  }
}

let myHashTable = new HashTable(17);
myHashTable.set("yellow", "#ffff00");
myHashTable.set("olive", "#808000");
myHashTable.set("salmon", "#FA8072");
myHashTable.set("lightcoral", "#F08080");
myHashTable.set("mediumvioletred", "#C71585");

console.log(myHashTable);

//Time Complexity
//insertion
//deletion
//accessing all O(1)
//it all depends on our hast function
