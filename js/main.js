//Các xử lí kịch bản cho index.html - main.js

//document.frmSearch or forms[1].txtKeyword.pros or meth

//Khai báo biến global
var def="---từ khóa---";//defaul ngầm định
var emp="";

function setFirstTime(fn){
	//Tham chiếu đối tượng nhập từ khóa
	//window.document.frmSearch.txtKeyword.value = def;
	//var fn = window.document.forms[1];
	
	fn.txtKeyword.value = def;
}


function setKeyword(fn, isClick){
	//Lấy giá trị từ khóa(khi ín vào không hiện từ khóa)
	var value = fn.txtKeyword.value;
	
	if(isClick){
		//Khi kích chuột vào
		
	
		if(value.trim() == def){//trim xóa kí tự trống đầu cuối
			fn.txtKeyword.value = emp;
		}
	}else{
		//Khi thoát chuột ra
		if(value.trim() == emp){
			fn.txtKeyword.value = def;
		}
		
	}
}

function checkValidKeyword(fn){
	var value = fn.txtKeyword.value;
	
	value = value.trim();
	if((value==def) || (value==emp)){
		var message = "Hãy nhập vào từ khóa tìm kiếm";
		window.alert(message);
		//khi nhấn ok con trỏ về lại search
		fn.txtKeyword.focus();
		fn.txtKeyword.select();
		return false;
	}
	return true;
}






