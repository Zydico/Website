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
  public loop: number;
  public current_time: Date;
  public daily_reset: Date;
  public boss_reset: Date;
  public sunday_reset: Date;
  public event_reset: Date;

  form = this.formBuilder.group({
    dailies: this.formBuilder.array([]),
    weeklies: this.formBuilder.array([]),
  });

  get dailies() {
    return this.form.controls['dailies'] as FormArray;
  }

  get weeklies() {
    return this.form.controls['weeklies'] as FormArray;
  }

  constructor(private readonly formBuilder: FormBuilder, private cdr: ChangeDetectorRef) {
  }
  
  ngOnInit() {
    this.getDates();
    let daily_server: string = localStorage.getItem('daily-tasks-server-local');
    if (daily_server) { // If local storage exists (second time user)
      let weekly_server: string = localStorage.getItem('weekly-tasks-server-local');
      let dailiesJSON = JSON.parse(daily_server);
      let weeklyJSON = JSON.parse(weekly_server);
      for (let task of dailiesJSON) {
        let daily = this.addDaily();
        daily.get('done').setValue(task.done);
        daily.get('character').setValue(task.character);
        daily.get('task').setValue(task.task);
        daily.get('dailyReset').setValue(task.dailyReset);
      }
      for (let task of weeklyJSON) {
        let weekly = this.addWeekly();
        weekly.get('done').setValue(task.done);
        weekly.get('character').setValue(task.character);
        weekly.get('task').setValue(task.task);
        weekly.get('resetType').setValue(task.resetType);
        weekly.get('weeklyReset').setValue(task.weeklyReset);
      }
    } else {
      this.addDaily();
      this.addWeekly();
    }
    this.form.valueChanges.subscribe(() => {
      this.updateStorage();
    })
    this.loop = window.setInterval(() => {
      this.getDates();
      let current_time = new Date();
      for (let daily of this.dailies.controls) {
        if (new Date(daily.get('dailyReset').value) < current_time) {
          daily.get('done').setValue(false);
        }
        daily.get('dailyReset').setValue(Date.UTC(current_time.getUTCFullYear(), current_time.getUTCMonth(), current_time.getUTCDate()+1, 0, 0, 0));
      }
      for (let weekly of this.weeklies.controls) {
        if (new Date(weekly.get('weeklyReset').value) < current_time || new Date(weekly.get('weeklyReset').value).toString() == 'Invalid Date') {
          weekly.get('done').setValue(false);     
          if (weekly.get('resetType').value == 'Sunday/Monday') {
            weekly.get('weeklyReset').setValue(this.sunday_reset);
          }
          if (weekly.get('resetType').value == 'Weekly Boss') {
            weekly.get('weeklyReset').setValue(this.boss_reset);
          }
          if (weekly.get('resetType').value == 'Event Reset') {
            weekly.get('weeklyReset').setValue(this.event_reset);
          }
        }
      }
    }, 1000);
  }

  updateStorage(): void {
    localStorage.setItem('daily-tasks-server-local', JSON.stringify(this.form.get('dailies').value));
    localStorage.setItem('weekly-tasks-server-local', JSON.stringify(this.form.get('weeklies').value));
  }

  clearData(): void {
    this.form = this.formBuilder.group({
      dailies: this.formBuilder.array([]),
      weeklies: this.formBuilder.array([]),
    });
    this.form.valueChanges.subscribe(() => {
      this.updateStorage();
    })
    localStorage.removeItem('daily-tasks-server-local');
    localStorage.removeItem('weekly-tasks-server-local');
  }

  addDaily(): FormGroup {
    let current_time = new Date();
    const daily = this.formBuilder.group({
      done: false,
      character: '',
      task: '',
      dailyReset: Date.UTC(current_time.getUTCFullYear(), current_time.getUTCMonth(), current_time.getUTCDate()+1, 0, 0, 0)
    });
    this.dailies.push(daily);
    return daily;
  }

  deleteDaily(index: number) {
    this.dailies.removeAt(index);
  }

  moveDaily(index: number, direction: number) {
    if ((direction == -1 && index == 0) || (direction == 1 && index == this.dailies.length-1)) {
      return;
    }
    let group = this.dailies.at(index);
    this.dailies.removeAt(index);
    this.dailies.insert(index+direction, group);
  }

  addWeekly(): FormGroup {
    const weekly = this.formBuilder.group({
      done: false,
      character: '',
      task: '',
      resetType: 'Weekly Boss',
      weeklyReset: this.boss_reset
    });
    weekly.get('resetType').valueChanges.subscribe(change => {
      if (change == 'Sunday/Monday') {
        weekly.get('weeklyReset').setValue(this.sunday_reset);
      }
      if (change == 'Weekly Boss') {
        weekly.get('weeklyReset').setValue(this.boss_reset);
      }
      if (change == 'Event Reset') {
        weekly.get('weeklyReset').setValue(this.event_reset);
      }
    });
    this.weeklies.push(weekly);
    return weekly;
  }

  deleteWeekly(index: number) {
    this.weeklies.removeAt(index);
  }

  moveWeekly(index: number, direction: number) {
    if ((direction == -1 && index == 0) || (direction == 1 && index == this.weeklies.length-1)) {
      return;
    }
    let group = this.weeklies.at(index);
    this.weeklies.removeAt(index);
    this.weeklies.insert(index+direction, group);
  }

  getDates() {
    this.current_time = new Date();
    let daily_reset_utc = Date.UTC(this.current_time.getUTCFullYear(), this.current_time.getUTCMonth(), this.current_time.getUTCDate()+1, 0, 0, 0);
    this.daily_reset = new Date(daily_reset_utc);
    let boss_reset_day = (4+(7-this.current_time.getUTCDay())) % 7;
    let boss_reset_utc = Date.UTC(this.current_time.getUTCFullYear(), this.current_time.getUTCMonth(), this.current_time.getUTCDate()+boss_reset_day, 0, 0, 0);
    this.boss_reset = new Date(boss_reset_utc);
    if (this.boss_reset < this.current_time) {
      this.boss_reset.setDate(this.boss_reset.getDate() + 7);
    }
    let sunday_reset_day = (1+(7-this.current_time.getUTCDay())) % 7;
    let sunday_reset_utc = Date.UTC(this.current_time.getUTCFullYear(), this.current_time.getUTCMonth(), this.current_time.getUTCDate()+sunday_reset_day, 0, 0, 0);
    this.sunday_reset = new Date(sunday_reset_utc);
    if (this.sunday_reset < this.current_time) {
      this.sunday_reset.setDate(this.sunday_reset.getDate() + 7);
    }
    let event_reset_day = (3+(7-this.current_time.getUTCDay())) % 7;
    let event_reset_utc = Date.UTC(this.current_time.getUTCFullYear(), this.current_time.getUTCMonth(), this.current_time.getUTCDate()+event_reset_day, 0, 0, 0);
    this.event_reset = new Date(event_reset_utc);
    if (this.event_reset < this.current_time) {
      this.event_reset.setDate(this.event_reset.getDate() + 7);
    }
  }

  getDailyTimeDifference() {
    let difference = Math.abs(this.daily_reset.valueOf() - this.current_time.valueOf()) / 1000;
    let hours = Math.floor(difference / 3600) % 24;
    difference -= hours * 3600;
    let minutes = Math.floor(difference / 60) % 60;
    difference -= minutes * 60;
    let seconds = Math.floor(difference % 60);
    return hours + ' Hours ' + minutes + ' Minutes ' + seconds + ' Seconds';
  }

  ngOnDestroy() {
    clearInterval(this.loop);
  }
}
