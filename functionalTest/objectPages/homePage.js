import { Selector } from 'testcafe';

export default class HomePage {
    constructor() {
        this.loginButton = Selector('.button-login');
        this.header = Selector('#welcome-page').find('h1');
    }
}