
const argv = require('./config/yargs.js');
const { crearTabla } =require('./helpers/multiplicar.js')

console.clear();
console.log(argv);

crearTabla(argv.b,argv.l,argv.h)
.then(nombreArchivo=>console.log(nombreArchivo,'creado'))
.catch(err=>console.log(err))






//FORMA VIEJA
/*const [,,arg3 = 'base=5'] = process.argv;
const [,base = 5] = arg3.split('=');

console.log(base);

crearTabla(base)
.then(nombreArchivo=>console.log(nombreArchivo,'creado'))
.catch(err=>console.log(err));*/


/*
crearTabla(base)
.then(nombreArchivo=>console.log(nombreArchivo,'creado'))
.catch(err=>console.log(err));*/

/*fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{
    if(err){
        throw err;
    }

console.log(`tabla-${base}.txt`);
});*/
