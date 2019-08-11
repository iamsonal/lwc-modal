/**
 * Created by sonal on 2019-08-10.
 */

import {LightningElement, api, track} from 'lwc';

export default class Modal extends LightningElement {

    @api name;
    @api styleClass = '';
    @api title;
    @api hideClose = false;
    @api isLarge = false;

    @track modalClass = 'slds-modal ' + (this.isLarge ? 'slds-modal_large ' : '') + this.styleClass;
    @track backdropClass = 'slds-backdrop';

    @api open() {
        this.modalClass = 'slds-modal slds-fade-in-open ' + (this.isLarge ? 'slds-modal_large ' : '') + this.styleClass;
        this.backdropClass = 'slds-backdrop slds-backdrop_open';
    }

    @api close() {
        this.modalClass = 'slds-modal ' + (this.isLarge ? 'slds-modal_large ' : '') + this.styleClass;
        this.backdropClass = 'slds-backdrop';
    }

}