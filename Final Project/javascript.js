var arrimg = [];
var arrtext = [];
var num = document.getElementById("picpackid").children.length;

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

function ClearPicPac(){
	let picpackelem = document.getElementById("picpackid");
	let m = picpackelem.children.length-1;
	while(m >=0 ){
		picpackelem.removeChild(picpackelem.children[m]);
		m--;
	}
}

function ShowImg(ArrImg){
	for(let i =0;i < ArrImg.length;i++){
		arrimg[ArrImg[i]].style.display = "block";
		arrtext[ArrImg[i]].style.display = "block";
	}
	Sort(document.getElementById("ShowSortPrice").innerHTML);
}

function sortNumber(a, b) {
  return a - b;
}

function Sort(sortorder){
	let arrprice = [];
	let orderOfSort = sortorder;
	let tmparr = [];
	let picpackelem = document.getElementById("picpackid");
	let tmpvisible = [];
	for(let i=0;i<arrimg.length;i++){
		if(arrimg[i].style.display == "block"){
			let len = arrimg[i].id.length - "idblock".length;
			arrprice.push(parseInt(arrimg[i].children[1].children[1].children[0].textContent));
			tmparr.push(parseInt(arrimg[i].children[1].children[1].children[0].textContent));
			tmpvisible.push(parseInt(arrimg[i].id.slice(-len))-1);
		}
	}
	
	ClearPicPac();
	
	tmparr.sort(sortNumber);
	if(orderOfSort == "DES"){
		tmparr.reverse();
	}
	
    for(let i =0;i < tmparr.length;i++){
		let index = arrprice.indexOf(tmparr[i]);
		picpackelem.appendChild(arrimg[tmpvisible[index]]);
	}
}

function show_Monday(country){
	document.getElementById("coreid").style.display = "block";
	RemoveTable();
	InVisible();
	InVisibleData();
	InVisibleGalery();
	InVisibleLog();
	CleanImg();
	let arr = [];
	if(country == "Italy"){		
		for(let i =0;i < arrimg.length;i++){
			if(arrimg[i].children[0].children[0].getAttribute('alt') == "Monday_Italy"||arrimg[i].children[0].children[0].getAttribute('alt') == "Tuesday_Italy"){
				arr.push(i);
			}
		}		
	}else{
		for(let i =0;i < arrimg.length;i++){
			if(arrimg[i].children[0].children[0].getAttribute('alt') == "Monday_Japan"||arrimg[i].children[0].children[0].getAttribute('alt') == "Tuesday_Japan"){
				arr.push(i);
			}
		}	
	}
	ShowImg(arr);
	AppendCrumbsDays("Monday",country);
}
function show_Tuesday(country){
	document.getElementById("coreid").style.display = "block";
	RemoveTable();
	InVisible();
	InVisibleData();
	InVisibleGalery();
	InVisibleLog();
	CleanImg();
	let arr = [];
	if(country == "Italy"){		
		for(let i =0;i < arrimg.length;i++){
			if(arrimg[i].children[0].children[0].getAttribute('alt') == "Wednesday_Italy"||arrimg[i].children[0].children[0].getAttribute('alt') == "Thursday_Italy"){
				arr.push(i);
			}
		}		
	}else{
		for(let i =0;i < arrimg.length;i++){
			if(arrimg[i].children[0].children[0].getAttribute('alt') == "Wednesday_Japan"||arrimg[i].children[0].children[0].getAttribute('alt') == "Thursday_Japan"){
				arr.push(i);
			}
		}	
	}
	ShowImg(arr);
	AppendCrumbsDays("Tuesday",country);
	
}

function show_Wednesday(country){
	document.getElementById("coreid").style.display = "block";
	RemoveTable();
	InVisible();
	InVisibleData();
	InVisibleGalery();
	InVisibleLog();
	CleanImg();
	let arr = [];
	if(country == "Italy"){		
		for(let i =0;i < arrimg.length;i++){
			if(arrimg[i].children[0].children[0].getAttribute('alt') == "Friday_Italy"||arrimg[i].children[0].children[0].getAttribute('alt') == "Sunday_Italy"){
				arr.push(i);
			}
		}		
	}else{
		for(let i =0;i < arrimg.length;i++){
			if(arrimg[i].children[0].children[0].getAttribute('alt') == "Friday_Japan"||arrimg[i].children[0].children[0].getAttribute('alt') == "Sunday_Japan"){
				arr.push(i);
			}
		}	
	}
	ShowImg(arr);
	AppendCrumbsDays("Wednesday",country);
	
}


function show_Thursday(country) {
    document.getElementById("coreid").style.display = "block";
    RemoveTable();
    InVisible();
	InVisibleData();
	InVisibleGalery();
	InVisibleLog();
	CleanImg();
    let arr = [];
    if(country == "Italy"){		
		for(let i =0;i < arrimg.length;i++){
			if(arrimg[i].children[0].children[0].getAttribute('alt') == "Saturday_Italy"||arrimg[i].children[0].children[0].getAttribute('alt') == "Monday_Italy"){
				arr.push(i);
			}
		}		
	}else{
		for(let i =0;i < arrimg.length;i++){
			if(arrimg[i].children[0].children[0].getAttribute('alt') == "Saturday_Japan"||arrimg[i].children[0].children[0].getAttribute('alt') == "Monday_Japan"){
				arr.push(i);
			}
		}	
	}
	ShowImg(arr);
	AppendCrumbsDays("Thursday",country);
    
}

function show_Friday(country) {
    document.getElementById("coreid").style.display = "block";
    RemoveTable();
    InVisible();
	InVisibleData();
	InVisibleGalery();
	InVisibleLog();
	CleanImg();
    let arr = [];
    if(country == "Italy"){		
		for(let i =0;i < arrimg.length;i++){
			if(arrimg[i].children[0].children[0].getAttribute('alt') == "Tuesday_Italy"||arrimg[i].children[0].children[0].getAttribute('alt') == "Wednesday_Italy"){
				arr.push(i);
			}
		}		
	}else{
		for(let i =0;i < arrimg.length;i++){
			if(arrimg[i].children[0].children[0].getAttribute('alt') == "Tuesday_Japan"||arrimg[i].children[0].children[0].getAttribute('alt') == "Wednesday_Japan"){
				arr.push(i);
			}
		}	
	}
	ShowImg(arr);
	AppendCrumbsDays("Friday",country);
    
}

function show_Saturday(country) {
    document.getElementById("coreid").style.display = "block";
    RemoveTable();
    InVisible();
	InVisibleData();
	InVisibleGalery();
	InVisibleLog();
	CleanImg();
    let arr = [];
    if(country == "Italy"){		
		for(let i =0;i < arrimg.length;i++){
			if(arrimg[i].children[0].children[0].getAttribute('alt') == "Thursday_Italy"||arrimg[i].children[0].children[0].getAttribute('alt') == "Friday_Italy"){
				arr.push(i);
			}
		}		
	}else{
		for(let i =0;i < arrimg.length;i++){
			if(arrimg[i].children[0].children[0].getAttribute('alt') == "Thursday_Japan"||arrimg[i].children[0].children[0].getAttribute('alt') == "Friday_Japan"){
				arr.push(i);
			}
		}	
	}
	ShowImg(arr);
	AppendCrumbsDays("Saturday",country);
    
}

function show_Sunday(country) {
    document.getElementById("coreid").style.display = "block";
    RemoveTable();
    InVisible();
	InVisibleData();
	InVisibleGalery();
	InVisibleLog();
	CleanImg();
    let arr = [];
    if(country == "Italy"){		
		for(let i =0;i < arrimg.length;i++){
			if(arrimg[i].children[0].children[0].getAttribute('alt') == "Sunday_Italy"||arrimg[i].children[0].children[0].getAttribute('alt') == "Saturday_Italy"){
				arr.push(i);
			}
		}		
	}else{
		for(let i =0;i < arrimg.length;i++){
			if(arrimg[i].children[0].children[0].getAttribute('alt') == "Sunday_Japan"||arrimg[i].children[0].children[0].getAttribute('alt') == "Saturday_Japan"){
				arr.push(i);
			}
		}	
	}
	ShowImg(arr);
	AppendCrumbsDays("Sunday",country);
    
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
			for (let i =0;i < restoredSession.length;i++){
				arrtmp.push(restoredSession[i]);
			}
			arrtmp.push(this);
			localStorage.setItem('session1',JSON.stringify(arrtmp));
        }
        else {
			localStorage.setItem('session1',JSON.stringify(this));
        }
        
        console.log(JSON.parse(localStorage.getItem('session1')));
		//return restoredSession;
    }
}

document.getElementById("ShowHistory").addEventListener("click",function(){
	let tmparr = [];
	let restoredSession = JSON.parse(localStorage.getItem('session1'));
	for(let i =0;i < restoredSession.length;i++){
			if(restoredSession[i].buyer_name == userName){
				for(let j =0;j < restoredSession[i].buyerarr.length;j++){
				tmparr.push(restoredSession[i].buyerarr[j]);
				}
			}
	}
	generate_table(tmparr,0);
});


document.getElementById("ShowGalary").addEventListener("click",function(){
	RemoveTable();
	InVisible();
	document.getElementById("coreid").style.display = "none";
	document.getElementById("galeryid").style.display = "block";
	document.getElementById("crumbshome").innerHTML = "Home>>"+document.getElementById("ShowGalary").innerHTML;
});

document.getElementById("ShowSortPrice").addEventListener("click",function(){
	/*if(document.getElementById("ShowSortPrice").getAttribute("value") == "ASC"){
		document.getElementById("ShowSortPrice").setAttribute("value","DES");
		document.getElementById("ShowSortPrice").innerHTML = "DES";
	}
	else if(document.getElementById("ShowSortPrice").getAttribute("value") == "DES"){
		document.getElementById("ShowSortPrice").setAttribute("value","ASC");
		document.getElementById("ShowSortPrice").innerHTML = "ASC";
	}*/
	if(document.getElementById("ShowSortPrice").innerHTML == "ASC"){
		document.getElementById("ShowSortPrice").innerHTML = "DES";
		
	}
	else if(document.getElementById("ShowSortPrice").innerHTML == "DES"){
		document.getElementById("ShowSortPrice").innerHTML = "ASC";
	}
	
	Sort(document.getElementById("ShowSortPrice").innerHTML);
});

document.getElementById("LogIn").addEventListener("click",function(){
	RemoveTable();
	InVisible();
	document.getElementById("coreid").style.display = "none";
	document.getElementById("logid").style.display = "block";
	document.getElementById("crumbshome").innerHTML = "Home>>"+document.getElementById("LogIn").innerHTML;
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
	let div1 = document.getElementById("contactdataid");
	div1.style.display = "none";
}


function InVisibleGalery(){
	let div1 = document.getElementById("galeryid");
	div1.style.display = "none";
}

function InVisibleLog(){
	let div1 = document.getElementById("logid");
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
var countGoods = document.getElementById('counterPlus');
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
	RemoveTable();
	Visible();
	InVisibleContact();///??????
	InVisibleLog();
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
	    checkbox.onchange = function () { massarr.splice(0, 1); generate_table(massarr,1); document.getElementById("counterPlus").innerHTML -= 1; };
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
		
		cellText = document.createTextNode("Total price to insert = " +  BasketObject.getPrice());
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
	InVisibleGalery();
	InVisibleLog();
	CleanImg();
	
	let arr = [];
	if(obj.id == "menu-pizzaid"){
		for(let i =0;i < arrimg.length;i++){
			if(arrimg[i].getAttribute("title") == "0"){
				arr.push(i);
			}
		}
	}
	if(obj.id == "menu-rolsid"){
    for(let i =0;i < arrimg.length;i++){
			if(arrimg[i].getAttribute("title") == "1"){
				arr.push(i);
			}
		}
	}
	if(obj.id == "menu-setsid"){
	for(let i =0;i < arrimg.length;i++){
			if(arrimg[i].getAttribute("title") == "2"){
				arr.push(i);
			}
		}
	}
	if(obj.id == "menu-grill"){
    
		for(let i =0;i < arrimg.length;i++){
			if(arrimg[i].getAttribute("title") == "3"){
				arr.push(i);
			}
		}
	}
	if(obj.id == "menu-lunch"){
		for(let i =0;i < arrimg.length;i++){
			if(arrimg[i].getAttribute("title") == "4"){
				arr.push(i);
			}
		}
	}
	ShowImg(arr);
	AppendCrumbs(obj);
}

function AppendCrumbs(obj){	
	document.getElementById("crumbshome").innerHTML ="Home >>"+ obj.innerHTML;
}



document.getElementById("buttonregformid").addEventListener("click",function(){
	let name = document.getElementById("logformid").value;
	let passwordname = document.getElementById("passwordformid").value;
	let res = [];
	let tmp = [];
	let parsetmp = [];
	let ok = true;
	let parsearr = JSON.parse(localStorage.getItem("session2"));
	if(parsearr != null){
		for(let i =0;i < parsearr.length;i++){
		if(parsearr[i][0] == name){
			ok = false;
			break;
		}
	}
	}
	if(ok){
		if(parsearr!= null){
			for(let i = 0;i < parsearr.length;i++){
				tmp.push(parsearr[i]);
			}
		}
		res.push(name);
		res.push(passwordname);
		tmp.push(res);
		localStorage.setItem("session2",JSON.stringify(tmp));
	}
	else{
		document.getElementById("logformid").value = "";
		document.getElementById("passwordformid").value = "";
		alert("user with given password and name already exists");
	}
});

var userName = "";

document.getElementById("buttonlogformid").addEventListener("click",function(){
	let identity = [];
	let name = document.getElementById("logformid").value;
	let passwordname = document.getElementById("passwordformid").value;
	if(JSON.parse(localStorage.getItem("session2")) != null){
		identity = JSON.parse(localStorage.getItem("session2"));
		for(let i =0;i < identity.length;i++){
			if(name == identity[i][0] && passwordname == identity[i][1]){
				userName = identity[i][0];
				document.getElementById("LogIn").innerHTML = userName;
				document.getElementById("ShowHistory").style.display = "block";
				document.getElementById("LogOut").style.display = "block";
				ReturnStartPage();
				break;
			}
		}
	}
	if(userName == ""){
		document.getElementById("logformid").value = "";
		document.getElementById("passwordformid").value = "";
		alert("Consider creating new account");
	}
	
	
});

document.getElementById("LogOut").addEventListener("click",function(){
	document.getElementById("LogIn").innerHTML = "Log In";
	document.getElementById("ShowHistory").style.display = "none";
	document.getElementById("LogOut").style.display = "none";
	userName = "";
	
});

function ReturnStartPage(){
	InVisible();
	RemoveTable();
	InVisibleData();
	InVisibleGalery();
	InVisibleLog();
	document.getElementById("coreid").style.display = "block";
	CleanImg();
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
	setInterval(function(){ii = (ii % 5) + 1;document.getElementById("switch"+ii).checked = "true";changeSlide(ii);},3000);
	
};


document.getElementById("buttonid").addEventListener("click",function(){
	let searchText = (document.getElementById("searchid").value).toUpperCase();
	CleanImg();
	RemoveTable();
	InVisible();
	InVisibleData();
	InVisibleGalery();
	InVisibleLog();
	ClearPicPac();
	let picpackelem = document.getElementById("picpackid");
	document.getElementById("coreid").style.display = "block";
	
	for(let i=0;i <arrimg.length;i++){
			if(((arrimg[i].children[1].children[0].children[0].innerText).toUpperCase()).indexOf(searchText) != -1){
				picpackelem.appendChild(arrimg[i]);
		}
	}
	for(let i=0;i <picpackelem.children.length;i++){
		picpackelem.children[i].children[1].style.display = "block";
		picpackelem.children[i].style.display = "block";
	}
	
	Sort(document.getElementById("ShowSortPrice").innerHTML);
});


document.getElementById("gal2im1").addEventListener("click",function(){
	document.getElementById("gal1im1").src = "Picture/img2.png";
});

document.getElementById("gal2im2").addEventListener("click",function(){
	document.getElementById("gal1im1").src = "Picture/img3.png";
});

document.getElementById("gal2im3").addEventListener("click",function(){
	document.getElementById("gal1im1").src = "Picture/img4.png";
});

document.getElementById("gal2im4").addEventListener("click",function(){
	document.getElementById("gal1im1").src = "Picture/img5.png";
});

document.getElementById("gal2im5").addEventListener("click",function(){
	document.getElementById("gal1im1").src = "Picture/img6.png";
});

document.getElementById("gal2im6").addEventListener("click",function(){
	document.getElementById("gal1im1").src = "Picture/img19.png";
});

document.getElementById("gal2im7").addEventListener("click",function(){
	document.getElementById("gal1im1").src = "Picture/img11.png";
});

document.getElementById("gal2im8").addEventListener("click",function(){
	document.getElementById("gal1im1").src = "Picture/img12.png";
});
