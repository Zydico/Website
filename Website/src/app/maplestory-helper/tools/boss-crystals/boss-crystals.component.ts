import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-boss-crystals',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './boss-crystals.component.html',
  styleUrl: './boss-crystals.component.css'
})
export class BossCrystalsComponent implements OnInit {
  bosses = [
    {name: 'Hilla', meso: 56250000},
    {name: 'CPB', meso: 64000000},
    {name: 'NCyg', meso: 72250000},
    {name: 'CQueen', meso: 81000000},
    {name: 'CVonBon', meso: 81000000},
    {name: 'CPierre', meso: 81000000},
    {name: 'CZak', meso: 81000000},
    {name: 'PNo', meso: 81000000},
    {name: 'HMag', meso: 95062500},
    {name: 'CVel', meso: 105062500},
    {name: 'CPap', meso: 132250000},
    {name: 'Akechi', meso: 144000000},
    {name: 'NLotus', meso: 162562500, shared: ['HLotus']},
    {name: 'NDamien', meso: 169000000, shared: ['HDamien']},
    {name: 'NSlime', meso: 171610000, shared: ['CSlime']},
    {name: 'ELucid', meso: 175562500, shared: ['NLucid', 'HLucid']},
    {name: 'NLucid', meso: 203062500, shared: ['ELucid', 'HLucid']},
    {name: 'NWill', meso: 232562500, shared: ['HWill']},
    {name: 'NGloom', meso: 248062500, shared: ['CGloom']},
    {name: 'NDarknell', meso: 264062500, shared: ['HDarknell']},
    {name: 'HDamien', meso: 351562500, shared: ['NDamien']},
    {name: 'HLotus', meso: 370562500, shared: ['HLotus']},
    {name: 'HLucid', meso: 400000000, shared: ['ELucid', 'NLucid']},
    {name: 'HWill', meso: 441000000, shared: ['NWill']},
    {name: 'NVHilla', meso: 447600000, shared: ['HVHilla']},
    {name: 'CSlime', meso: 451562500, shared: ['NSlime']},
    {name: 'CGloom', meso: 462250000, shared: ['NGloom']},
    {name: 'HDarknell', meso: 484000000, shared: ['NDarknell']},
    {name: 'HVHilla', meso: 552250000, shared: ['NVHilla']},
    {name: 'NSeren', meso: 668437500, shared: ['HSeren', 'XSeren']},
    {name: 'EKalos', meso: 750000000, shared: ['NKalos', 'CKalos', 'XKalos']},
    {name: 'HSeren', meso: 756250000, shared: ['NSeren', 'XSeren']},
    {name: 'EKaling', meso: 825000000, shared: ['NKaling', 'HKaling', 'XKaling']},
    {name: 'NKalos', meso: 1000000000, shared: ['EKalos', 'CKalos', 'XKalos']},
    {name: 'NKaling', meso: 1150000000, shared: ['EKaling, HKaling', 'XKaling']},
    {name: 'CKalos', meso: 2000000000, shared: ['EKalos', 'NKalos', 'XKalos']},
    {name: 'HKaling', meso: 2000000000, shared: ['EKaling', 'NKaling', 'XKaling']},
    {name: 'XSeren', meso: 3025000000, shared: ['NSeren', 'HSeren']},
    {name: 'XKalos', meso: 4000000000, shared: ['EKalos', 'NKalos', 'CKalos']},
    {name: 'XKaling', meso: 4600000000, shared: ['EKaling', 'NKaling', 'HKaling']},
  ]

  bossForm!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit() {
    this.bossForm = this.formBuilder.group({
      columns: this.formBuilder.array([])
    });
    this.addColumn();
  }

  get columns(): FormArray {
    return (this.bossForm.get('columns') as FormArray);
  }

  clone(index: number) {
    let reference_column = this.columns.at(index);
    this.columns.push(this.formBuilder.group(reference_column.getRawValue()));
  }

  addColumn() {
    let column = this.formBuilder.group({
      character: this.formBuilder.control(''),
      character_bosses: this.formBuilder.array([])
    });
    let character_bosses = column.get('character_bosses') as FormArray;
    for (let boss of this.bosses) {
      let row = this.formBuilder.group({
        name: this.formBuilder.control(boss.name),
        checked: this.formBuilder.control(false),
        party_size: this.formBuilder.control(1)
      });
      character_bosses.push(row);
    }
    this.columns.push(column);
  }

  deleteColumn() {
    this.columns.removeAt(this.columns.length);
  }

  // Method that converts a number to one separated with commas
  numberWithCommas(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  partyFix(event: Event) {
    let target = event.target as HTMLInputElement;
    let value = parseInt(target.value);
    if (value < 1) {
      target.value = '1';
    }
    if (value > 6) {
      target.value = '6';
    }
  }
  
}
