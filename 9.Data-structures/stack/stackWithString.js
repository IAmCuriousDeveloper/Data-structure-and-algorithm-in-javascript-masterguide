var Stack = function () {
  this.storage = ''
}

Stack.prototype.push = function (val) {
  if (this.storage.length === 0) {
    this.storage = val
  } else {
    this.storage = val + ',' + this.storage
  }
}

Stack.prototype.pop = function () {
  if (this.storage.length === 0) {
    return 'stack is empty'
  } else {
    var temp = this.storage.split(',')
    console.log(temp)
    this.storage = temp.slice(1).join(',')
    return temp[0]
  }
}

Stack.prototype.size = function () {
  if (this.storage.length === 0) {
    return 0
  } else {
    return this.storage.split(',').length
  }
}

var myWeeklyMenu = new Stack()

myWeeklyMenu.push('RedBeans')

//the above is just my implementation of the stack with the string
