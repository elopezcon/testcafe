import { Selector } from 'testcafe'

export default class LoginPage {
    constructor(){
        this.userTextField = Selector ('input[name*=username]');
        this.passwordTextField = Selector ('input[name*=password]');
        this.loginbutton = Selector ('button[type=button]');
        this.cancelButton = Selector('button[class*=button-cancel]');
        this.errorMessage = Selector('#login-error-message');
    }
}