import { Selector } from 'testcafe'

export default class MyNotesPage {
    constructor(){
        this.myNotes = Selector('#my-notes-page h2');
    }
}