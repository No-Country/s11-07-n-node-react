

export class Validators {

    static get email() {
        return /^[a-zA-Z0-9._\-%+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    }

}


export class EmailValidator {
    static raises_an_error_if_email_is_invalid(email: string) {
        if (Validators.email.test(email) == false)
            throw new EmailInvalidError();
    }
}

export class EmailInvalidError {
    message: string = "Invalid email format"
}