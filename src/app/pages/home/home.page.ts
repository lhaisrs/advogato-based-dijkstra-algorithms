import { Component } from "@angular/core";
import { Node } from '@swimlane/ngx-graph';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html'
})

export class HomePage { 

    constructor() {}

    public onNodeSelect(event: unknown): void {
        console.log(event);
    }
}