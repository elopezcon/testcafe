import HomePage from  '../objectPages/homePage';
import LoginPage from '../objectPages/loginPage';
import MyNotesPage from '../objectPages/myNotesPage';
import DataProvider from '../data/data';

fixture `Access to login homepage`
    .page `http://testapp.galenframework.com/`

const homePage = new HomePage();
const loginPage = new LoginPage();
const myNotesPage = new MyNotesPage();
const dataProvider = new DataProvider();

test('Access to login homepage and click on login button', async (t) => {
    await t
        .expect(homePage.header.innerText).eql('Welcome to our test page!')
        .click(homePage.loginButton);
});

test('Start login process happy path', async (t) => {
    await t
        .click(homePage.loginButton)
        .typeText(loginPage.userTextField, 'testuser@example.com')
        .typeText(loginPage.passwordTextField,'test123')
        .click(loginPage.loginbutton)
        .expect(myNotesPage.myNotes.innerText)
        .eql('My Notes');

});

const tests = dataProvider.userData.map(async users => (
test('Error loggin', async (t) => {
   
    await t
        .click(homePage.loginButton)
        .pressKey('ctrl+a delete')

    if(users.user) {
    await t    
        .typeText(loginPage.userTextField, users.user)}

    if (users.password){
    await t
        .typeText(loginPage.passwordTextField, users.password)}

    await t
        .click(loginPage.loginbutton)
        .expect(loginPage.errorMessage.innerText)
        .eql('The username or password are incorrect')

    await Promise.all(tests);
})));