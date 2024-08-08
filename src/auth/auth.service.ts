import { Injectable } from "@nestjs/common";

@Injectable({

})
export class AuthService {
    signin() {
        return {
            msg: '<h1>I am signed up</h1>'
        }
    }

    signup() {
        return {
            msg: 'I am signed in'
        }
    }
}

