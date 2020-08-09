import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'manualscreener';

  RegForm: FormGroup;
  Regdatas = [];
  constructor() {}

  ngOnInit() {
    this.RegForm = new FormGroup({
      Name: new FormControl(""),
      TradeName: new FormControl(""),
      Address1 : new FormControl(""),
      Address2: new FormControl("")
    });
  }

  onSubmit() {
    console.log(this.RegForm.value);
    let Name = this.RegForm.value.Name;
    let TradeName = this.RegForm.value.TradeName;
    let Address1 = this.RegForm.value.Address1;
    let Address2 = this.RegForm.value.Address2;
    let manual = {
      Name: Name,
      TradeName: TradeName,
      Address1: Address1,
      Address2: Address2
    };

    if (this.RegForm) {
      // pushing employeeobject in emptyarray
      this.Regdatas.push(manual);
    }
   
    console.log(this.Regdatas);
  }
}

  






