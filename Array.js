// Useful Array prototypes
Array.prototype.pick = function(){
  return this[Math.floor(Math.random()*this.length)]
}
Array.prototype.compact = function (){
	var n = []
	for(var i = 0; i < this.length;i++){
		if(this[i]) 	n.push(this[i])
	}
	return n
}
Array.prototype.concat = function(stuff){
  let debug = "Used concat and "
  let orig = [...this]
	if(Array.isArray(stuff)){
    debug += "passed in array"
		stuff.forEach((e)=>{
      this.push(e)
    })
	}else{
    debug += "passed in " + stuff
		this.push(stuff)
	}
  console.debug(debug, stuff, "combined it with",orig,"and created", this)
}