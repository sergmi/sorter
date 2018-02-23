class Sorter {
  constructor() {
    this.arr = [];
	this.compareFunction = function(a,b){return a-b;};
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    //this.arr.sort(this.compareFunction);
	let new_arr = [];
	indices.forEach(function(item,i,ar){
		new_arr.push(this.arr[item]);
	}.bind(this));
	new_arr.sort(this.compareFunction);
	return indices.forEach(function(item,i,ar){this.arr[item] = new_arr[i];}.bind(this));
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;