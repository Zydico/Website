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
    {name: 'Hilla (Hard)', meso: 56250000, preset: ['cra', 'akechi', 'nlomien'], url: 'Hilla'},
    {name: 'Pink Bean (Chaos)', meso: 64000000, preset: ['cra', 'akechi', 'nlomien'], darken: true, url: 'Pink Bean'},
    {name: 'Cygnus (Easy)', meso: 45562500, shared: ['Cygnus (Normal)'], url: 'Cygnus'},
    {name: 'Cygnus (Normal)', meso: 72250000, shared: ['Cygnus (Easy)'], preset: ['cra', 'akechi', 'nlomien'], url: 'Cygnus'},
    {name: 'Crimson Queen (Chaos)', meso: 81000000, preset: ['cra', 'akechi', 'nlomien'], darken: true, url: 'Crimson Queen'},
    {name: 'Von Bon (Chaos)', meso: 81000000, preset: ['cra', 'akechi', 'nlomien'], url: 'Von Bon'},
    {name: 'Pierre (Chaos)', meso: 81000000, preset: ['cra', 'akechi', 'nlomien'], darken: true, url: 'Pierre'},
    {name: 'Zakum (Chaos)', meso: 81000000, preset: ['cra', 'akechi', 'nlomien', 'ctene'], url: 'Zakum'},
    {name: 'Princess No', meso: 81000000, preset: ['cra', 'akechi', 'nlomien', 'ctene'], darken: true, url: 'Princess No'},
    {name: 'Magnus (Hard)', meso: 95062500, preset: ['cra', 'akechi', 'nlomien', 'ctene'], url: 'Magnus'},
    {name: 'Vellum (Chaos)', meso: 105062500, preset: ['cra', 'akechi', 'nlomien', 'ctene'], darken: true, url: 'Vellum'},
    {name: 'Papulatus (Chaos)', meso: 132250000, preset: ['akechi', 'nlomien', 'ctene'], url: 'Papulatus'},
    {name: 'Akechi Mitsuhide', meso: 144000000, preset: ['akechi', 'nlomien', 'ctene'], darken: true, url: 'Akechi'},
    {name: 'Lotus (Normal)', meso: 162562500, shared: ['Lotus (Hard)', 'Lotus (Extreme)'], preset: ['nlomien'], url: 'Lotus'},
    {name: 'Lotus (Hard)', meso: 444675000, shared: ['Lotus (Normal)', 'Lotus (Extreme)'], preset: ['ctene'], url: 'Lotus'},
    {name: 'Lotus (Extreme)', meso: 1397500000, shared: ['Lotus (Normal)', 'Lotus (Hard)'], url: 'Lotus'},
    {name: 'Damien (Normal)', meso: 169000000, shared: ['Damien (Hard)'], preset: ['nlomien'], darken: true, url: 'Damien'},
    {name: 'Damien (Hard)', meso: 421875000, shared: ['Damien (Normal)'], preset: ['ctene'], darken: true, url: 'Damien'},
    {name: 'Guardian Angel Slime (Normal)', meso: 231673500, shared: ['Guardian Angel Slime (Chaos)'], url: 'Slime'},
    {name: 'Guardian Angel Slime (Chaos)', meso: 600578125, shared: ['Guardian Angel Slime (Normal)'], preset: ['ctene'], url: 'Slime'},
    {name: 'Lucid (Easy)', meso: 237009375, shared: ['Lucid (Normal)', 'Lucid (Hard)'], darken: true, url: 'Lucid'},
    {name: 'Lucid (Normal)', meso: 253828125, shared: ['Lucid (Easy)', 'Lucid (Hard)'], darken: true, url: 'Lucid'},
    {name: 'Lucid (Hard)', meso: 504000000, shared: ['Lucid (Easy)', 'Lucid (Normal)'], preset: ['ctene'], darken: true, url: 'Lucid'},
    {name: 'Will (Easy)', meso: 246744750, shared: ['Will (Normal)', 'Will (Hard)'], url: 'Will'},
    {name: 'Will (Normal)', meso: 279075000, shared: ['Will (Easy)', 'Will (Hard)'], url: 'Will'},
    {name: 'Will (Hard)', meso: 621810000, shared: ['Will (Easy)', 'Will (Normal)'], preset: ['ctene'], url: 'Will'},
    {name: 'Gloom (Normal)', meso: 297675000, shared: ['Gloom (Chaos)'], darken: true, url: 'Gloom'},
    {name: 'Gloom (Chaos)', meso: 563945000, shared: ['Gloom (Normal)'], preset: ['ctene'], darken: true, url: 'Gloom'},
    {name: 'Darknell (Normal)', meso: 316875000, shared: ['Darknell (Hard)'], url: 'Darknell'},
    {name: 'Darknell (Hard)', meso: 667920000, shared: ['Darknell (Normal)'], preset: ['ctene'], url: 'Darknell'},
    {name: 'Verus Hilla (Normal)', meso: 581880000, shared: ['Verus Hilla (Hard)'], darken: true, url: 'VHilla'},
    {name: 'Verus Hilla (Hard)', meso: 762105000, shared: ['Verus Hilla (Normal)'], preset: ['ctene'], darken: true, url: 'VHilla'},
    {name: 'Chosen Seren (Normal)', meso: 889021875, shared: ['Chosen Seren (Hard)', 'Chosen Seren (Extreme)'], url: 'Seren'},
    {name: 'Chosen Seren (Hard)', meso: 1096562500, shared: ['Chosen Seren (Normal)', 'Chosen Seren (Extreme)'], url: 'Seren'},
    {name: 'Chosen Seren (Extreme)', meso: 4235000000, shared: ['Chosen Seren (Normal)', 'Chosen Seren (Hard)'], url: 'Seren'},
    {name: 'Kalos the Guardian (Easy)', meso: 937500000, shared: ['Kalos the Guardian (Normal)', 'Kalos the Guardian (Chaos)', 'Kalos the Guardian (Extreme)'], darken: true, url: 'Kalos'},
    {name: 'Kalos the Guardian (Normal)', meso: 1300000000, shared: ['Kalos the Guardian (Easy)', 'Kalos the Guardian (Chaos)', 'Kalos the Guardian (Extreme)'], darken: true, url: 'Kalos'},
    {name: 'Kalos the Guardian (Chaos)', meso: 2600000000, shared: ['Kalos the Guardian (Easy)', 'Kalos the Guardian (Normal)', 'Kalos the Guardian (Extreme)'], darken: true, url: 'Kalos'},
    {name: 'Kalos the Guardian (Extreme)', meso: 5200000000, shared: ['Kalos the Guardian (Easy)', 'Kalos the Guardian (Normal)', 'Kalos the Guardian (Chaos)'], darken: true, url: 'Kalos'},
    {name: 'Kaling (Easy)', meso: 1031250000, shared: ['Kaling (Normal)', 'Kaling (Hard)', 'Kaling (Extreme)'], url: 'Kaling'},
    {name: 'Kaling (Normal)', meso: 1506500000, shared: ['Kaling (Easy)', 'Kaling (Hard)', 'Kaling (Extreme)'], url: 'Kaling'},
    {name: 'Kaling (Hard)', meso: 2990000000, shared: ['Kaling (Easy)', 'Kaling (Normal)', 'Kaling (Extreme)'], url: 'Kaling'},
    {name: 'Kaling (Extreme)', meso: 6026000000, shared: ['Kaling (Easy)', 'Kaling (Normal)', 'Kaling (Hard)'], url: 'Kaling'},
    {name: 'Limbo (Normal)', meso: 2100000000, shared: ['Limbo (Hard)'], url: 'Limbo', darken: true},
    {name: 'Limbo (Hard)', meso: 3745000000, shared: ['Limbo (Normal)'], url: 'Limbo', darken: true},
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
          for (let boss of this.bosses) {
            let row = this.formBuilder.group({
              name: this.formBuilder.control<string>(boss.name),
              checked: this.formBuilder.control<boolean>(boss.preset && boss.preset.includes('')),
              party_size: this.formBuilder.control<number>(1),
              daily: this.formBuilder.control<boolean>(boss.daily),
              weekly_clears: this.formBuilder.control<number>(1),
            });

            let result: any = character_bosses.find(foundBoss => foundBoss.name === boss.name);
            if (result) {
              row.get('name').setValue(result.name);
              row.get('checked').setValue(result.checked);
              row.get('party_size').setValue(result.party_size);
              row.get('daily').setValue(result.daily);
              row.get('weekly_clears').setValue(result.weekly_clears);
            }
            
            if (boss.shared) {
              this.addCheckboxCheck(copy_character_bosses, row, boss.shared);
            }
            copy_character_bosses.push(row);
          }

          for (let row of copy_character_bosses.controls) {
            let result: any = this.bosses.find(boss => boss.name === row.value.name);
            if (result.shared && row.value.checked) {
              // manually disabling shared bosses
              this.triggerCheckboxCheck(copy_character_bosses, result.shared, row.value.checked);
            }
          }
          this.columns.push(column);      

          // Final failsafe check
          let first_column = this.columns.at(0);
          let first_character_bosses: FormArray<FormGroup> = first_column.get('character_bosses') as FormArray;
          if (first_character_bosses.controls) {
            let match1 = (first_character_bosses.controls[0].value.name == this.bosses[0].name);
            let match2 = (first_character_bosses.controls[15].value.name == this.bosses[15].name);
            let match3 = (first_character_bosses.controls[first_character_bosses.controls.length-1].value.name == this.bosses[this.bosses.length-1].name);
            let pass = match1 && match2 && match3;
            if (!pass) {
              this.clearData();
            }
          }
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
  
  // 0 = left, 1 = right
  move(index: number, direction: number) {
    if (direction == 0 && index > 0) {
      let reference_column = this.columns.at(index-1);
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
      this.columns.insert(index+1, copy_column);
      this.delete(index-1);
    } else if (direction == 1 && index < this.columns.length-1) {
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
      this.delete(index);
      this.columns.insert(index+1, copy_column);
    }
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
    this.columns.insert(index, copy_column);
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

  replaceMin(list: number[], newValue: number) {
    let minimum = 0;
    let minimumIndex = 0;
    for (let i = 0; i < list.length; i++) {
      if (i == 0) {
        minimum = list[i];
        minimumIndex = 0;
      } else {
        if (list[i] < minimum) {
          minimum = list[i];
          minimumIndex = i;
        }
      }
    }
    if (newValue > minimum) {
      list[minimumIndex] = newValue;
    }
    return list;
  }

  calculateIncome(index: number) {
    let column = this.columns.at(index);
    let character_bosses = column.get('character_bosses') as FormArray;
    let total = 0;
    let weekly_bosses = [];
    let daily_crystals = 0;
    for (let row of character_bosses.controls) {
      if (row.value.checked) {
        let result = this.bosses.find(boss => boss.name === row.value.name);
        let meso = result.meso;
        if (row.value.daily) {
          meso = meso * row.value.weekly_clears;
          daily_crystals = daily_crystals + row.value.weekly_clears;
          total += (this.bossForm.get('server').value == 'reboot' ? meso : meso/5);
        } else {
          weekly_bosses.push(meso / row.value.party_size);
        }
      }
    }
    let filtered_list = [];
    for (let i = 0; i < weekly_bosses.length; i++) {
      if (filtered_list.length < 14) {
        filtered_list.push(weekly_bosses[i]);
      } else {
        filtered_list = this.replaceMin(filtered_list, weekly_bosses[i]);
      }
    }
    for (let i = 0; i < filtered_list.length; i++) {
      total += (this.bossForm.get('server').value == 'reboot' ? filtered_list[i] : filtered_list[i]/5);
    }
    return this.numberWithCommas.transform(Math.floor(total)) + ' Mesos [ Crystals: ' + (daily_crystals + filtered_list.length) + ' ]';
  }

  calculateTotalIncome(): void {
    let total = 0;
    let crystals = 0;
    for (let i = 0; i < this.columns.length; i++) {
      let column = this.columns.at(i);
      let character_bosses = column.get('character_bosses') as FormArray;
      let weekly_bosses = [];
      for (let row of character_bosses.controls) {
        if (row.value.checked) {
          let result = this.bosses.find(boss => boss.name === row.value.name);
          let meso = result.meso;
          if (row.value.daily) {
            meso = meso * row.value.weekly_clears;
            crystals = crystals + row.value.weekly_clears;
            total += (this.bossForm.get('server').value == 'reboot' ? meso : meso/5);
          } else {
            weekly_bosses.push(meso / row.value.party_size);
          }
        }
      }
      let filtered_list = [];
      for (let i = 0; i < weekly_bosses.length; i++) {
        if (filtered_list.length < 14) {
          filtered_list.push(weekly_bosses[i]);
        } else {
          filtered_list = this.replaceMin(filtered_list, weekly_bosses[i]);
        }
      }
      for (let i = 0; i < filtered_list.length; i++) {
        total += (this.bossForm.get('server').value == 'reboot' ? filtered_list[i] : filtered_list[i]/5);
        crystals++;
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
