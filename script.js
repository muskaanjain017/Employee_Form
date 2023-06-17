let employeeTable=[];

function addUser(){
    let name = document.getElementById("name").value;
    let profession = document.getElementById("profession").value;
    let age = document.getElementById("age").value;

    if(name!="" && profession!="" && age!=""){
        document.getElementById("Message").innerHTML="Success : Employee Added!";
        document.getElementById("Message").className="success";
        let obj = {id:employeeTable.length+1,name:name,profession:profession,age:age};
        employeeTable.push(obj);
        console.log(employeeTable);
        tableCreate();
    }
    else{
        document.getElementById("Message").innerHTML="Error : Please Make sure All the fields are filled before adding in an employee !";
        document.getElementById("Message").className="error";
    }
}
function tableCreate(){
    let tbl= document.createElement('table');
    for(let i=0;i<employeeTable.length;i++){
        let tr = document.createElement('tr');
        tbl.appendChild(tr);

        let td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(employeeTable[i].id+"."));
        tr.appendChild(td1);
        let td2 = document.createElement('td');
        td2.appendChild(document.createTextNode("Name :"+employeeTable[i].name));
        tr.appendChild(td2);
        let td3 = document.createElement('td');
        td3.appendChild(document.createTextNode("Profession :"+employeeTable[i].profession));
        tr.appendChild(td3);
        let td4 = document.createElement('td');
        td4.appendChild(document.createTextNode("Age :"+employeeTable[i].age));
        tr.appendChild(td4);   
    }

    document.getElementById("Employees").innerHTML="";
    document.getElementById("Employees").appendChild(tbl);

}