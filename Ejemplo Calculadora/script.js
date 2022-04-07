function clearOutput() {
    document.getElementById("output").innerHTML = "0";
    valor1 = 0;
    valor2 = 0;
    cont = 0;
}


//contador para saber si ya se ingresó un operador 
let cont = 0;
//hacer que el vaalor1 y valor2 no sean undefined
let valor1 = 0;
let valor2 = 0;
let operacion = 0;

//Suma=1 Resta=2 Multiplicacion=3 Division=4



function calcular(id) {
    if (id != "equals") {
        if (cont == 0) {
            if (document.getElementById("output").innerHTML == "0") {
                document.getElementById("output").innerHTML = id;
                valor1 = parseInt(document.getElementById("output").innerHTML);
                //window.alert("valor 1:" + valor1);

                //MULTIPLICACION
            } else if (id == "multiply") {
                document.getElementById("output").innerHTML = "";
                document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + " * ";
                operacion = 3;

                cont = 1;
                //SUMA
            } else if (id == "add") {
                document.getElementById("output").innerHTML = "";
                document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + " + ";
                operacion = 1;
                cont = 1;
                //RESTA
            } else if (id == "subtract") {
                document.getElementById("output").innerHTML = "";
                document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + " - ";
                operacion = 2;
                cont = 1;
                //DIVISION
            } else if (id == "divide") {
                document.getElementById("output").innerHTML = "";
                document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + " / ";
                operacion = 4;
                cont = 1;

            } else {
                document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + id;
                valor1 = document.getElementById("output").innerHTML;
                //window.alert("valor 1:" + valor1);
            }

        } else {
            //Lo que hace es ver que el valor anterior ingresado no sea un signo de operacion
            if (document.getElementById("output").innerHTML == " * " || document.getElementById("output").innerHTML == " + " || document.getElementById("output").innerHTML == " - " || document.getElementById("output").innerHTML == " / ") {
                document.getElementById("output").innerHTML = id;
                valor2 = parseInt(document.getElementById("output").innerHTML);
                //window.alert("valor 2:" + valor2);
            }else {
                //CONCATENAR VALOR 2
                document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + id;
                valor2 = parseInt(document.getElementById("output").innerHTML);
                //window.alert("valor 2:" + valor2);
            }


        }

    } else {
        //window.alert("tipo de dato que es valor1 y valor2   " + typeof(valor1) + "   " + typeof(valor2));
        //window.alert("valor1   " + valor1 +"   valor2   " + valor2);
        //window.alert("valor de operacion: "+operacion +" Tipo de dato:"+typeof(operacion));
        let resultado = 0;
        if (operacion == 1) {
            resultado = valor1 + valor2;
            document.getElementById("output").innerHTML = resultado;

            //Resta
        } else if (operacion == 2) {
            resultado = valor1 - valor2;
            document.getElementById("output").innerHTML = resultado;

            //Multiplicacion
        } else if (operacion == 3) {
            resultado = valor1 * valor2;
            document.getElementById("output").innerHTML = resultado;

            //Division
        } else if (operacion == 4) {
            resultado = valor1 / valor2;
            document.getElementById("output").innerHTML = resultado;
        } else {
            document.getElementById("output").innerHTML = "Error";
        }
    }

}