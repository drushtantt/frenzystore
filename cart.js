

let cart = JSON.parse(localStorage.getItem("data"))

let data = document.querySelector("#maindata")
let totalprice = document.querySelector("#totalprice")
let sum = 0
let shopingbag = document.querySelector("#shopingbag")
shopingbag.innerText = "Shoping bag" + " " + "(" + cart.length + ")"

let max=0
cart.forEach(function (ele, index) {
    ele.min = +ele.min
    ele.max=+ele.max
   max+=ele.max



    sum += ele.min
    let body = document.createElement("div")
    body.setAttribute("class", "body")
    let body1 = document.createElement("div")
    body1.setAttribute("class", "body1")
    let body2 = document.createElement("div")
    body2.setAttribute("class", "body2")

    let image = document.createElement("img")
    image.src = ele.img

    image.setAttribute("class", "image")
    let Name = document.createElement("h6")
    Name.innerText = ele.desc
    Name.setAttribute("class", "name")
    let btn = document.createElement("img")
    btn.addEventListener("click", function () {
        fn(ele, index)
    })

    btn.src = "https://cdn-icons.flaticon.com/png/128/3405/premium/3405244.png?token=exp=1651745346~hmac=7e9f77b6f20ddbad608f269593ac8192"
    btn.setAttribute("class", "delete")

    let qntdiv = document.createElement("div")
    qntdiv.setAttribute("id", "qnt")
    let prcdiv = document.createElement("div")
    prcdiv.setAttribute("id", "prc")

    let plus = document.createElement("p")
    plus.innerText = "Quantity"
    plus.setAttribute("class", "Quantity")

    let Quantity = document.createElement("p")
    Quantity.innerText = ":"
    Quantity.setAttribute("class", "semiclone")

    let minus = document.createElement("p")
    minus.innerText = "1˅"
    minus.setAttribute("class", "num")

    if (ele.max == undefined) {
        var omrp = ""
    }
    else {
        omrp = "₹" + ele.max
    }
    let mrp = document.createElement("p")
    mrp.innerText = omrp
    mrp.setAttribute("class", "mrp")
    let price = document.createElement("p")
    price.innerText = "₹" + ele.min
    price.setAttribute("class", "price")

    prcdiv.append(mrp, price)
    qntdiv.append(plus, Quantity, minus)
    body1.append(image, Name, btn)
    body2.append(qntdiv, prcdiv)
    body.append(body1, body2)
    data.append(body)
});
totalprice.innerText = "₹" + sum

function fn(ele, index) {
    cart.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(cart))

    window.location.reload();
let totalbag=document.querySelector(".totalbagf")
totalbag.innerText="₹" + max
let bagdiscount=document.querySelector(".discountbagf")
bagdiscount.innerText=(max-sum)-100
let subtotal=document.querySelector(".totalsubf")
subtotal.innerText=max-(max-sum)+100
let discount=document.querySelector(".offdiscount")
discount.innerText=-100
let charge=document.querySelector(".chargef")
charge.innerText="Free"
let grandtotal2=document.querySelector(".grandtotal2f")

grandtotal2.innerText=sum

grandtotal2.innerText="₹ "+sum
let back=document.querySelector("#back")
back.addEventListener("click",function()){
console.log(totalbag)
}}