function insert(x) {
    if ((document.getElementById("result").innerHTML).length < 10) {
        document.getElementById("result").innerHTML += x
    }
}

function clearResult() {
    document.getElementById("result").innerHTML = ""
}

function del() {
    let operation = document.getElementById("result").innerHTML;
    let operation2 = operation.slice(0, -1)
    document.getElementById("result").innerHTML = operation2
}

function calc() {
    let operation = document.getElementById("result").innerHTML
    if (operation) {
        let result = eval(operation)
        if (result >10)
            document.getElementById("result").innerHTML = "Too long"
        else
        document.getElementById("result").innerHTML = result
    } else {
        document.getElementById("result").innerHTML = "Error"
    }
}