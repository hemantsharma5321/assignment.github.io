<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />

    <title>Test</title>
    <style type="text/css" media="all">
        form input {
            margin:10px;
        }
    </style>
    
</head>

<body>
    <fieldset>
        <form action="#" method="get" id="form1">
            <label for="f_name">first name:</label>
            <input type="text" name="f_name" id="fname"required/>
            <br />
            <label for="l_name">last name:</label>
            <input type="text" id="lname" name="l_name" required/>
            
            <br />
            <label for="gender">Gender:</label>
            male:
            <input type="radio" id="gender" name="gender" />
            
            Female:
            <input type="radio" id="gender"name="gender" required/>
            <br />
           Email: <input type="email" id="email" name="email" />
            <br />
            Mobile: <input type="number" id="mobile" name="mobile" maxlength="10" minlength="10"/>
            <br />
            
            Password: <input type="password" id="password" name="password" minlength="8" />
            <br />
            
            <input type="checkbox" name="terms" id="terms" value="" />
            Accept <a href="#">Terms and condition</a>
            <br />
            <input type="submit" name="submit" id="submit" onclick="printjason" />
            
        </form>
        
    </fieldset>
    

<script>
    var object = {};
formData.forEach(function(value, key){
    object[key] = value;
});
var json = JSON.stringify(object);
    console.log(json);
    
</script>

    
</body>
</html>
