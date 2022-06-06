import { LightningElement, api } from 'lwc';

export default class Hellowordlista extends LightningElement {

    @api
    contactslist;

    removeContact(event){
        const Id = event.target.name;
        this.dispatchEvent(new CustomEvent('delete', { detail: Id }))
    }
    
}