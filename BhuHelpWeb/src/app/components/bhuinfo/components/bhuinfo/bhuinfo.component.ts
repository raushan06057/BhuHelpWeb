import { Component, OnInit } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
    selector:'app-bhu-info',
    templateUrl:'./bhuinfo.component.html',
    styleUrls:['./bhuinfo.component.scss'],
    imports:[RouterOutlet,RouterLink]
})
export class BhuInfoComponent implements OnInit{
    ngOnInit(): void {
    }

}