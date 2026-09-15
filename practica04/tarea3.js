/*
===========================================
TAREA 3: Máquina de bebidas
===========================================
Enunciado:
Cree un programa que simule una máquina expendedora de bebidas
con las siguientes opciones:
1=Agua, 2=Refresco, 3=Jugo, 4=Café, 5=Te.
Usando Switch, muestre el mensaje:
"Ha seleccionado: [nombre de la bebida]".
Si la opción no es válida, muestre "Bebida no disponible".
Además, si la bebida es Refresco o Jugo, agregue el mensaje:
"¿Desea agregar hielo?".
===========================================
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Seleccione una bebida (1=Agua, 2=Refresco, 3=Jugo, 4=Café, 5=Te): ', (numero) => {
    let bebida = parseInt(numero);

    switch (bebida) {
        case 1:
            console.log('Ha seleccionado: Agua');
            break;

        case 2:
            console.log('Ha seleccionado: Refresco');
            console.log('¿Desea agregar hielo?');
            break;

        case 3:
            console.log('Ha seleccionado: Jugo');
            console.log('¿Desea agregar hielo?');
            break;

        case 4:
            console.log('Ha seleccionado: Café');
            break;

        case 5:
            console.log('Ha seleccionado: Te');
            break;

        default:
            console.log('Bebida no disponible');
    }

    rl.close();
});