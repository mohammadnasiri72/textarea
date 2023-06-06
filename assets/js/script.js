var txt = document.querySelector(".text-t-area")
var tArea = document.querySelector(".t-area")
var x = 250


document.body.addEventListener("input" , function(){
 x = 250 - tArea.value.length
 txt.innerHTML = `مقدار ${x} کاراکتر باقی مانده است`
 if (x < 25) {
    txt.style.color = "red"
 }if (x>=25) {
    txt.style.color = "black"
 }if (x <= 0) {
 }
})