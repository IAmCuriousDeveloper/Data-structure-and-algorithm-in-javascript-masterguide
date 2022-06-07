//lifo -> last in first out

//make a constructor function and make a three methods push pop and size

function Stack(n) {
  this.size = n
  this.top = 0
  this.bottom = null
  this.storage = new Array(n)
  this.push = function (val) {
    if (this.top === this.size - 1) {
      return 'stack is full'
    }
    this.top++
    this.storage[this.top] = val
  }
  this.pop = function () {
    if (this.top === 0) {
      return 'stack is empty'
    }
    this.top--
    return this.storage[this.top + 1]
  }
  this.size = function () {
    return this.top + 1
  }
}
