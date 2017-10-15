import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-testfrom',
  templateUrl: './testfrom.component.html',
  styleUrls: ['./testfrom.component.scss']
})
export class TestfromComponent implements OnInit {
  formtest:FormGroup;
  constructor(private build:FormBuilder) { 
    this.formtest = this.build.group({
      name:['', [Validators.required]],
      num:['',[Validators.max(500),Validators.required]],
      email:['', [Validators.email, Validators.required]],
      password:['', [Validators.required]]
    });
  }

  ngOnInit() {
  }
  onsubmit(){
    if(this.formtest.valid){
      console.log(this.formtest.value);
      this.formtest.reset();
    }
  }
}
