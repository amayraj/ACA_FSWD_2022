
	function run(){
		var reqBody={
			"username":document.getElementById("username").value,
			"password":document.getElementById("password").value,
			"firstName": document.getElementById("FirstName").value,
                         "lastName": document.getElementById("LastName").value
  
		}
		console.log("abcd")
		fetch("https://yournoteserver.herokuapp.com/users",{
			method:"POST",
			body:new URLSearchParams(reqBody),
			headers:{
				"Content-type":"application/x-www-form-urlencoded",
				'Access-Control-Request-Method':"POST",
				"Access-Control-Request-Headers":"origin",
				"Origin":"https://yournoteserver.herokuapp.com/"
			}
			res.statusCode=401;
         res.setHeader('Content-Type', 'application/json');
         res.send({err:'try a different username'});
         res.statusCode=500;
         res.setHeader('Content-Type', 'application/json');
         res.send({err:"username and password required"})
         res.statusCode=200;
         res.setHeader('Content-Type', 'application/json');
         res.send(user);
		}).then((response)=>{
			if(response.status!=200||response.status!=500 || response.status!=401){
				cosole.log(response.json())
			}
			return response.json();
		}).then((user)=>console.log(user))
	}
