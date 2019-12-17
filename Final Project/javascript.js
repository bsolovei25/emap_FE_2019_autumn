

var countGoods = document.getElementById('counterPlus');

var arrimg = [];
var arrtext = [];
var num = 12;

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

function show_Monday(country){
	
	document.getElementById("coreid").style.display = "block";
	RemoveTable();
	InVisible();
	let arr = [];
	if(country == "Italy"){
	arr = ["block","block","none","none","none","none","none","none","none","none","none","none"];
	}else{
		arr = ["none","none","none","none","none","none","block","block","none","none","none","none"];
	}
	for (let i =0;i < num;i++){
		arrimg[i].style.display = arr[i];
		arrtext[i].style.display =arr[i];
	}
}


function show_Tuesday(country){
	document.getElementById("coreid").style.display = "block";
	RemoveTable();
	InVisible();
	let arr = [];
	if(country == "Italy"){
	arr = ["none","none","block","block","none","none","none","none","none","none","none","none"];
	}else{
		arr = ["none","none","none","none","none","none","none","none","block","block","none","none"];
	}
	for (let i =0;i < num;i++){
		arrimg[i].style.display = arr[i];
		arrtext[i].style.display = arr[i];
	}
}

function show_Wednesday(country){
	document.getElementById("coreid").style.display = "block";
	RemoveTable();
	InVisible();
	let arr = [];
	if(country == "Italy"){
	arr = ["none","none","none","none","block","block","none","none","none","none","none","none"];
	}else{
		arr = ["none","none","none","none","none","none","none","none","none","none","block","block"];
	}
	for (let i =0;i < num;i++){
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


class Basket{
	constructor(){
		this.arr = [];
		this.totalPrice = 0;
	}
	addValue(value){
		this.arr.push(value);
		this.totalPrice += parseFloat(value.price);
	}
}
var BasketObject = new Basket();



function InVisible(){
	let div = document.getElementById("regbarid");
	
		div.style.visibility = "hidden";
	
}

function Visible(){
	let div = document.getElementById("regbarid");
	
		div.style.visibility = "visible";
	
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




function generate_table() {
	RemoveTable();
	Visible();
	var body = document.getElementsByTagName("body")[0];
	var tbl = document.createElement("table");
	tbl.id = "table1";
	var tblBody = document.createElement("tbody");
	for (var i = 0; i < BasketObject.arr.length; i++) {
		var row = document.createElement("tr");
		var cell = document.createElement("td");
		var cellText = document.createTextNode(BasketObject.arr[i].name);
		var cell1 = document.createElement("td");
		var cellText1 = document.createTextNode(BasketObject.arr[i].price);
		cell.appendChild(cellText);
		row.appendChild(cell);
		cell1.appendChild(cellText1);
		row.appendChild(cell1);
		var cell2 = document.createElement("td");
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.checked = true;
		cell2.appendChild(checkbox);
		row.appendChild(cell2);
		tblBody.appendChild(row);
	}
	tbl.appendChild(tblBody);
	body.appendChild(tbl);
	var div = document.createElement("div");
	div.id = "div1";
	var p = document.createElement("p");
	var cellText = document.createTextNode("Total price to insert = " + BasketObject.totalPrice);
	p.appendChild(cellText);
	div.appendChild(p);
	body.appendChild(div); 
	tbl.setAttribute("border", "2");
	document.getElementById("coreid").style.display = "none";
	document.getElementById("regbarid").style.display = "block";
}

