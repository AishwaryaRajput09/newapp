import {Component} from "@angular/core"

@Component({
    selector :"my-app-main", // this is hunted by index.html file
    templateUrl : "./app.component.html",  // we point component template from html file
    styleUrls : ["./app.component.css"],           //we can load up all the css files( we need) in this array
})
export class AppComponent {}