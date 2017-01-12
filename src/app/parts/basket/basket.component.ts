import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

    private open = false;

    constructor() { }

    ngOnInit() {
    }

    toggle() {
        this.open = !this.open;
        return false;
    }
}
