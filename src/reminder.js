var nodemailer = require('nodemailer');
var mysql = require('mysql'); 

class User{
    constructor(name, email){
        this.Name = name;
        this.Email = email;
    }
}

var taskResult = null;
getTasks(sendEmail);
  
function sendEmail (result) {
    taskResult = result;
    var newuser = new User("Ron", "shehanthelis.r@gmail.com");
    var bodyTxt = createBody(taskResult, newuser.Name);
    
    sendEMail(bodyTxt, newuser.Email);   
}

/**
 * Function to get task list
 * 
 * @param {function} callbackFunction
 * @returns Task records
 * 
 */
function getTasks(callback){

    var date = new Date('2020-06-03');
    

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "finishit_db"
    });

    con.connect(function (err) {
        if (err) throw err;
        //var sqlTsk = "SELECT * FROM task WHERE t_active = 1 AND t_due_date = ?";
        var sqlTsk = "SELECT t_name FROM task WHERE t_active = 1 AND t_due_date = ?";

        //run query to get values from task table
        con.query(sqlTsk, [date], function (err, result) {
            if (err) {
                console.log("[mysql error]", err);
            }
            return callback(result);

        });
    });
}

/**
 * 
 * @param {array} res - result from task table
 * @param {string} name - recipient name
 */
function createBody(res, name){
    var txt = "Hi " + name + ",\nPlease note that the following tasks are due today!\n";    
    for(var i = 0; i < res.length; i++){
        txt = txt + "\n" + res[i].t_name + "\n";
    }
    return txt;
    
}


/**
 * Function to send an email
 * 
 * @param {string} body
 * @param {User.Email} recipient
 * @author Shehan Thelis
 * 
 */
function sendEMail(body, recipient){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'finishittodolist@gmail.com',
          pass: 'arptodolist'
        }
      });
      
      var mailOptions = {
        from: 'finishittodolist@gmail.com',
        to: recipient,
        subject: 'Testing mail',
        text: body
      };

      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 
}

