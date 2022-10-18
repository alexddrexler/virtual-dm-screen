import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ENTER } from '@angular/cdk/keycodes';

import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { DEFAULT_DAMAGE_TYPES } from '../../../interfaces/monster';

@Component({
  selector: 'app-damage-type-select',
  templateUrl: './damage-type-select.component.html',
  styleUrls: ['./damage-type-select.component.css']
})
export class DamageTypeSelectComponent implements OnInit {

  @Input() title: string = '';
  @Input() out_types: string[] = [];

  separator_key_codes: number[] = [ENTER];
  type_ctrl = new FormControl('');
  filtered_types: Observable<string[]>;
  default_damage_types = DEFAULT_DAMAGE_TYPES;

  @ViewChild('typeInput') type_input!: ElementRef<HTMLInputElement>;

  constructor() {
    this.filtered_types = this._get_filtered_types();
  }

  ngOnInit(): void {
  }

  add( event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add the specified type.
    if (value) {
      this.out_types.push(value);
    }

    // Reset input value.
    event.chipInput!.clear();
    this.type_ctrl.setValue(null);
  }

  remove(damage_type: string): void {
    const index = this.out_types.indexOf(damage_type);

    if (index >= 0) {
      this.out_types.splice(index, 1);
    }
    this.filtered_types = this._get_filtered_types();
  }

  autoselected(event: MatAutocompleteSelectedEvent): void {
    this.out_types.push(event.option.viewValue);
    this.type_input.nativeElement.value = '';
    this.type_ctrl.setValue(null);
  }

  private _get_filtered_types(): Observable<string[]> {
    return this.type_ctrl.valueChanges.pipe(
      startWith(null),
      map((t: string | null) => (this._filter(t))),
    );
  }

  private _filter(value: string | null): string[] {
    const remaining_types = this.default_damage_types.filter(t => this.out_types.indexOf(t) == -1);
    if (!value) {
      return remaining_types.slice();
    }
    const filter_val = value.toLowerCase();

    return remaining_types.filter(t => t.toLowerCase().includes(filter_val));
  }

}
