export const saveQuestion = (key, element) =>{
    //Recuperar los datos en el Storage
    let saveQuestion = JSON.parse(localStorage.getItem(key));

    //Verificar si questions en un array

    if(Array.isArray(saveQuestion)){
        saveQuestion.push(element);
    }
    else{
        saveQuestion = [element];
    }

    //Guardar en el Storage
    localStorage.setItem(key, JSON.stringify(saveQuestion));

    //Retornar el elemento

    return element;
}