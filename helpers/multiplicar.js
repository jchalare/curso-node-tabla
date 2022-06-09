const fs = require('fs');
const colors = require('colors/safe');

const crearTabla = async (base = 1, listar = false, hasta = 10) => {

    try {
       let salida= '';
        let mult = 1;
        let nombreArchivo = '';
        
      
        for(let i = 1 ; i<=hasta; i++){
            mult = i*base;
            salida += `${base} X ${i} = ${mult}\n`;
        }

        if(listar){
            
            console.log('===========================');
            console.log(`tabla-${base}.txt`);
            console.log('===========================');
            console.log(colors.random(salida));
        }

        await fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        nombreArchivo = `tabla-${base}.txt`;

        return nombreArchivo; 
    } catch (error) {
        throw error
    }
    

}

module.exports = {
    crearTabla
}