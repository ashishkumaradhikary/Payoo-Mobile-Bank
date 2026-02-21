document.getElementById('btn-login').addEventListener('click', function(){
            let mobileNumber = document.getElementById('mobile-number').value;
            let pin = document.getElementById('pin').value;

            if (mobileNumber == '01234567890' && pin == '1234'){
                alert('Login Success')
                window.location.assign("./home.html")
                document.getElementById('mobile-number').value = "";
            } else {
                alert(' Sorry! Wrong Mobile Number or PIN')
            }
        })