function Total() {
		var qty=document.getElementById("txtqty").value;
		var up=document.getElementById("txtup").value;
		var total = qty*up;
		document.getElementById("txtTotal").value=total;
		document.getElementById("demo").innerHTML="<b>" + total;
	}