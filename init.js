
(function () {
    var arr=[];
    function checkbtn(){
        var temp = document.querySelector(".down");
        if (typeof (temp) != 'undefined' && temp != null) {
            setTimeout(checkbtn, 2000);
        }
        else {
            setTimeout(aaa, 2000);
        }

    }
    function aaa() {
        var element = document.querySelector(".isOLae");

                
        if (typeof (element) != 'undefined' && element != null) {
            var btn = document.createElement("input");
            btn.value = "Download Attendance";
            btn.id = "down";
            btn.type = "button";
            btn.className ="down";
            var call = document.getElementsByClassName("isOLae")[0];
            call.parentNode.insertBefore(btn,call)
            //document.querySelector(".isOLae").appendChild(btn);
           
            btn.addEventListener("click", function () {
                var arr=[];
                //alert("did something");
                //document.getElementsByClassName("GvcuGe")[0].style.overflowY ="auto"
                //document.getElementsByClassName("GvcuGe")[0].style.overflowX ="hidden"
                var abc = document.getElementsByClassName("J8vCN zHGix")[0];
                abc.id = "dfghdfgh"
                abc = document.getElementById("dfghdfgh");
                abc.scrollTop = 0;
                
                var x = document.getElementsByClassName('ZjFb7c');
                for (var i = 0; i < x.length; i++) {
                    arr.push(x[i].innerText);
                }
                //Array is completed
                var i = 0
                while(i==0){

                
                    if ( abc.scrollTop === (abc.scrollHeight - abc.offsetHeight))
                    {
                       
                        i = 1;
                        var row=[];
                        //alert(arr.toString());
                        var csv = 'Name\n';  
                        for(i=0;i<arr.length;i++) {
                            csv+=arr[i];
                            csv += "\n";  
                        }
                             
                         
                        var hiddenElement = document.createElement('a');  
                        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);  
                        hiddenElement.target = '_blank';  
                        var today = new Date();
                        var dd = String(today.getDate()).padStart(2, '0');
                        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                        var yyyy = today.getFullYear();
                        
                        today = mm + '/' + dd + '/' + yyyy;
                        
                        //provide the name for the CSV file to be downloaded  
                        hiddenElement.download = today + " "+'Attendance.csv';  
                        hiddenElement.click(); 

                    }
                    else{
                        alert("not");
                        //abc.scrollTop = abc.scrollTop + 200;
                        //var x = document.getElementsByClassName('ZjFb7c');
                        //for (var i = 0; i < x.length; i++) {
                        //    arr.push(x[i].innerText);
                        //}
                        i=1;
                    } 
                
                }//end of while
             
            });

            checkbtn();
        }
        else {
            addbut();
        }
    }
    
    function addbut() {
        setTimeout(aaa, 2000);
    }
    addbut();
})();
