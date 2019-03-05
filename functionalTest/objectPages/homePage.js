import { Selector } from 'testcafe';

export default class HomePage {
    constructor (){
        this.loginButton = Selector ('button[type=button]');
        this.header      = Selector('#welcome-page h1');
    }
}