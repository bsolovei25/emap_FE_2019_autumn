

var countGoods = document.getElementById('counterPlus');

var arrimg = [];
var arrtext = [];
var num = 28;

var arrayOfButtons = [];
var arrayOfPrices = [];
var arrayOfNames = [];



for (let i =1;i < num+1;i++){
	arrayOfButtons.push('subko'+i);
}

for (let i =1;i < num+1;i++){
	arrayOfPrices.push((document.getElementById('orderprice'+i)).innerHTML);
}

for (let i =1;i < num+1;i++){
	arrayOfNames.push((document.getElementById('productname'+i)).innerHTML);
}



for (let i =1;i < num+1;i++){
	arrimg.push(document.getElementById('idblock'+i));
}

for (let i =1;i < num+1;i++){
	arrtext.push(document.getElementById('mi'+i));
	
}

function AppendCrumbsDays(day,country){
	document.getElementById("crumbshome").innerHTML = "Home>>"+day+">>"+country;
}

function CleanImg(){
	for (let i =0;i < num;i++){
		arrimg[i].style.display = "none";
		arrtext[i].style.display ="none";
	}
	
}


function show_Monday(country){
	document.getElementById("coreid").style.display = "block";
	RemoveTable();
	InVisible();
	InVisibleData();
	let arr = [];
	if(country == "Italy"){
	    arr = ["block", "block", "block", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
	}else{
	    arr = ["none", "none", "none", "none", "none", "none", "block", "block", "block", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
	}
	AppendCrumbsDays("Monday",country);
	for (let i =0;i < num;i++){
		arrimg[i].style.display = arr[i];
		arrtext[i].style.display =arr[i];
	}
	
}




function show_Tuesday(country){
	document.getElementById("coreid").style.display = "block";
	RemoveTable();
	InVisible();
	InVisibleData();
	let arr = [];
	if(country == "Italy"){
	    arr = ["none", "none", "block", "block", "block", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
	}else{
	    arr = ["none", "none", "none", "none", "none", "none", "none", "none", "block", "block", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
	}
	AppendCrumbsDays("Tuesday",country);
	for (let i =0;i < num;i++){
		arrimg[i].style.display = arr[i];
		arrtext[i].style.display = arr[i];
	}
}

function show_Wednesday(country){
	document.getElementById("coreid").style.display = "block";
	RemoveTable();
	InVisible();
	InVisibleData();
	let arr = [];
	if(country == "Italy"){
	    arr = ["none", "none", "none", "none", "block", "block", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "block", "none", "none", "none", "none", "none", "none", "none"];
	}else{
	    arr = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "block", "block", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
	}
	AppendCrumbsDays("Wednesday",country);
	for (let i =0;i < num;i++){
		arrimg[i].style.display = arr[i];
		arrtext[i].style.display = arr[i];
	}
}


function show_Thursday(country) {
    document.getElementById("coreid").style.display = "block";
    RemoveTable();
    InVisible();
	InVisibleData();
    let arr = [];
    if (country == "Italy") {
        arr = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "block", "block", "block", "none", "none", "none", "none", "none"];
    } else {
        arr = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "block", "block", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
    }
	AppendCrumbsDays("Thursday",country);
    for (let i = 0; i < num; i++) {
        arrimg[i].style.display = arr[i];
        arrtext[i].style.display = arr[i];
    }
}

function show_Friday(country) {
    document.getElementById("coreid").style.display = "block";
    RemoveTable();
    InVisible();
	InVisibleData();
    let arr = [];
    if (country == "Italy") {
        arr = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "block", "block", "block", "none", "none", "none", "none"];
    } else {
        arr = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "block", "block", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
    }
	AppendCrumbsDays("Friday",country);
    for (let i = 0; i < num; i++) {
        arrimg[i].style.display = arr[i];
        arrtext[i].style.display = arr[i];
    }
}

function show_Saturday(country) {
    document.getElementById("coreid").style.display = "block";
    RemoveTable();
    InVisible();
	InVisibleData();
    let arr = [];
    if (country == "Italy") {
        arr = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "block", "block", "block", "none"];
    } else {
        arr = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "block", "block", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
    }
	AppendCrumbsDays("Saturday",country);
    for (let i = 0; i < num; i++) {
        arrimg[i].style.display = arr[i];
        arrtext[i].style.display = arr[i];
    }
}

function show_Sunday(country) {
    document.getElementById("coreid").style.display = "block";
    RemoveTable();
    InVisible();
	InVisibleData();
    let arr = [];
    if (country == "Italy") {
        arr = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "block", "block", "block"];
    } else {
        arr = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "block", "block", "none", "none", "none", "none", "none", "none", "none", "none"];
    }
	AppendCrumbsDays("Sunday",country);
    for (let i = 0; i < num; i++) {
        arrimg[i].style.display = arr[i];
        arrtext[i].style.display = arr[i];
    }
}


class Order{
	constructor(_name,_price,_id){
		this.name = _name;
		this.price = _price;
		this.id = _id;
	}
}


class Client {
    constructor(_buyer_name,_buyer_address,_buyer_phone) {
        this.buyer_name = _buyer_name;
        this.address = _buyer_address;
        this.phone = _buyer_phone;
        this.buyerarr = [];
    }
    addBasket(value) {
        this.buyerarr = value;
    }
	
    WriteJson() {
		let arrtmp =[];
        var restoredSession = {};
        if (JSON.parse(localStorage.getItem('session1') != null)){
            restoredSession = JSON.parse(localStorage.getItem('session1'));
			//arrtmp.push(restoredSession);
			for (let i =0;i < restoredSession.length;i++){
				arrtmp.push(restoredSession[i]);
			}
			for(let i =0;i < this.buyerarr.length;i++){
				arrtmp.push(this.buyerarr[i]);
			}
			localStorage.setItem('session1',JSON.stringify(arrtmp));
        }
        else {
            localStorage.setItem('session1',JSON.stringify(this.buyerarr));
        }
        
        console.log(JSON.parse(localStorage.getItem('session1')));
		//return restoredSession;
    }
}

document.getElementById("ShowHistory").addEventListener("click",function(){
	//JSON.parse(localStorage.getItem('session1'))
	generate_table(JSON.parse(localStorage.getItem('session1')),0);
});

document.getElementById("regbar-submit").addEventListener("click", function () {
    var Clientobj = new Client(document.getElementById("regbar-name").value, document.getElementById("regbar-address").value, document.getElementById("rtelephone").value);
    Clientobj.addBasket(BasketObject.arr);
    Clientobj.WriteJson();
});

class Basket{
	constructor(){
		this.arr = [];
		this.totalPrice = 0;
	}
	addValue(value){
		this.arr.push(value);
		this.totalPrice += parseFloat(value.price);
	}
	getPrice() {
	    this.totalPrice = 0;
	    //this.arr.push(value);
	    //this.totalPrice += parseFloat(value.price);
	    for (let i = 0; i < BasketObject.arr.length; i++) {
	        this.totalPrice += parseFloat(BasketObject.arr[i].price);
	    }
	    return this.totalPrice;
	}
}
var BasketObject = new Basket();





function InVisible(){
	let div = document.getElementById("regbarid");
	
		div.style.visibility = "hidden";
		
}

function InVisibleContact(){
	let div = document.getElementById("contactdataid");
	
		div.style.display = "none";
		
}

function Visible(){
	let div = document.getElementById("regbarid");
	
		div.style.visibility = "visible";
	
}

function InVisibleData(){
	let div1 = document.getElementById("contactdataid")
	div1.style.display = "none";
}


function RemoveTable(){
	let body = document.getElementsByTagName("body")[0];
	let table = document.getElementById("table1");
	let div = document.getElementById("div1");

	if(table != null){
		body.removeChild(table);
	}
	if(div != null){
		body.removeChild(div);
	}
	
}

function SubmitButtonPressed(idValue){
	let Id = idValue;
	let index = arrayOfButtons.indexOf(Id);
	let OrderObject = new Order(arrayOfNames[index],arrayOfPrices[index],arrayOfButtons[index]);
	countGoods.innerHTML++;
	BasketObject.addValue(OrderObject);
	
}


function ProductChecked(obj){
        alert(obj.id);
}

function generate_info(){
	
	RemoveTable();
	InVisible();
	document.getElementById("coreid").style.display = "none";
	document.getElementById("contactdataid").style.display = "block";
	document.getElementById("crumbshome").innerHTML = "Home>>"+document.getElementById("contactButton").innerHTML;
	
}

document.getElementById("bookButton").addEventListener("click",function(){
	generate_table(BasketObject.arr,1);
});

function generate_table(massarr, addPrice) {
	var body = document.getElementsByTagName("body")[0];
	//document.getElementById("crumbshome").innerHTML = "Home>>Order";
	RemoveTable();
	Visible();
	InVisibleContact();
	
	var tbl = document.createElement("table");
	tbl.id = "table1";
	var tblBody = document.createElement("tbody");
	var rowth1 = document.createElement("th");
	var thtext1 = document.createTextNode("Product name");
	var rowth2 = document.createElement("th");
	var thtext2 = document.createTextNode("Price");
	var rowth3 = document.createElement("th");
	var thtext3 = document.createTextNode("Checkbox");
	rowth1.appendChild(thtext1);
	rowth2.appendChild(thtext2);
	rowth3.appendChild(thtext3);
	tblBody.appendChild(rowth1);
	tblBody.appendChild(rowth2);
	tblBody.appendChild(rowth3);
	for (var i = 0; i < massarr.length; i++) {
	    var row = document.createElement("tr");
		row.id = "rowid";
	    var cell = document.createElement("td");
		cell.id = "tdid";
	    var cellText = document.createTextNode(massarr[i].name);
	    var cell1 = document.createElement("td");
	    var cellText1 = document.createTextNode(massarr[i].price);
	    cell.appendChild(cellText);
	    row.appendChild(cell);
	    cell1.appendChild(cellText1);
	    row.appendChild(cell1);
	    var cell2 = document.createElement("td");
	    var checkbox = document.createElement("input");
	    checkbox.type = "checkbox";
	    checkbox.checked = true;
	    checkbox.id = i;
	    // checkbox.onchange = ProductChecked(this);
	    checkbox.onchange = function () { massarr.splice(0, 1); generate_table(massarr,1); document.getElementById("counterPlus").innerHTML -= 1; };
	    //checkbox.setAttribute("onchange", ProductChecked(this));
		cell2.appendChild(checkbox);
		row.appendChild(cell2);
		tblBody.appendChild(row);
	}
	
	tbl.appendChild(tblBody);
	body.appendChild(tbl);
	
	if(addPrice == 1){
		var div = document.createElement("div");
		div.id = "div1";
		var p = document.createElement("p");
		
		var cellText = document.createTextNode("Total price to insert = " +  BasketObject.getPrice());
		p.appendChild(cellText);
		div.appendChild(p);
		
		body.appendChild(div); 
		document.getElementById("regbarid").style.display = "block";
	}
	else{
		document.getElementById("regbarid").style.display = "none";
	}
	tbl.setAttribute("border", "2");
	document.getElementById("coreid").style.display = "none";
	
	
}

function show_menu(obj){
	document.getElementById("coreid").style.display = "block";
	document.getElementById("idimage-tabs").style.display = "block";
    RemoveTable();
    InVisible();
	InVisibleData();
	
	if(obj.id == "menu-pizzaid"){
    let arr = ["block", "block", "block", "block", "none", "block", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
		for (let i = 0; i < num; i++) {
			arrimg[i].style.display = arr[i];
			arrtext[i].style.display = arr[i];
		}
	}
	if(obj.id == "menu-rolsid"){
    let arr = ["none", "none", "none", "none", "none", "none", "none", "none", "block", "block", "block", "block", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
		for (let i = 0; i < num; i++) {
			arrimg[i].style.display = arr[i];
			arrtext[i].style.display = arr[i];
		}
	}
	if(obj.id == "menu-setsid"){
	let arr = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "block", "block", "block", "block", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
    //let arr = ["none", "none", "none", "none", "none", "none", "none", "none", "block", "block", "block", "block", "block", "block", "block", "block", "block", "block", "block", "block", "none", "none", "none", "none", "none", "none", "none", "none"];
		for (let i = 0; i < num; i++) {
			arrimg[i].style.display = arr[i];
			arrtext[i].style.display = arr[i];
		}
	}
	if(obj.id == "menu-grill"){
    let arr = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "block", "block", "block", "none", "none", "none", "none", "block"];
		for (let i = 0; i < num; i++) {
			arrimg[i].style.display = arr[i];
			arrtext[i].style.display = arr[i];
		}
	}
	if(obj.id == "menu-lunch"){
	let arr = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "block", "block", "block", "block", "none", "none", "none", "none", "none", "none", "none", "none"];
    //let arr = ["block", "none", "block", "block", "block", "block", "block", "block", "block", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
		for (let i = 0; i < num; i++) {
			arrimg[i].style.display = arr[i];
			arrtext[i].style.display = arr[i];
		}
	}
	AppendCrumbs(obj);
}

function AppendCrumbs(obj){	
	document.getElementById("crumbshome").innerHTML ="Home >>"+ obj.innerHTML;
}


function ReturnStartPage(){
	InVisible();
	RemoveTable();
	InVisibleData();
	document.getElementById("coreid").style.display = "block";
	document.getElementById("idimage-tabs").style.display = "none";
	document.getElementById("crumbshome").innerHTML = "Home>>";
}

document.getElementById("switch1").addEventListener("change",function(){
	changeSlide(1);

});


document.getElementById("switch2").addEventListener("change",function(){
    
	changeSlide(2);
});

document.getElementById("switch3").addEventListener("change",function(){
   changeSlide(3);
});

document.getElementById("switch4").addEventListener("change",function(){
    changeSlide(4);
});

document.getElementById("switch5").addEventListener("change",function(){
    changeSlide(5);
});

function changeSlide(index)
{
	let arr=["-1","-1","-1","-1","-1"];
	arr[index-1]="1";
	for (let i=1; i<=arr.length;i++){
		document.getElementById("im"+i+"switch"+i).style.zIndex =arr[i-1];
	}
}

window.onload =  function() {
	let ii=1;
	setInterval(function(){ii = (ii % 5) + 1;document.getElementById("switch"+ii).checked = "true";changeSlide(ii)},3000);
	
};


document.getElementById("buttonid").addEventListener("click",function(){
	let searchText = (document.getElementById("searchid").value).toUpperCase();
	CleanImg();
	RemoveTable();
	InVisible();
	InVisibleData();
	document.getElementById("coreid").style.display = "block";
	for(let i=1;i <=num;i++){
		if(((document.getElementById("productname"+i).innerHTML).toUpperCase()).indexOf(searchText) != -1){
			//console.log(document.getElementById("productname"+i).innerHTML);
			
			document.getElementById("idblock"+i).style.display = "block";
			document.getElementById("mi"+i).style.display = "block";
		}
	}
});
