var mysql = require('mysql');

var con = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "finishit_db",
    
}
);
//var c = "2020-04-28 00:00:00";

function redNotification()
{
var todate = new Date();
var dat1 = todate.getDate();
var month1 = todate.getMonth() + 1;
var yyyy = todate.getFullYear();

todate = yyyy+'-'+month1+'-'+dat1 +" 00:00:00";

var sql ='select * from task INNER JOIN priority ON task.t_priority = priority.p_id where t_due_date = ' + mysql.escape(todate) + ' AND t_priority = 1'; 
con.query(sql, function (err, result){
    if(err)
    {
        return console.log(err);
    }
    if(result.length>0)
    {
        return true;
    }
    else
    {
        // Object.keys(result).forEach(function(key) {
        //     var row = result[key];
        //     console.log(row)
        //   });
        return false;
    }
});
}


function dayListing()
{
var today = new Date();
var today1 = new Date();
var today2 = new Date();
var today3 = new Date();
var today4 = new Date();
var today5 = new Date();
var today6 = new Date();

var dd = today.getDate();
var d1 = today.getDate() + 1;
var d2 = today.getDate() + 2;
var d3 = today.getDate() + 3;
var d4 = today.getDate() + 4;
var d5 = today.getDate() + 5;
var d6 = today.getDate() + 6;

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();

if((mm == 4) || (mm == 6) || (mm == 9) || (mm == 11))
{
    if(d1>30)
    {
        d1 = 1;
    }
    if(d2>30)
    {
        d2 = d2-30;
    }
    if(d3>30)
    {
        d3 = d3-30;
    }
    if(d4>30)
    {
        d4 = d4-30;
    }
    if(d5>30)
    {
        d5 = d5-30;
    }
    if(d6>30)
    {
        d6 = d6-30;
    }

}

if((mm == 1) || (mm == 3) || (mm == 5) || (mm == 7) || (mm == 8) || (mm == 10) || (mm == 12))
{
    if(d1>31)
    {
        d1 = 1;
    }
    if(d2>31)
    {
        d2 = d2-31;
    }
    if(d3>31)
    {
        d3 = d3-31;
    }
    if(d4>31)
    {
        d4 = d4-31;
    }
    if(d5>31)
    {
        d5 = d5-31;
    }
    if(d6>31)
    {
        d6 = d6-31;
    }

}


today = mm+'-'+dd+'-'+yyyy;
today1 = mm+'-'+(d1)+'-'+yyyy;
today2 = mm+'-'+(d2)+'-'+yyyy;
today3 = mm+'-'+(d3)+'-'+yyyy;
today4 = mm+'-'+(d4)+'-'+yyyy;
today5 = mm+'-'+(d5)+'-'+yyyy;
today6 = mm+'-'+(d6)+'-'+yyyy;
//2020-04-28 00:00:00
console.log(today);
console.log(today1);
console.log(today2);
console.log(today3);
console.log(today4);
console.log(today5);
console.log(today6);
}