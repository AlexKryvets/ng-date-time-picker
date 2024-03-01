import {Directive, ElementRef, forwardRef, Inject, Input, Optional} from '@angular/core';
import {MatDatepickerInput} from '@angular/material/datepicker';
import {MAT_INPUT_VALUE_ACCESSOR} from '@angular/material/input';
import {MAT_FORM_FIELD, MatFormField} from '@angular/material/form-field';

import {MatDatepickerControl, MatDatepickerPanel} from './datepicker-base';
import {NgMatDateAdapter} from './core/date-adapter';
import {MatDateFormats} from '@angular/material/core';
import {NG_MAT_DATE_FORMATS, NG_MAT_DATETIME_FORMATS} from './core/date-formats';
import {NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';

export const NG_MAT_DATEPICKER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgMatDatepickerInput),
  multi: true,
};

export const NG_MAT_DATEPICKER_VALIDATORS: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => NgMatDatepickerInput),
  multi: true,
};

@Directive({
  selector: 'input[ngMatDatepicker]',
  providers: [
    NG_MAT_DATEPICKER_VALUE_ACCESSOR,
    NG_MAT_DATEPICKER_VALIDATORS,
    {provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: NgMatDatepickerInput},
  ],
  host: {
    'class': 'mat-datepicker-input',
    '[attr.aria-haspopup]': '_datepicker ? "dialog" : null',
    '[attr.aria-owns]': '(_datepicker?.opened && _datepicker.id) || null',
    '[attr.min]': 'min ? _dateAdapter.toIso8601(min) : null',
    '[attr.max]': 'max ? _dateAdapter.toIso8601(max) : null',
    // Used by the test harness to tie this input to its calendar. We can't depend on
    // `aria-owns` for this, because it's only defined while the calendar is open.
    '[attr.data-mat-calendar]': '_datepicker ? _datepicker.id : null',
    '[disabled]': 'disabled',
    '(input)': '_onInput($event.target.value)',
    '(change)': '_onChange()',
    '(blur)': '_onBlur()',
    '(keydown)': '_onKeydown($event)',
  },
  exportAs: 'ngMatDatepickerInput',
})
export class NgMatDatepickerInput<D> extends MatDatepickerInput<D>
{
  @Input()
  set ngMatDatepicker(datepicker: MatDatepickerPanel<MatDatepickerControl<D>, D | null, D>) {
    this.matDatepicker = datepicker;
  }

  @Input()
  set hideTime(hideTime: boolean) {
    this._hideTime = hideTime;
    this['_dateFormats'] = hideTime ? this.dateFormats : this.dateTimeFormats;
    this.value = this.value;
  }

  get hideTime(): boolean {
    return this._hideTime;
  }

  private _hideTime = false;

  private valueWithTime: D | null = null;

  constructor(
    elementRef: ElementRef<HTMLInputElement>,
    @Optional() private dateAdapter: NgMatDateAdapter<D>,
    @Optional() @Inject(NG_MAT_DATE_FORMATS) private dateFormats: MatDateFormats,
    @Optional() @Inject(NG_MAT_DATETIME_FORMATS) private dateTimeFormats: MatDateFormats,
    @Optional() @Inject(MAT_FORM_FIELD) formField?: MatFormField,
  ) {
    super(elementRef, dateAdapter, dateTimeFormats || dateFormats, formField);
  }

  protected _assignValueProgrammatically(value: D | null) {
    const newValue = this.updateValueIfHideTimeChanged(value);
    super._assignValueProgrammatically(newValue);
    if (newValue !== value && this._model) {
        this._model.updateSelection(newValue, null);
    }
  }

  private updateValueIfHideTimeChanged(value: D | null): D | null {
    if (this._hideTime && this.dateAdapter.isDateInstance(value) && this.valueWithTime === null) {
      this.valueWithTime = this.dateAdapter.clone(value);
      this.dateAdapter.setHour(value, 0);
      this.dateAdapter.setMinute(value, 0);
      this.dateAdapter.setSecond(value, 0);
      value = this.dateAdapter.toUtcDate(value);
    } else if (!this._hideTime && this.dateAdapter.isDateInstance(value) && this.valueWithTime !== null) {
      this.dateAdapter.setHour(value, this.dateAdapter.getHour(this.valueWithTime));
      this.dateAdapter.setMinute(value, this.dateAdapter.getMinute(this.valueWithTime));
      this.dateAdapter.setSecond(value, this.dateAdapter.getSecond(this.valueWithTime));
      value = this.dateAdapter.clone(value);
      this.valueWithTime = null;
    }
    return value;
  }
}
