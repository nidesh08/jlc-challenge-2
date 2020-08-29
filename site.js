    var data = [
        {
            "name":"",
            "numberOfLegs":"",
            "expression":"",
            "lengthOfTail":"",
            "hasHorns":"",
        }
        ];
    var x=1;
    var editClickCounter=0;
    var position=0;


    function submitFunction()
    {
        var inputName=document.getElementById("name").value;
        var inputNumberOfLegs=document.getElementById("numberOfLegs").value;
        var inputExpression=document.getElementById("expression").value;
        var inputLengthOfTail=document.getElementById("lengthOfTail").value;
        var inputHasHorns=document.getElementById("hasHorns").value;
         
        if ((document.getElementById("name").value !="") && (document.getElementById("numberOfLegs").value!="") && 
        (document.getElementById("expression").value!="") &&(document.getElementById("lengthOfTail").value!="") && 
        (document.getElementById("hasHorns").value!=""))
        {
            if (editClickCounter==0)
            {
                data.push(
                {
                    "name":inputName,
                    "numberOfLegs":inputNumberOfLegs,
                    "expression":inputExpression,
                    "lengthOfTail":inputLengthOfTail,
                    "hasHorns":inputHasHorns
                });

                clearInput();
            }
            else
            {
                data.splice(position, 1,
                {
                    "name":inputName,
                    "numberOfLegs":inputNumberOfLegs,
                    "expression":inputExpression,
                    "lengthOfTail":inputLengthOfTail,
                    "hasHorns":inputHasHorns
                });

                clearInput();
            }
        }
        else
        {
            alert("Please fill out all input fields");
        }                           
    }


    function viewFunction()
    {  
        if (data.length!=0)
        {
            if(editClickCounter==0)
            {
                while(x<data.length)
                {
                    var table=document.getElementById("datadisplay");
                    var row=table.insertRow(x);
                    var cell1=row.insertCell(0);
                    var cell2=row.insertCell(1);
                    var cell3=row.insertCell(2);
                    var cell4=row.insertCell(3);
                    var cell5=row.insertCell(4);
                    var cell6=row.insertCell(5);

                    cell1.innerHTML=data[x].name;
                    cell2.innerHTML=data[x].numberOfLegs;
                    cell3.innerHTML=data[x].expression;
                    cell4.innerHTML=data[x].lengthOfTail;
                    cell5.innerHTML=data[x].hasHorns;
                    cell6.innerHTML='<button type="button" id="editBtn" onclick="editFunction(this)">Edit</button>'+
                                    '<button type="button" id="deleteBtn" onclick="deleteFunction(this)">Delete</button>';
                    x++;
                }
            }
            else
            {
                var table=document.getElementById("datadisplay");
                table.rows[position].cells[0].innerHTML=data[position].name;
                table.rows[position].cells[1].innerHTML=data[position].numberOfLegs;
                table.rows[position].cells[2].innerHTML=data[position].expression;
                table.rows[position].cells[3].innerHTML=data[position].lengthOfTail;
                table.rows[position].cells[4].innerHTML=data[position].hasHorns;
                table.rows[position].cells[5].innerHTML='<button type="button" id="editBtn" onclick="editFunction(this)">Edit</button>'+
                                                        '<button type="button" id="deleteBtn" onclick="deleteFunction(this)">Delete</button>';
                document.getElementById("submitBtn").innerHTML="Add Animal";
                editClickCounter=0;
            }   
        }            
        else
        {
            alert("Please enter and submit values first")
        } 
    } 

    function clearInput()
    {
        document.getElementById("name").value="";
        document.getElementById("numberOfLegs").value="";
        document.getElementById("expression").value="";
        document.getElementById("lengthOfTail").value="";
        document.getElementById("hasHorns").value="";
    }

    function editFunction(w)
    {
        indexR=w.parentNode.parentNode.rowIndex;
        document.getElementById("name").value=data[indexR].name;
        document.getElementById("numberOfLegs").value=data[indexR].numberOfLegs;
        document.getElementById("expression").value=data[indexR].expression;
        document.getElementById("lengthOfTail").value=data[indexR].lengthOfTail;
        document.getElementById("hasHorns").value=data[indexR].hasHorns;
        document.getElementById("submitBtn").innerHTML="Update";
        editClickCounter=1;
        position=indexR;
    }

    function deleteFunction(w)
    {
        var table=document.getElementById("datadisplay");
        indexR=w.parentNode.parentNode.rowIndex;
        data.splice(indexR,1);
        table.deleteRow(indexR);
        x--;
        clearInput();
    }