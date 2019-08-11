/**
 * Created by sonal on 2019-08-10.
 */

import {LightningElement} from 'lwc';

export default class ModalContainer extends LightningElement {


    handleShowModal() {
        this.template.querySelector("c-modal").open();
    }

    handleCancelModal() {
        this.template.querySelector("c-modal").close();
    }
}