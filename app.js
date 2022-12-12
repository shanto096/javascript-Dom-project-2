const btn1 = document.getElementById("btn-1")
const btn2 = document.getElementById("btn-2")


function addSum(x,y) {
const a = document.getElementById(x)
const b = document.getElementById(y)
const sum = parseFloat(a.value) + parseFloat(b.innerText)
 return sum; 
   a.value = "";
}

function updateTotalBalance(p) {
    const totalBalance = document.getElementById("balance");
    const A = document.getElementById(p);
  
    if (p === "input-1") {
      totalBalance.innerText =parseFloat(totalBalance.innerText) + parseFloat(A.value);
    } else {
      totalBalance.innerText =parseFloat(totalBalance.innerText) - parseFloat(A.value);
    }
    A.value = "";
  }

btn1.addEventListener('click',function () {
   const result1 = document.getElementById("result1") 
   result1.innerText = addSum("input-1","result1")
   updateTotalBalance("input-1")
   
})

btn2.addEventListener('click',function () {
    const result2 = document.getElementById("result2")
    result2.innerText = addSum("input-2","result2")
    updateTotalBalance("input-2") 
})