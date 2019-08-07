import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  //addExpForm : FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    // this.addExpForm= new FormGroup({
    //   'exp': new FormArray([])
    // });
  }

  onNext(){
    this.router.navigateByUrl('/header/skills');
  }

  onPrev(){
    this.router.navigateByUrl('/header/education')
  }
  // onAddExp(){
  //   const control = new FormControl(null, Validators.required);
  //   (<FormArray>this.addExpForm.get('exp')).push(control)
  // }

}
