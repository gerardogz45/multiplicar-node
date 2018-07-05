// Requireds
const fs = require('fs');

let limiteTabla = (base,limite)=>{
	for(let i = 1; i <= limite; i++){
		console.log(`${base} * ${i} = ${base*i}\n`);
	}	

}


let crearArchivo = (base,limite)=>{
	return new Promise((resolve,reject)=>{

		if (!Number(base)) {
			reject(`El valor introducido ${base} no es un número`);
			return;
		}
		let tabla = '';

		for(let i = 1; i <= limite; i++){
			tabla += `${base} * ${i} = ${base*i}`;
		}

		fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, tabla, (err) => {
			if (err) 
				reject(err)
			else
				resolve(`tabla-${base}-al-${limite}.txt`)
		});
	});
}

module.exports = {
	crearArchivo,
	limiteTabla
}