import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title="db-challenge-app";
  public form!: FormGroup;
  public purchaseprice!: number;
  public purchasepricetaxes!: number;
  public timer:any;
  
  constructor(private fb: FormBuilder) {
    this.createForm();    
    this.form.valueChanges.subscribe(data => {
      const {firstInputDivisibleValue, secondInputDivisibleValue} =data; 
      clearTimeout(this.timer)
      if(this.form.invalid) return;
      this.timer = setTimeout(()=>{
        this.form.patchValue({
          divisibleResultValue:  firstInputDivisibleValue / secondInputDivisibleValue
        })
      },1000);

    });
  }

  get f(){
    return this.form.controls ;
  }

  createForm() {
    this.form = this.fb.group({
      firstInputDivisibleValue: ["", [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      secondInputDivisibleValue: ["", [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      divisibleResultValue: [""]
    });
  }


  submit() {
    console.log(this.form);
  }
}
