var mysql = require('mysql');

var con = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "finishit_db",
    
}
);

    //This is the default function that should be called when user click on a date and toggle to "Alltasks"
    function viewDefaultTask(x){
    //var c = "2020-04-28 00:00:00";
    var c = x; 
    
    var sql ='select task.t_name,task.t_due_date,priority.p_priority from task INNER JOIN priority ON task.t_priority = priority.p_id where t_due_date = ' + mysql.escape(c) + 'ORDER BY task.t_priority';
    //var sql ='select * from task INNER JOIN priority ON task.t_priority = priority.p_id where t_due_date = ' + mysql.escape(c) + 'ORDER BY task.t_priority'; 
    con.query(sql, function (err, result){
        if(err)
        {
            return console.log(err);
        }
        
        return console.log(result);
    
    });
    
    //}
    
    //when user toggle to onging task tab
    function viewOngoingTask(x)
    {
    var c = x;
    var sql ='select task.t_name,task.t_due_date,priority.p_priority from task INNER JOIN priority ON task.t_priority = priority.p_id where t_status = 1 AND t_due_date = ' + mysql.escape(c)+ 'ORDER BY task.t_priority'; 
    con.query(sql, function (err, result){
        if(err)
        {
            return console.log(err);
        }
        
        return console.log(result);
    });
    }
    
    //when user toggle to toStart 
    function viewToStartTask(x)
    {
    var c = x;
    var sql ='select task.t_name,task.t_due_date,priority.p_priority from task INNER JOIN priority ON task.t_priority = priority.p_id where t_status = 2 AND t_due_date = ' + mysql.escape(c)+ 'ORDER BY task.t_priority'; 
    con.query(sql, function (err, result){
        if(err)
        {
            return console.log(err);
        }
        return console.log(result);
    });
    }
    //when user toggle to donetask
    function viewDoneTask(x)
    {
    var c = x;
    var sql ='select task.t_name,task.t_due_date,priority.p_priority from task INNER JOIN priority ON task.t_priority = priority.p_id where t_status = 3 AND t_due_date = ' + mysql.escape(c)+ 'ORDER BY task.t_priority'; 
    con.query(sql, function (err, result){
        if(err)
        {
            return console.log(err);
        }
        return console.log(result);
    });
    }
    //when user toggle to Overdue task
    function viewOverdueTask(x)
    {
    var c = x;
    var sql ='select task.t_name,task.t_due_date,priority.p_priority from task INNER JOIN priority ON task.t_priority = priority.p_id where t_status = 4 AND t_due_date = ' + mysql.escape(c)+ 'ORDER BY task.t_priority'; 
    con.query(sql, function (err, result){
        if(err)
        {
            return console.log(err);
        }
        return console.log(result);
    });
}
    }
    
    // //when user toggle to all tasks
    // function viewAllTask()
    // {
    // var c = "2020-04-28 00:00:00";
    // var sql ='select task.t_name,task.t_due_date,priority.p_priority from task INNER JOIN priority ON task.t_priority = priority.p_id where t_status = 5 AND t_due_date = ' + mysql.escape(c)+ 'ORDER BY task.t_priority'; 
    // con.query(sql, function (err, result){
    //     if(err)
    //     {
    //         return console.log(err);
    //     }
    //     return console.log(result);
    // });
    