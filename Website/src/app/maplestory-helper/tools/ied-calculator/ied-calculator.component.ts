import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ied-calculator',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, NgClass, NgIf, FormsModule],
  templateUrl: './ied-calculator.component.html',
  styleUrls: ['./ied-calculator.component.css', '../../maplestory-helper.component.css']
})
export class IedCalculatorComponent implements OnInit {

  constructor(private readonly formBuilder: FormBuilder) {}
  
  ngOnInit() {
  }


}
