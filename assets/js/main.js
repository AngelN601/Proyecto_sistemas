document.querySelector('#btnAddAlum').addEventListener('click', saveAlum);
tableAlum();


function saveAlum(){
    var snum = document.querySelector('#innum').value,
        sname = document.querySelector('#inname').value,
        sapellido = document.querySelector('#inpApellido').value,
        ssapellido = document.querySelector('#insApellido').value,
        scal1 = document.querySelector('#incal1').value,
        scal3 = document.querySelector('#incal3').value,
        scal2 = document.querySelector('#incal2').value,
        scal4 = document.querySelector('#incal4').value;

    addAlum(snum,sname,sapellido,ssapellido,scal1,scal2,scal3,scal4);
    tableAlum();
}


function calculoPromedio(cal1, cal2, cal3, cal4) {
    var calificaciones = [parseFloat(cal1), parseFloat(cal2), parseFloat(cal3), parseFloat(cal4)];

    var calificacionesValidas = calificaciones.filter(function (calificacion) {
        return !isNaN(calificacion);
    });

    if (calificacionesValidas.length > 0) {
        var sum = calificacionesValidas.reduce(function (total, calificacion) {
            return total + calificacion;
        }, 0);

        return sum / calificacionesValidas.length;
    } else {
        return 0;
    }
}

function tableAlum() {
    var list = getAlumList(),
        tbody = document.querySelector('#AlumTable tbody');

    tbody.innerHTML = '';

    for (var i = 0; i < list.length; i++) {
        var row = tbody.insertRow(i),
            numCell = row.insertCell(0),
            nameCell = row.insertCell(1),
            papellidoCell = row.insertCell(2),
            sapellidoCell = row.insertCell(3),
            cal1Cell = row.insertCell(4),
            cal2Cell = row.insertCell(5),
            cal3Cell = row.insertCell(6),
            cal4Cell = row.insertCell(7),
            averageCell = row.insertCell(8); 

        numCell.innerHTML = list[i].num;
        nameCell.innerHTML = list[i].name;
        papellidoCell.innerHTML = list[i].papellido;
        sapellidoCell.innerHTML = list[i].sapellido;
        cal1Cell.innerHTML = list[i].cal1;
        cal2Cell.innerHTML = list[i].cal2;
        cal3Cell.innerHTML = list[i].cal3;
        cal4Cell.innerHTML = list[i].cal4;

        var average = calculoPromedio(list[i].cal1, list[i].cal2, list[i].cal3, list[i].cal4);
        averageCell.innerHTML = average.toFixed(2);
       
        tbody.appendChild(row);
    }

    document.getElementById("myForm").reset();
}
