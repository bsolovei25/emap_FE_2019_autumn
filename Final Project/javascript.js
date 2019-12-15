
var submitprice1 = document.getElementById('subko1');
var submitprice2 = document.getElementById('subko2');
var submitprice3 = document.getElementById('subko3');
var submitprice4 = document.getElementById('subko4');
var submitprice5 = document.getElementById('subko5');
var submitprice6 = document.getElementById('subko6');
var countGoods = document.getElementById('counterPlus');

var arrimg = [];
var arrtext = [];
var num = 6;

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
	arrimg.push(document.getElementById('im'+i));
}

for (let i =1;i < num+1;i++){
	arrtext.push(document.getElementById('mi'+i));
}

function show_MondayUkraine(){
	let arr = ["block","block","none","none","none","none"];
	for (let i =0;i < num;i++){
		arrimg[i].style.display = arr[i];
		arrtext[i].style.display =arr[i];
	}
}


function show_TuesdayUkraine(){
	let arr = ["none","none","block","block","none","none"];
	for (let i =0;i < num;i++){
		arrimg[i].style.display = arr[i];
		arrtext[i].style.display = arr[i];
	}
}

function show_WednesdayUkraine(){
	let arr = ["none","none","none","none","block","block"];
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
	}
	addValue(value){
		this.arr.push(value);
	}
}
var BasketObject = new Basket();

submitprice1.addEventListener("click",function(){
	//let price = document.getElementById("orderprice1").value;
	//le
})

function SubmitButtonPressed(idValue){
	let Id = idValue;
	let index = arrayOfButtons.indexOf(Id);
	let OrderObject = new Order(arrayOfNames[index],arrayOfPrices[index],arrayOfButtons[index]);
	countGoods.innerHTML++;
	BasketObject.addValue(OrderObject);
	
}


function generate_table() {
	let collen = 3;
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < BasketObject.arr.length; i++) {
    // creates a table row
    var row = document.createElement("tr");
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode(BasketObject.arr[i].name);
	  var cell1 = document.createElement("td");
      var cellText1 = document.createTextNode(BasketObject.arr[i].price);
      cell.appendChild(cellText);
      row.appendChild(cell);
	  cell1.appendChild(cellText1);
      row.appendChild(cell1);

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}

