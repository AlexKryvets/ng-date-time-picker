import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, MatCalendar} from '@angular/material/datepicker';
import {PortalModule} from '@angular/cdk/portal';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

import {NgMatDatepicker} from './datepicker';
import {MatDatepickerContent as NgMatDatepickerContent} from './datepicker-base';
import {NgMatTimepickerComponent} from './timepicker.component';
import {NgMatDatepickerInput} from './datetime-input';

@NgModule({
  declarations: [NgMatDatepicker, NgMatDatepickerContent, NgMatTimepickerComponent, NgMatDatepickerInput],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PortalModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCalendar,
  ],
  exports: [NgMatDatepicker, NgMatDatepickerContent, NgMatTimepickerComponent, NgMatDatepickerInput],
  providers: [MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
})
export class NgDateTimePickerModule {}
