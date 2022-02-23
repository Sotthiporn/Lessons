//alert("External JavaScript");
window.onload=function(){
        var total=0;
        var i_1=0;
        var qty_old=0;
        var amount_old1=0;
        document.getElementById("btn-Cal1").onclick=function(){
            var price1=document.getElementById("span1").innerText;
            var qty1=document.getElementById("num1").value;
        }
        if(Number(qty1)==qty_old){
            return;
        }
        else{
            if(i_1==0){
                total=total+Number(price1)* Number(qty1);
                document.getElementById("spantol").innerText="Total:"+"$"+total+".00";
                qty_old=Number(qty1);
                amount_old1=Number(qty1)* Number(price1);
                i_1=1;
            }
        
        else{
                total=total+Number(qty1)*Number(price1);
                total=total-amount_old1;
                qty_old=Number(qty1);
                amount_old1=Number(qty)*Number(price1);
                document.getElementById("spantol").innerText="Total: "+"$"+total+".00";
        }
}

}