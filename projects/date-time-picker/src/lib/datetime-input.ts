import {Directive, ElementRef, forwardRef, Inject, Input, Optional} from '@angular/core';
import {MatDatepickerInput} from '@angular/material/datepicker';
import {MAT_INPUT_VALUE_ACCESSOR} from '@angular/material/input';
import {MAT_FORM_FIELD, MatFormField} from '@angular/material/form-field';

import {MatDatepickerControl, MatDatepickerPanel} from './datepicker-base';
import {NgMatDateAdapter} from './core/date-adapter';
import {MatDateFormats} from '@angular/material/core';
import {NG_MAT_DATE_FORMATS} from './core/date-formats';
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

  constructor(
    elementRef: ElementRef<HTMLInputElement>,
    @Optional() dateAdapter: NgMatDateAdapter<D>,
    @Optional() @Inject(NG_MAT_DATE_FORMATS) dateFormats: MatDateFormats,
    @Optional() @Inject(MAT_FORM_FIELD) private formField?: MatFormField,
  ) {
    super(elementRef, dateAdapter, dateFormats, formField);
  }

  getOverlayLabelId(): string | null {
    if (this.formField) {
      return this.formField.getLabelId();
    }

    return this._elementRef.nativeElement.getAttribute('aria-labelledby');
  }
}
