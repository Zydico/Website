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

  visual_list = [
    {source: 'Fafnir Weapon', ied: 10, darken: false},
    {source: 'Absolab Weapon', ied: 10, darken: false},
    {source: 'Arcane Weapon', ied: 20, darken: false},
    {source: 'Genesis Weapon', ied: 20, darken: false},
    {source: 'CRA Hat', ied: 10, darken: true},
    {source: 'Eternal Hat', ied: 15, darken: true},
    {source: 'CRA Top', ied: 5, darken: false},
    {source: 'Eternal Top', ied: 15, darken: false},
    {source: 'CRA Bottom', ied: 5, darken: true},
    {source: 'Eternal Bottom', ied: 5, darken: true},
    {source: 'Arcane (3-set)', ied: 10, darken: false},
    {source: 'Absolab (4-set)', ied: 10, darken: false},
    {source: 'Eternal (5-set)', ied: 20, darken: false},
    {source: 'Pitched (3-set))', ied: 10, darken: true},
    {source: 'Pitched (6-set))', ied: 10, darken: true},
    {source: 'Reinforced Gollux (4-set effect)', ied: 15, darken: false},
    {source: 'Superior Gollux (4-set effect)', ied: 30, darken: false},
    {source: 'Ambition (Level 100)', ied: 10, darken: true},
    {source: 'Blaster Legion (Level 200)', ied: 5, darken: false},
    {source: 'Blaster Legion (Level 250)', ied: 5, darken: false},
    {source: 'Lynn Legion (Level 200)', ied: 5, darken: true},
    {source: 'Lynn Legion (Level 250)', ied: 5, darken: true},
    {source: 'CRA Title', ied: 5, darken: false},
    {source: 'Monster Park Medal', ied: 10, darken: true},
    {source: 'Familiar IED', ied: '', darken: false},
    {source: 'Familiar Badges', ied: '', darken: true},
    {source: 'Hyperstats', ied: '', darken: false},
    {source: 'Legion Grid', ied: '', darken: true},
    {source: 'Legion Artifact', ied: '', darken: false},
    {source: 'Luminous Link Skill', ied: 20, darken: true},
  ]

  constructor(private readonly formBuilder: FormBuilder) {}

  iedForm: FormGroup = this.formBuilder.group({
    visual: this.formBuilder.array([]),
    nonvisual: this.formBuilder.array([])
  });
  
  ngOnInit() {
    this.addVisual();    
  }

  get visuals(): FormArray {
    return (this.iedForm.get('visual') as FormArray);
  }

  addVisual() {
    let visual = this.iedForm.get('visual') as FormArray;
      
    for (let row of this.visual_list) {
      let source = this.formBuilder.group({
        source: this.formBuilder.control(row.source),
        ied: this.formBuilder.control(row.ied),
        checked: this.formBuilder.control(false),
        darken: this.formBuilder.control(row.darken)
      });
      visual.push(source);
    }
  }


  // let copy_row = this.formBuilder.group({
  //   name: this.formBuilder.control(row.name),
  //   checked: this.formBuilder.control(row.checked),
  //   party_size: this.formBuilder.control(row.party_size),
  //   darken: this.formBuilder.control(row.darken)
  // })


}
