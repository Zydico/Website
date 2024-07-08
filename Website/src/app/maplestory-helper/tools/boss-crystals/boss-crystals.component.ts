import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-boss-crystals',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, NgClass],
  templateUrl: './boss-crystals.component.html',
  styleUrl: './boss-crystals.component.css'
})
export class BossCrystalsComponent implements OnInit {
  bosses = [
    {name: 'Hilla', meso: 56250000, preset: ['cra', 'akechi', 'nlomien', 'ctene']},
    {name: 'CPB', meso: 64000000, preset: ['cra', 'akechi', 'nlomien', 'ctene'], darken: true},
    {name: 'ECyg', meso: 45562500, shared: ['NCyg']},
    {name: 'NCyg', meso: 72250000, shared: ['ECyg'], preset: ['cra', 'akechi', 'nlomien', 'ctene']},
    {name: 'CQueen', meso: 81000000, preset: ['cra', 'akechi', 'nlomien', 'ctene'], darken: true},
    {name: 'CVonBon', meso: 81000000, preset: ['cra', 'akechi', 'nlomien', 'ctene']},
    {name: 'CPierre', meso: 81000000, preset: ['cra', 'akechi', 'nlomien', 'ctene'], darken: true},
    {name: 'CZak', meso: 81000000, preset: ['cra', 'akechi', 'nlomien', 'ctene']},
    {name: 'PNo', meso: 81000000, preset: ['cra', 'akechi', 'nlomien', 'ctene'], darken: true},
    {name: 'HMag', meso: 95062500, preset: ['cra', 'akechi', 'nlomien', 'ctene']},
    {name: 'CVel', meso: 105062500, preset: ['cra', 'akechi', 'nlomien', 'ctene'], darken: true},
    {name: 'CPap', meso: 132250000, preset: ['akechi', 'nlomien', 'ctene']},
    {name: 'Akechi', meso: 144000000, preset: ['akechi', 'nlomien', 'ctene'], darken: true},
    {name: 'NLotus', meso: 162562500, shared: ['HLotus'], preset: ['nlomien']},
    {name: 'HLotus', meso: 370562500, shared: ['NLotus'], preset: ['ctene']},
    {name: 'NDamien', meso: 169000000, shared: ['HDamien'], preset: ['nlomien'], darken: true},
    {name: 'HDamien', meso: 351562500, shared: ['NDamien'], preset: ['ctene'], darken: true},
    {name: 'NSlime', meso: 171610000, shared: ['CSlime']},
    {name: 'CSlime', meso: 451562500, shared: ['NSlime'], preset: ['ctene']},
    {name: 'ELucid', meso: 175562500, shared: ['NLucid', 'HLucid'], darken: true},
    {name: 'NLucid', meso: 203062500, shared: ['ELucid', 'HLucid'], darken: true},
    {name: 'HLucid', meso: 400000000, shared: ['ELucid', 'NLucid'], preset: ['ctene'], darken: true},
    {name: 'EWill', meso: 191275000, shared: ['NWill', 'HWill']},
    {name: 'NWill', meso: 232562500, shared: ['EWill', 'HWill']},
    {name: 'HWill', meso: 441000000, shared: ['EWill', 'NWill'], preset: ['ctene']},
    {name: 'NGloom', meso: 248062500, shared: ['CGloom'], darken: true},
    {name: 'CGloom', meso: 462250000, shared: ['NGloom'], preset: ['ctene'], darken: true},
    {name: 'NDarknell', meso: 264062500, shared: ['HDarknell']},
    {name: 'HDarknell', meso: 484000000, shared: ['NDarknell'], preset: ['ctene']},
    {name: 'NVHilla', meso: 447600000, shared: ['HVHilla'], darken: true},
    {name: 'HVHilla', meso: 552250000, shared: ['NVHilla'], preset: ['ctene'], darken: true},
    {name: 'NSeren', meso: 668437500, shared: ['HSeren', 'XSeren']},
    {name: 'HSeren', meso: 756250000, shared: ['NSeren', 'XSeren']},
    {name: 'XSeren', meso: 3025000000, shared: ['NSeren', 'HSeren']},
    {name: 'EKalos', meso: 750000000, shared: ['NKalos', 'CKalos', 'XKalos'], darken: true},
    {name: 'NKalos', meso: 1000000000, shared: ['EKalos', 'CKalos', 'XKalos'], darken: true},
    {name: 'CKalos', meso: 2000000000, shared: ['EKalos', 'NKalos', 'XKalos'], darken: true},
    {name: 'XKalos', meso: 4000000000, shared: ['EKalos', 'NKalos', 'CKalos'], darken: true},
    {name: 'EKaling', meso: 825000000, shared: ['NKaling', 'HKaling', 'XKaling']},
    {name: 'NKaling', meso: 1150000000, shared: ['EKaling, HKaling', 'XKaling']},
    {name: 'HKaling', meso: 2000000000, shared: ['EKaling', 'NKaling', 'XKaling']},
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
    let copy_column = this.formBuilder.group({
      character: this.formBuilder.control(reference_column.get('character').value),
      character_bosses: this.formBuilder.array([])
    })
    let reference_character_bosses = reference_column.get('character_bosses') as FormArray;
    let copy_character_bosses = copy_column.get('character_bosses') as FormArray;
    for (let row of reference_character_bosses.controls) {
      let copy_row = this.formBuilder.group({
        name: this.formBuilder.control(row.value.name),
        checked: this.formBuilder.control(row.value.checked),
        party_size: this.formBuilder.control(row.value.party_size),
        darken: this.formBuilder.control(row.value.darken)
      })
      let result = this.bosses.find(boss => boss.name === row.value.name);
      if (result.shared) {
        this.addCheckboxCheck(copy_character_bosses, copy_row, result.shared);
      }
      copy_character_bosses.push(copy_row);
    }
    for (let row of copy_character_bosses.controls) {
      let result = this.bosses.find(boss => boss.name === row.value.name);
      if (result.shared && row.value.checked) {
        this.triggerCheckboxCheck(copy_character_bosses, result.shared, row.value.checked);
      }
    }
    this.columns.push(copy_column);
  }
  
  delete(index: number) {
    this.columns.removeAt(index);
  }

  addColumn(preset: string = '') {
    let column = this.formBuilder.group({
      character: this.formBuilder.control(''),
      character_bosses: this.formBuilder.array([])
    });
    let character_bosses = column.get('character_bosses') as FormArray;
     
    for (let boss of this.bosses) {
      let row = this.formBuilder.group({
        name: this.formBuilder.control(boss.name),
        checked: this.formBuilder.control(boss.preset && boss.preset.includes(preset)),
        party_size: this.formBuilder.control(1),
        darken: this.formBuilder.control(boss.darken)
      });
      if (boss.shared) {
        this.addCheckboxCheck(character_bosses, row, boss.shared);
      }
      character_bosses.push(row);
    }
    for (let row of character_bosses.controls) {
      let result = this.bosses.find(boss => boss.name === row.value.name);
      if (result.shared && row.value.checked) {
        this.triggerCheckboxCheck(character_bosses, result.shared, row.value.checked);
      }
    }
    this.columns.push(column);
  }

  addCheckboxCheck(character_bosses, row, shared) {
    row.get('checked').valueChanges.subscribe(value => {
      this.triggerCheckboxCheck(character_bosses, shared, value);
    })
  }

  triggerCheckboxCheck(character_bosses, shared, value) {
    if (value) {
      for (let boss of character_bosses.controls) {
        if (shared.includes(boss.value.name)) {
          boss.controls['checked'].disable({emitEvent: false});
        }
      }
    } else {
      for (let boss of character_bosses.controls) {
        if (shared.includes(boss.value.name)) {
          boss.controls['checked'].enable({emitEvent: false});
        }
      }
    }
  }

  calculateIncome(index: number) {
    let column = this.columns.at(index);
    let character_bosses = column.get('character_bosses') as FormArray;
    let total = 0;
    let crystals = 0;
    for (let row of character_bosses.controls) {
      if (row.value.checked) {
        let result = this.bosses.find(boss => boss.name === row.value.name);
        total += result.meso / row.value.party_size;
        crystals++;
      }
    }
    return this.numberWithCommas(Math.floor(total)) + ' [ Crystals: ' + crystals + ' ]';
  }

  calculateTotalIncome() {
    let total = 0;
    let crystals = 0;
    for (let i = 0; i < this.columns.length; i++) {
      let column = this.columns.at(i);
      let character_bosses = column.get('character_bosses') as FormArray;
      for (let row of character_bosses.controls) {
        if (row.value.checked) {
          let result = this.bosses.find(boss => boss.name === row.value.name);
          total += result.meso / row.value.party_size;
          crystals++;
        }
      }
    }
    return this.numberWithCommas(Math.floor(total)) + ' [ Crystals: ' + crystals + ' / 180 ]';
  }

  // Returns the mesos for a boss divided by the party size
  getSplitMesos(boss) {
    let result = this.bosses.find(found => found.name === boss.value.name);
    return this.numberWithCommas(Math.floor(result.meso / boss.value.party_size));
  }

  // Method that converts a number to one separated with commas
  numberWithCommas(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // Limits party size to between 1 and 6
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
