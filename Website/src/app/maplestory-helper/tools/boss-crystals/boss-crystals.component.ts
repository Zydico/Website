import { NgClass } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberWithCommasPipe } from './number-with-commas.pipe';
import { UrsusPipe } from './ursus.pipe';
import { MapleTourPipe } from './maple-tour.pipe';

@Component({
  selector: 'app-boss-crystals',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, FormsModule, NumberWithCommasPipe, UrsusPipe, MapleTourPipe],
  providers: [NumberWithCommasPipe, UrsusPipe, MapleTourPipe],
  templateUrl: './boss-crystals.component.html',
  styleUrls: ['./boss-crystals.component.css', '../../maplestory-helper.component.css'],
})
export class BossCrystalsComponent implements OnInit {
  bosses = [
    {name: 'Von Leon (Hard)', meso: 12250000, url: 'Von Leon', daily: true, darken: true},
    {name: 'Arkarium (Normal)', meso: 12602500, url: 'Arkarium', daily: true, darken: true},
    {name: 'Magnus (Normal)', meso: 12960000, url: 'Magnus', daily: true, darken: true},
    {name: 'Papulatus (Normal)', meso: 13322500, url: 'Papulatus', daily: true, darken: true},
    {name: 'Mori Ranmaru (Hard)', meso: 13322500, url: 'Ranmaru', daily: true, darken: true},
    {name: 'Hilla (Hard)', meso: 56250000, preset: ['cra', 'akechi', 'nlomien', 'ctene'], url: 'Hilla'},
    {name: 'Pink Bean (Chaos)', meso: 64000000, preset: ['cra', 'akechi', 'nlomien', 'ctene'], darken: true, url: 'Pink Bean'},
    {name: 'Cygnus (Easy)', meso: 45562500, shared: ['Cygnus (Normal)'], url: 'Cygnus'},
    {name: 'Cygnus (Normal)', meso: 72250000, shared: ['Cygnus (Easy)'], preset: ['cra', 'akechi', 'nlomien', 'ctene'], url: 'Cygnus'},
    {name: 'Crimson Queen (Chaos)', meso: 81000000, preset: ['cra', 'akechi', 'nlomien', 'ctene'], darken: true, url: 'Crimson Queen'},
    {name: 'Von Bon (Chaos)', meso: 81000000, preset: ['cra', 'akechi', 'nlomien', 'ctene'], url: 'Von Bon'},
    {name: 'Pierre (Chaos)', meso: 81000000, preset: ['cra', 'akechi', 'nlomien', 'ctene'], darken: true, url: 'Pierre'},
    {name: 'Zakum (Chaos)', meso: 81000000, preset: ['cra', 'akechi', 'nlomien', 'ctene'], url: 'Zakum'},
    {name: 'Princess No', meso: 81000000, preset: ['cra', 'akechi', 'nlomien', 'ctene'], darken: true, url: 'Princess No'},
    {name: 'Magnus (Hard)', meso: 95062500, preset: ['cra', 'akechi', 'nlomien', 'ctene'], url: 'Magnus'},
    {name: 'Vellum (Chaos)', meso: 105062500, preset: ['cra', 'akechi', 'nlomien', 'ctene'], darken: true, url: 'Vellum'},
    {name: 'Papulatus (Chaos)', meso: 132250000, preset: ['akechi', 'nlomien', 'ctene'], url: 'Papulatus'},
    {name: 'Akechi Mitsuhide', meso: 144000000, preset: ['akechi', 'nlomien', 'ctene'], darken: true, url: 'Akechi'},
    {name: 'Lotus (Normal)', meso: 162562500, shared: ['Lotus (Hard)', 'Lotus (Extreme)'], preset: ['nlomien'], url: 'Lotus'},
    {name: 'Lotus (Hard)', meso: 370562500, shared: ['Lotus (Normal)', 'Lotus (Extreme)'], preset: ['ctene'], url: 'Lotus'},
    {name: 'Lotus (Extreme)', meso: 1075000000, shared: ['Lotus (Normal)', 'Lotus (Hard)'], url: 'Lotus'},
    {name: 'Damien (Normal)', meso: 169000000, shared: ['Damien (Hard)'], preset: ['nlomien'], darken: true, url: 'Damien'},
    {name: 'Damien (Hard)', meso: 351562500, shared: ['Damien (Normal)'], preset: ['ctene'], darken: true, url: 'Damien'},
    {name: 'Guardian Angel Slime (Normal)', meso: 171610000, shared: ['Guardian Angel Slime (Chaos)'], url: 'Slime'},
    {name: 'Guardian Angel Slime (Chaos)', meso: 451562500, shared: ['Guardian Angel Slime (Normal)'], preset: ['ctene'], url: 'Slime'},
    {name: 'Lucid (Easy)', meso: 175562500, shared: ['Lucid (Normal)', 'Lucid (Hard)'], darken: true, url: 'Lucid'},
    {name: 'Lucid (Normal)', meso: 203062500, shared: ['Lucid (Easy)', 'Lucid (Hard)'], darken: true, url: 'Lucid'},
    {name: 'Lucid (Hard)', meso: 400000000, shared: ['Lucid (Easy)', 'Lucid (Normal)'], preset: ['ctene'], darken: true, url: 'Lucid'},
    {name: 'Will (Easy)', meso: 191275000, shared: ['Will (Normal)', 'Will (Hard)'], url: 'Will'},
    {name: 'Will (Normal)', meso: 232562500, shared: ['Will (Easy)', 'Will (Hard)'], url: 'Will'},
    {name: 'Will (Hard)', meso: 441000000, shared: ['Will (Easy)', 'Will (Normal)'], preset: ['ctene'], url: 'Will'},
    {name: 'Gloom (Normal)', meso: 248062500, shared: ['Gloom (Chaos)'], darken: true, url: 'Gloom'},
    {name: 'Gloom (Chaos)', meso: 462250000, shared: ['Gloom (Normal)'], preset: ['ctene'], darken: true, url: 'Gloom'},
    {name: 'Darknell (Normal)', meso: 264062500, shared: ['Darknell (Hard)'], url: 'Darknell'},
    {name: 'Darknell (Hard)', meso: 484000000, shared: ['Darknell (Normal)'], preset: ['ctene'], url: 'Darknell'},
    {name: 'Verus Hilla (Normal)', meso: 447600000, shared: ['Verus Hilla (Hard)'], darken: true, url: 'VHilla'},
    {name: 'Verus Hilla (Hard)', meso: 552250000, shared: ['Verus Hilla (Normal)'], preset: ['ctene'], darken: true, url: 'VHilla'},
    {name: 'Chosen Seren (Normal)', meso: 668437500, shared: ['Chosen Seren (Hard)', 'Chosen Seren (Extreme)'], url: 'Seren'},
    {name: 'Chosen Seren (Hard)', meso: 756250000, shared: ['Chosen Seren (Normal)', 'Chosen Seren (Extreme)'], url: 'Seren'},
    {name: 'Chosen Seren (Extreme)', meso: 3025000000, shared: ['Chosen Seren (Normal)', 'Chosen Seren (Hard)'], url: 'Seren'},
    {name: 'Kalos the Guardian (Easy)', meso: 750000000, shared: ['Kalos the Guardian (Normal)', 'Kalos the Guardian (Chaos)', 'Kalos the Guardian (Extreme)'], darken: true, url: 'Kalos'},
    {name: 'Kalos the Guardian (Normal)', meso: 1000000000, shared: ['Kalos the Guardian (Easy)', 'Kalos the Guardian (Chaos)', 'Kalos the Guardian (Extreme)'], darken: true, url: 'Kalos'},
    {name: 'Kalos the Guardian (Chaos)', meso: 2000000000, shared: ['Kalos the Guardian (Easy)', 'Kalos the Guardian (Normal)', 'Kalos the Guardian (Extreme)'], darken: true, url: 'Kalos'},
    {name: 'Kalos the Guardian (Extreme)', meso: 4000000000, shared: ['Kalos the Guardian (Easy)', 'Kalos the Guardian (Normal)', 'Kalos the Guardian (Chaos)'], darken: true, url: 'Kalos'},
    {name: 'Kaling (Easy)', meso: 825000000, shared: ['Kaling (Normal)', 'Kaling (Hard)', 'Kaling (Extreme)'], url: 'Kaling'},
    {name: 'Kaling (Normal)', meso: 1150000000, shared: ['Kaling (Easy)', 'Kaling (Hard)', 'Kaling (Extreme)'], url: 'Kaling'},
    {name: 'Kaling (Hard)', meso: 2000000000, shared: ['Kaling (Easy)', 'Kaling (Normal)', 'Kaling (Extreme)'], url: 'Kaling'},
    {name: 'Kaling (Extreme)', meso: 4600000000, shared: ['Kaling (Easy)', 'Kaling (Normal)', 'Kaling (Hard)'], url: 'Kaling'}
  ]

  bossForm: FormGroup = this.formBuilder.group({
    server: this.formBuilder.control<string>('reboot'),
    columns: this.formBuilder.array<FormGroup>([])
  });
  extraForm: FormGroup = this.formBuilder.group({
    ursus: this.formBuilder.control<boolean>(false),
    maple_tour: this.formBuilder.control<boolean>(false),
    highest_level: this.formBuilder.control<number>(280),
  }); 
  totalIncome: number = 0;
  crystals: number = 0;

  constructor(private readonly formBuilder: FormBuilder, private cdr: ChangeDetectorRef, private numberWithCommas: NumberWithCommasPipe, private ursusPipe: UrsusPipe, private mapleTourPipe: MapleTourPipe) {
  }

  ngOnInit() {
    let server: string = localStorage.getItem('boss-crystals-server');
    if (server) { // If local storage exists (second time user)
      // fill server
      this.bossForm.get('server').setValue(server);
      // fill columns
      let columns = JSON.parse(localStorage.getItem('boss-crystals-columns'));
      
      for (let character of columns) {
        setTimeout(() => {
          let column: FormGroup = this.formBuilder.group({
            character: this.formBuilder.control<string>(character.character),
            character_bosses: this.formBuilder.array([])
          })
          let character_bosses = character.character_bosses;
          let copy_character_bosses: FormArray = column.get('character_bosses') as FormArray;
          // adding new rows that they haven't seen before (new updates)
          for (let row of this.bosses) {
            let result: any = character_bosses.find(boss => boss.name === row.name);
            let index: number = 0;
            index = 0;
            if (!result) {
              character_bosses.splice(index, 0, {
                name: row.name,
                checked: false,
                party_size: 1,
                daily: row.daily,
                weekly_clears: 1,
              });
            }
            index++;
          }
          // looping through and updating all rows
          for (let row of character_bosses) {
            let copy_row = this.formBuilder.group({
              name: this.formBuilder.control<string>(row.name),
              checked: this.formBuilder.control<boolean>(row.checked),
              party_size: this.formBuilder.control<number>(row.party_size),
              daily: this.formBuilder.control<boolean>(row.daily ? row.daily : false),
              weekly_clears: this.formBuilder.control<number>(row.weekly_clears ? row.weekly_clears : 1)
            })
            let result: any = this.bosses.find(boss => boss.name === row.name);
            if (result.shared) {
              this.addCheckboxCheck(copy_character_bosses, copy_row, result.shared);
            }
            copy_character_bosses.push(copy_row);
          }

          for (let row of copy_character_bosses.controls) {
            let result: any = this.bosses.find(boss => boss.name === row.value.name);
            if (result.shared && row.value.checked) {
              // manually disabling shared bosses
              this.triggerCheckboxCheck(copy_character_bosses, result.shared, row.value.checked);
            }
          }
          this.columns.push(column);       
        }, 0);
      }

      // set extra form
      this.extraForm.get('ursus').setValue(localStorage.getItem('boss-crystals-ursus') === 'true');
      this.extraForm.get('maple_tour').setValue(localStorage.getItem('boss-crystals-maple-tour') === 'true');
      this.extraForm.get('highest_level').setValue(localStorage.getItem('boss-crystals-highest-level'));
    } else {
      // if no local storage, add empty column
      this.addColumn();
    }
    this.bossForm.valueChanges.subscribe(() => {
      this.updateStorage();
    })
    this.extraForm.valueChanges.subscribe(() => {
      this.updateStorage();
    })
    this.calculateTotalIncome();
  }

  clearData(): void {
    localStorage.removeItem('boss-crystals-server');
    localStorage.removeItem('boss-crystals-columns');
    localStorage.removeItem('boss-crystals-ursus');
    localStorage.removeItem('boss-crystals-maple-tour');
    localStorage.removeItem('boss-crystals-highest-level');
    location.reload(); // refresh page
  }

  // returns whether or not the boss is a dark cell in the table
  isDarkCell(name: string): boolean {
    let result: any = this.bosses.find(boss => boss.name === name);
    if (result.darken) { // check if boss have darken property
      return true;
    } else {
      return false;
    }
  }

  updateStorage(): void {
    let bossForm = this.bossForm;
    let extraForm = this.extraForm;
    // saving server setting
    localStorage.setItem('boss-crystals-server', bossForm.get('server').value);

    // saving table of characters
    localStorage.setItem('boss-crystals-columns', JSON.stringify(bossForm.get('columns').value));

    // saving extra form
    localStorage.setItem('boss-crystals-ursus', extraForm.get('ursus').value);
    localStorage.setItem('boss-crystals-maple-tour', extraForm.get('maple_tour').value);
    localStorage.setItem('boss-crystals-highest-level', extraForm.get('highest_level').value);
    this.calculateTotalIncome();
  }

  get columns(): FormArray<FormGroup> {
    return (this.bossForm.get('columns') as FormArray);
  }

  clone(index: number) {
    let reference_column = this.columns.at(index);
    let copy_column: FormGroup = this.formBuilder.group({
      character: this.formBuilder.control<string>(reference_column.get('character').value),
      character_bosses: this.formBuilder.array<FormGroup>([])
    })
    let reference_character_bosses: FormArray<FormGroup> = reference_column.get('character_bosses') as FormArray;
    let copy_character_bosses: FormArray<FormGroup> = copy_column.get('character_bosses') as FormArray;
    for (let row of reference_character_bosses.controls) {
      let copy_row: FormGroup = this.formBuilder.group({
        name: this.formBuilder.control<string>(row.value.name),
        checked: this.formBuilder.control<boolean>(row.value.checked),
        party_size: this.formBuilder.control<number>(row.value.party_size),
        daily: this.formBuilder.control<boolean>(row.value.daily),
        weekly_clears: this.formBuilder.control<number>(row.value.weekly_clears)
      })
      let result: any = this.bosses.find(boss => boss.name === row.value.name);
      if (result.shared) {
        this.addCheckboxCheck(copy_character_bosses, copy_row, result.shared);
      }
      copy_character_bosses.push(copy_row);
    }
    for (let row of copy_character_bosses.controls) {
      let result: any = this.bosses.find(boss => boss.name === row.value.name);
      if (result.shared && row.value.checked) {
        this.triggerCheckboxCheck(copy_character_bosses, result.shared, row.value.checked);
      }
    }
    this.columns.push(copy_column);
  }
  
  // delete table column and specific index
  delete(index: number) {
    this.columns.removeAt(index);
    this.cdr.detectChanges();
  }

  // adds an empty column
  addColumn(preset: string = '') {
    let column: FormGroup = this.formBuilder.group({
      character: this.formBuilder.control<string>(''),
      character_bosses: this.formBuilder.array<FormGroup>([])
    });
    let character_bosses: FormArray<FormGroup> = column.get('character_bosses') as FormArray;
     
    for (let boss of this.bosses) {
      let row = this.formBuilder.group({
        name: this.formBuilder.control<string>(boss.name),
        checked: this.formBuilder.control<boolean>(boss.preset && boss.preset.includes(preset)),
        party_size: this.formBuilder.control<number>(1),
        daily: this.formBuilder.control<boolean>(boss.daily),
        weekly_clears: this.formBuilder.control<number>(1),
      });
      if (boss.shared) {
        this.addCheckboxCheck(character_bosses, row, boss.shared);
      }
      character_bosses.push(row);
    }
    for (let row of character_bosses.controls) {
      let result: any = this.bosses.find(boss => boss.name === row.value.name);
      if (result.shared && row.value.checked) {
        this.triggerCheckboxCheck(character_bosses, result.shared, row.value.checked);
      }
    }
    this.columns.push(column);
  }

  addCheckboxCheck(character_bosses: FormArray<FormGroup>, row: any, shared: Array<any>) {
    row.get('checked').valueChanges.subscribe(value => {
      this.triggerCheckboxCheck(character_bosses, shared, value);
    })
  }

  triggerCheckboxCheck(character_bosses: FormArray<FormGroup>, shared: Array<any>, value: boolean) {
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
        let meso = result.meso;
        if (row.value.weekly_clears) {
          meso = meso * row.value.weekly_clears;
          crystals = crystals + row.value.weekly_clears;
        } else {
          crystals++;
        }
        total += (this.bossForm.get('server').value == 'reboot' ? meso : meso/5) / row.value.party_size;
      }
    }
    return this.numberWithCommas.transform(Math.floor(total)) + ' Mesos [ Crystals: ' + crystals + ' ]';
  }

  calculateTotalIncome(): void {
    let total = 0;
    let crystals = 0;
    for (let i = 0; i < this.columns.length; i++) {
      let column = this.columns.at(i);
      let character_bosses = column.get('character_bosses') as FormArray;
      for (let row of character_bosses.controls) {
        if (row.value.checked) {
          let result = this.bosses.find(boss => boss.name === row.value.name);
          let meso = result.meso;
          if (row.value.daily) {
            meso = meso * row.value.weekly_clears;
          }
          if (row.value.weekly_clears) {
            crystals = crystals + row.value.weekly_clears;
          } else {
            crystals++;
          }
          total += (this.bossForm.get('server').value == 'reboot' ? meso : meso/5) / row.value.party_size;
        }
      }
    }
    if (this.extraForm.get('ursus').value && this.extraForm.get('highest_level').value) {
      total += this.ursusPipe.transform(this.extraForm.get('highest_level').value, this.bossForm.get('server').value);
    }
    if (this.extraForm.get('maple_tour').value) {
      total += this.mapleTourPipe.transform(this.bossForm.get('server').value);
    }
    this.crystals = crystals;
    this.totalIncome = Math.floor(total);
  }

  // Returns the mesos for a boss divided by the party size
  getSplitMesos(boss) {
    let result = this.bosses.find(found => found.name === boss.value.name);
    let meso = result.meso;
    if (boss.value.daily) {
      meso = meso * boss.value.weekly_clears;
    }
    return this.numberWithCommas.transform(Math.floor((this.bossForm.get('server').value == 'reboot' ? meso : meso/5) / boss.value.party_size));
  }

  // Limits the value between two numbers
  limitValue(event: Event, min: number, max: number, default_value: number) {
    let target = event.target as HTMLInputElement;
    let value = parseInt(target.value);
    if (!value) {
      target.value = default_value.toString();
    }
    if (value < min) {
      target.value = min.toString();
    }
    if (value > max) {
      target.value = max.toString();
    }
  }
  
}
