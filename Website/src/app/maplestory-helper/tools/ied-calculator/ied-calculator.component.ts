import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Link } from './link';
import { Equipment } from './equipment';

@Component({
  selector: 'app-ied-calculator',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, NgClass, NgIf, FormsModule],
  templateUrl: './ied-calculator.component.html',
  styleUrls: ['./ied-calculator.component.css', '../../maplestory-helper.component.css']
})
export class IedCalculatorComponent implements OnInit {

  links: Link[] = [
    {name: 'Empirical Knowledge', percentage: 9, visual: false, url: 'Explorer Mage'},
    {name: 'Light Wash', percentage: 20, visual: true, url: 'Luminous'},
    {name: "Rhinne's Blessing", percentage: 10, visual: true, url: 'Zero'},
    {name: 'Bravado', percentage: 10, visual: true, url: 'Hoyoung'},
  ];

  hats: Equipment[] = [
    {name: 'None', percentage: 0, url: 'None', set: 'None'},
    {name: 'CRA', percentage: 10, url: 'CRA Hat', set: 'CRA'},
    {name: 'Eternal', percentage: 15, url: 'Eternal Hat', set: 'Eternal'},
  ];

  tops: Equipment[] = [
    {name: 'None', percentage: 0, url: 'None', set: 'None'},
    {name: 'CRA', percentage: 5, url: 'CRA Top', set: 'CRA'},
    {name: 'Eternal', percentage: 5, url: 'Eternal Top', set: 'Eternal'},
  ];

  bottoms: Equipment[] = [
    {name: 'None', percentage: 0, url: 'None', set: 'None'},
    {name: 'CRA', percentage: 5, url: 'CRA Bottom', set: 'CRA'},
    {name: 'Eternal', percentage: 5, url: 'Eternal Bottom', set: 'Eternal'},
  ];

  gloves: Equipment[] = [
    {name: 'None', percentage: 0, url: 'None', set: 'None'},
    {name: 'Absolab', percentage: 0, url: 'Absolab Glove', set: 'Absolab'},
    {name: 'Arcane', percentage: 0, url: 'Arcane Glove', set: 'Arcane'},
  ];

  shoes: Equipment[] = [
    {name: 'None', percentage: 0, url: 'None', set: 'None'},
    {name: 'Absolab', percentage: 0, url: 'Absolab Shoe', set: 'Absolab'},
    {name: 'Arcane', percentage: 0, url: 'Arcane Shoe', set: 'Arcane'},
  ];

  shoulders: Equipment[] = [
    {name: 'None', percentage: 0, url: 'None', set: 'None'},
    {name: 'Magnus', percentage: 0, url: 'Magnus Shoulder', set: 'Boss'},
    {name: 'Absolab', percentage: 0, url: 'Absolab Shoulder', set: 'Absolab'},
    {name: 'Arcane', percentage: 0, url: 'Arcane Shoulder', set: 'Arcane'},
    {name: 'Eternal', percentage: 0, url: 'Eternal Shoulder', set: 'Eternal'},
  ];

  iedForm: FormGroup = this.formBuilder.group({
    links: this.formBuilder.array<Link>([]),
    hat: this.formBuilder.control('None'),
    top: this.formBuilder.control('None'),
    bottom: this.formBuilder.control('None'),
    glove: this.formBuilder.control('None'),
    shoe: this.formBuilder.control('None'),
    shoulder: this.formBuilder.control('None'),
  });

  visualIED: number = 0;
  effectiveIED: number = 0;

  sets = {
  }

  constructor(private readonly formBuilder: FormBuilder) {}

  get linksArray(): FormArray<FormGroup> {
    return (this.iedForm.get('links') as FormArray<FormGroup>);
  }
  
  ngOnInit() {
    let linksArray = this.iedForm.get('links') as FormArray;
    for (let link of this.links) {
      let row: FormGroup = this.formBuilder.group({
        name: this.formBuilder.control<string>(link.name),
        percentage: this.formBuilder.control<number>(link.percentage),
        visual: this.formBuilder.control<boolean>(link.visual),
        url: this.formBuilder.control<string>(link.url),
        include: this.formBuilder.control<boolean>(false)
      });
      linksArray.push(row);
    }
    this.iedForm.valueChanges.subscribe(() => {
      this.updateIED();
    })
  }

  getValue(array, name: string, value: string): string {
    let result = array.find(item => item.name === name);
    return result[value];
  }

  addIed(total: number, value: number) {
    return (100 - total) * value/100 + total;
  }

  updateIED(): void {
    let visual = 0;
    let total = 0;
    for (let link of this.linksArray.controls) {
      if (link.get('include').value) {
        total = this.addIed(total, link.get('percentage').value);
        if (link.get('visual').value) {
          visual = this.addIed(visual, link.get('percentage').value);
        }
      }
    }
    visual = this.addIed(visual, parseFloat(this.getValue(this.hats, this.iedForm.get('hat').value, 'percentage')));
    total = this.addIed(total, parseFloat(this.getValue(this.hats, this.iedForm.get('hat').value, 'percentage')));
    visual = this.addIed(visual, parseFloat(this.getValue(this.tops, this.iedForm.get('top').value, 'percentage')));
    total = this.addIed(total, parseFloat(this.getValue(this.tops, this.iedForm.get('top').value, 'percentage')));
    visual = this.addIed(visual, parseFloat(this.getValue(this.bottoms, this.iedForm.get('bottom').value, 'percentage')));
    total = this.addIed(total, parseFloat(this.getValue(this.bottoms, this.iedForm.get('bottom').value, 'percentage')));

    this.sets = {
      boss: 0,
      cra: 0,
      absolab: 0,
      arcane: 0,
      eternal: 0,
    }
    this.addSet(this.hats, this.iedForm.get('hat').value);
    this.addSet(this.tops, this.iedForm.get('top').value);
    this.addSet(this.bottoms, this.iedForm.get('bottom').value);
    this.addSet(this.gloves, this.iedForm.get('glove').value);
    this.addSet(this.shoes, this.iedForm.get('shoe').value);
    this.addSet(this.shoulders, this.iedForm.get('shoulder').value);


    if (this.sets['boss'] >= 7) {
      visual = this.addIed(visual, 10);
      total = this.addIed(total, 10);
    }
    if (this.sets['absolab'] >= 4) {
      visual = this.addIed(visual, 10);
      total = this.addIed(total, 10);
    }
    if (this.sets['absolab'] >= 7) {
      visual = this.addIed(visual, 10);
      total = this.addIed(total, 10);
    }
    if (this.sets['arcane'] >= 3) {
      visual = this.addIed(visual, 10);
      total = this.addIed(total, 10);
    }
    if (this.sets['eternal'] >= 5) {
      visual = this.addIed(visual, 20);
      total = this.addIed(total, 20);
    }

    this.visualIED = visual;
    this.effectiveIED = total;
  }

  addSet(array, value): void {
    if (this.getValue(array, value, 'set') == 'Boss') {
      this.sets['boss']++;
    }
    if (this.getValue(array, value, 'set') == 'CRA') {
      this.sets['cra']++;
    }
    if (this.getValue(array, value, 'set') == 'Absolab') {
      this.sets['absolab']++;
    }
    if (this.getValue(array, value, 'set') == 'Arcane') {
      this.sets['arcane']++;
    }
    if (this.getValue(array, value, 'set') == 'Eternal') {
      this.sets['eternal']++;
    }
  }

}
