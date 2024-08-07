import { Component } from "@angular/core";

@Component({
    selector:'test-app',
    template:`<h1> Hello, It is me. </h1>`,
    styles:['h1 { color:red }']
})

export class TestComponent{
    title = 'Test-Component'
}