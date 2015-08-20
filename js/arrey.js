// Array.prototype.indexOf
// Array.prototype.lastIndexOf
// Array.prototype.every  
// Array.prototype.some  
// Array.prototype.forEach  
// Array.prototype.map  
// Array.prototype.filter
// Array.prototype.reduce
// Array.prototype.reduceRight

// var data = [1,2,3,4,5];


//1.Array.prototype.forEach
function forEach(arr,fn){
	if(arr.forEach){
		return arr.forEach(fn);
	}else{
		for(var i = 0; i < this.length ; i++){
				fn.call(arr,this[i],i,this);
		}
	}
}
// forEach(data,function(v,i,a){a[i] += 1});
// console.log(data);//[2,3,4,5,6]


//2.Array.prototype.map
function map(arr,fn){
	if(arr.map){
		return arr.map(fn);
	}else{
		for(var i = 0; i < this.length ; i++){
				arr[i] = fn.call(arr,this[i],this,this);
		}
		return arr;
	}
}

// var a = map(data,function(x){return x*x});
// console.log(a);//[1,4,9,16,25]


//3.Array.prototype.some
function some(arr,fn){
	if(arr.some){
		return arr.some(fn);
	}else{
		var passed = false;
		for (var i = 0; i < this.length; i++) {
			if(passed === true) {break;}
			passed = !!fn.call(arr, this[k], k, this);
		}
		return passed;
	}
}
// a = some(data,function(v,i,a){return a[i]%2 === 0;});
// console.log(a);

//4.Array.prototype.every 
function every(arr,fn){
	if(arr.every){
		return arr.every(fn);
	}else{
		var passed = false;
		for (var i = 0; i < this.length; i++) {
			if(passed === false) {break;}
			passed = !!fn.call(arr, this[k], k, this);
		}

		return passed;
	}
}
// a = every(data,function(v,i,a){return a[i]%2 === 0;});
// console.log(a);


// 5.Array.prototype.indexOf
function indexOf(n,arr){
	if(arr.indexOf){
		return arr.indexOf(n);
	}else{
		if(arr === undefined || arr < 0 || arr > this.length - 1 ){
            arr = 0;
        }
        for(var i = arr; i < this.length; i++){
            if(this[i] === n){
                return i;
            }
        }
        return -1;
	}
}
// 6.Array.prototype.lastIndexOf
function indexOf(n,arr){
	if(arr.indexOf){
		return arr.indexOf(n);
	}else{
		if(arr === undefined || arr < 0 || arr > this.length - 1 ){
            arr = this.length - 1;
        }
        for(var i = arr; i < this.length; i++){
            if(this[i] === n){
                return i;
            }
        }
        return -1;
	}
}


// 7.Array.prototype.reduce
function reduce(fn,n){
	if(arr.reduce){
		return arr.reduce(n);
	}else{
		var p = arr, n = 0;
        if(arr === undefined){
            p = this[0];
            n = 1;
        }
        if (typeof fn === "function") {
            for (var i = n; i < this.length; i++) {
                p = fn.call(p,this[i],i,this);
            }
        }
        return p;
    }
}
// 8.Array.prototype.reduceRight
function reduceRight(fn,n){
	if(arr.reduceRight){
		return arr.reduceRight(n);
	}else{
		var p = t, n = this.length - 1;
        if(t === undefined){
            p = this[this.length - 1];
            n = this.length - 2;
        }
        if (typeof fn === "function") {
            for (var i = n; i > -1; i--) {
                p = fn.call(p,this[i],i,this);
            }
        }
        return p;
    }
}
// 9.Array.prototype.filter
function reduceRight(fn,n){
	if(arr.reduceRight){
		return arr.reduceRight(n);
	}else{
		 var temp = [];
		 for (var i = 0; i < this.length; i++) {
			if(fn.call(n,this[i],i,this)){
				temp.push(this[i]);
			}
		}
		return temp;
    }
}
