function outside(x) {

	function inside(y) {
		return x + y; 
	}

	return inside;

}
// var inner = outside(5);
// console.log(inner);
//  console.log(inner(3));
 console.log(outside(5)(3));