const argv = require('./config/yargs').argv;

const {crearArchivo,limiteTabla} = require('./multiplicar/multiplicar');



let comando = argv._[0];
switch(comando){
	case 'listar':
		limiteTabla(argv.base,argv.limite)
	break;
	case 'crear':
		crearArchivo(argv.base,argv.limite)
			.then(archivo => console.log(`Archivo creado tabla-${argv.base}`))
			.catch(err => console.log(`Error ======== ${err}`))
	break;
	default:
		console.log('Comando no reconocido');
	break;

}




// let parametro = argv[2];
// let base = parametro.split('=')[1];



