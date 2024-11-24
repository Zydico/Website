import { NgClass } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tracker',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, FormsModule],
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css', '../../maplestory-helper.component.css']
})
export class TrackerComponent implements OnInit {
  dailyForm: FormGroup = this.formBuilder.group({
    rows: this.formBuilder.array<FormGroup>([])
  });

  get dailyRows(): FormArray<FormGroup> {
    return (this.dailyForm.get('rows') as FormArray);
  }

  constructor(private readonly formBuilder: FormBuilder, private cdr: ChangeDetectorRef) {
  }
  
  ngOnInit() {
    this.addDailyRow();
  }

  addDailyRow() {
    let row: FormGroup = this.formBuilder.group({
      character: this.formBuilder.control<string>('test 1'),
      task: this.formBuilder.control<string>('test 2'),
      checked: this.formBuilder.control<boolean>(false),
    });
    this.dailyRows.push(row);
  }
}
