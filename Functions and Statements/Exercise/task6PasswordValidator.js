function solve(password){

    let isValid = true;
    let errors = [];

    if (password.length < 6 || password.length > 10) {
        errors.push("Password must be between 6 and 10 characters");
        isValid = false;
    }

    if (!/^[a-zA-Z0-9]+$/.test(password)) {
        errors.push("Password must consist only of letters and digits");
        isValid = false;
    }

    if ((password.match(/\d/g) || []).length < 2) {
        errors.push("Password must have at least 2 digits");
        isValid = false;
    }

    if (isValid) {
        console.log("Password is valid");
    } else {
        errors.forEach(error => {
            console.log(error);
        });
    }
}

solve('logIn');
solve('MyPass123');
solve('Pa$s$s');