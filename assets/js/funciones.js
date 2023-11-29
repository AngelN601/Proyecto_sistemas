var alumList = [];

// Funcion para agregar datos de los alumnos
function addAlum(vnum, vname, vpapellido, vsapellido, vcal1, vcal2,vcal3, vcal4){

    //Creacion de la variable de tipo Objeto
    var newAlum ={
        num : vnum,
        name : vname,
        papellido : vpapellido,
        sapellido : vsapellido,
        cal1 : vcal1,
        cal2 : vcal2,
        cal3 : vcal3,
        cal4 : vcal4,
    };
    console.log(newAlum);
    alumList.push(newAlum);
    myLocalStorageAlumList(alumList);
}

function getAlumList(){
    var storageList = localStorage.getItem('localAlumList');
    if(storageList == null){
        alumList = []; 
    }else{
        alumList = JSON.parse(storageList);
    }
    return alumList;
}

function getPromedio(){
    return alumPromedio;
}

function myLocalStorageAlumList(vlist){
    localStorage.setItem('localAlumList',JSON.stringify(vlist));
}
