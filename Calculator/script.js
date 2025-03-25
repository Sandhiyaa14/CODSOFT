let displayValues = ["AC" , "DEL" , "%" , "/" ,"7","8","9","*","4","5","6","-","1","2","3","+","00","0",".","="]
let input = document.getElementById("input")
let str = "";


let btn = document.getElementById("buttons")

displayValues.forEach(values=>{
    let button = document.createElement("button")
    btn.appendChild(button)
    button.innerText = values 
    if(["AC", "DEL", "%", "/", "*", "-", "+", "="].includes(values)){
        button.classList.add("yellow-btn")
    }

    button.addEventListener("click",()=>{
        if(values == "AC"){
            str = ""
            input.value = str
        }
        else if(values == "DEL"){
            str = str.slice(0,-1)
            input.value = str
        }
        else if(values == "="){
            if(str=="")return;
            calculate()
        }
        else if(["+","-","*","/"].includes(values)){
            let lastElement = str[str.length-1]
            if(["+","-","*","/"].includes(lastElement))
            return
            str += values;
            input.value = str
        }
        else if(values == "."){
            let lastNum = str.split(/[\+\-\*\/]/).pop()
            if(lastNum.includes("."))
            return;
            str += values
            input.value = str
        }
        else{
            str += values
            input.value = str
        }
    })
})

function calculate(){
    try{
        let expression = str.replace(/(\d+(\.\d+)?)%/g, (match,num)=>{
            return String(parseFloat(num)/100)
        })

        let result = new Function('return '+ expression)()
        str = result.toString();
        input.value = str;
    }catch(err){
        input.value = "Error";
        str= "";
    }
}
