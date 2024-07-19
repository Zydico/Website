import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Link } from './link';

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

  iedForm: FormGroup = this.formBuilder.group({
    links: this.formBuilder.array<Link>([])
  });

  visualIED: number = 0;
  effectiveIED: number = 0;

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

  updateIED(): void {
    let visual = 0;
    let total = 0;
    for (let link of this.linksArray.controls) {
      if (link.get('include').value) {
        total = (100 - total) * link.get('percentage').value/100 + total;
        if (link.get('visual').value) {
          visual = (100 - visual) * link.get('percentage').value/100 + visual;
        }
      }
    }
    this.visualIED = visual;
    this.effectiveIED = total;
  }

}
