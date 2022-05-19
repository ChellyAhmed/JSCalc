class Calculator {
    constructor(a){
        //Keep track of old results and operation parameters
        this.a = a;
        //Keep track of operators
        this.ope = "";
        //Keep track of whether the display was entered by the user or just a result
        this.eq = false;
    }

    charWrite(btn) {
        //Get the current number on the display
        let displayed = document.getElementById("display").innerHTML;

        //If the display is a result, erase it and let user type completely new entry
        if (this.eq){
            displayed = 0;
            this.eq = false;
        }

        (displayed == 0) && (displayed = "");
        displayed = displayed.concat(btn.innerHTML);
        document.getElementById("display").innerHTML = displayed;
    }

    allClear() {
        document.getElementById("display").innerHTML = 0;
        this.a = 0;
    }

    operation(btn){

        //if this.a is already filled with a number, we update it so we can do multiple operations in a row.
        if (this.ope == "+") {
            this.a = parseFloat(document.getElementById("display").innerHTML) + this.a;
        }
        else if (this.ope == "-") {
            this.a = parseFloat(document.getElementById("display").innerHTML) - this.a;
        }
        else if (this.ope == "*") {
            (this.a ==0) && (this.a = 1)
            this.a = parseFloat(document.getElementById("display").innerHTML) * this.a;
        }
        else if (this.ope == "/") {
            (this.a ==0) && (this.a = 1)
            this.a = parseFloat(document.getElementById("display").innerHTML) / this.a;
        }

        //Once operation button is clicked, update the display with 0
        document.getElementById("display").innerHTML = 0;

        this.ope = btn.innerHTML;
    }
    
    equal(){
        //Update the boolean so we cannot append to the result when numbers are pressed
        this.eq=true;

        if (this.ope == "+") {
            document.getElementById("display").innerHTML = (this.a + parseFloat(document.getElementById("display").innerHTML));
        }
        else if (this.ope == "-") {
            document.getElementById("display").innerHTML = (this.a - parseFloat(document.getElementById("display").innerHTML));
        }
        else if (this.ope == "*") {
            document.getElementById("display").innerHTML = (this.a * parseFloat(document.getElementById("display").innerHTML));
        }
        else if (this.ope == "/") {
            document.getElementById("display").innerHTML = (this.a / parseFloat(document.getElementById("display").innerHTML));
        }
        this.a = parseFloat(document.getElementById("display").innerHTML);


    }
}

let calculator = new Calculator(0);
