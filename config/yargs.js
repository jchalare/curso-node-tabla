const { options } = require('yargs');
const argv = require('yargs').option('b',{
    alias:'base',
    type:'number',
    demandOption:true
}).option('l',{
    alias:'listar',
    type:'boolean',
    default:false
})
.option('h',{
    alias:'hasta',
    type:'number'
})
.check((argv,options)=>{
    if(isNaN(argv.b)){
        throw 'La base tiene que ser un numero';
    }

    return true;
    
})
.argv;

module.exports = argv
