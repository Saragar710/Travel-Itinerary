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
        })
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