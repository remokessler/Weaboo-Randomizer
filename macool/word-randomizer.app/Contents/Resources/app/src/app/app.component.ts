import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input;
  output;

  public randomize() {    
    if(!!this.input) {
      if(this.input.indexOf(',')) {
        let values = this.input.split(',');
        let out = [];
        for(let val of values.sort(() => Math.random() - 0.5)) {
            out.push(val.trim());
        }
        this.output = out.join(',');
      } else {
        this.output = this.input;
      }
    }
  }
}
