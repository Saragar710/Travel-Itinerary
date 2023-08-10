class login {
    constructor(form, fields) {
        this.form = form;
        this.fields= fields;
        this.validateOnSubmit();
    }

    validateOnSubmit() {
        var self = this;

        this.form.addEventListener ("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById ("pass").value;
            console.log ("Username: " + username + " Password: " + password);


            // self.fields.forEach((field) => {
            //     const input = document.querySelector("#${field}");
            //     console.log(fields);

            // })

            var error = 0;

            //error messages
            if (username == "" && password == "") {
                error ++;
                this.setStatus(username, "Please enter username and password", "error");
                console.log ("An error has been recorded: both username and password are empty");
            }

            else if (username == "") {
                error++;
                this.setStatus(username, "Username cannot be blank", "error");
                console.log ("An error has been recorded on username");
            }

            else if (password == "") {
                error++;
                this.setStatus(password, "Password cannot be blank. Please try again.", "error");
                console.log ("An error has been recorded on password");
            }

            if (error == 0) {
                console.log ("The form would be submitted in this case");
                this.form.submit();
            }
        }) 
    }

    setStatus (field, message,status) {
        const errorMessage = document.querySelector(".loginErrorMessage");
        if (status == "error") {
            errorMessage.innerHTML = message;
            
        }
    }
}



const form = document.querySelector (".login");
//if the form is set, we want to pass the fields.
if (form) {
    console.log ("the form was entered");
    const fields = ["username", "password"];
    console.log(fields[1]);
    const validator = new login(form, fields);
}