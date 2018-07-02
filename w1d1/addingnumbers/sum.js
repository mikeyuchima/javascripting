var args = process.argv;
console.log(args);

function adding(){
	return Number(process.argv[2]) + Number(process.argv[3]);
}
console.log(adding());