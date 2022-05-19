class Calculator {
    constructor(a){
        this.a = a;
        this.ope = "";
        this.eq = false;
    }

    charWrite(btn) {
        console.log(this.eq);
        let displayed = document.getElementById("display").innerHTML;
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
        this.b = NaN;
    }

    operation(btn){
        this.a = parseFloat(document.getElementById("display").innerHTML);
        document.getElementById("display").innerHTML = 0;
        this.ope = btn.innerHTML;
    }
    
    equal(){
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
