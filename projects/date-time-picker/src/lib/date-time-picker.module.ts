import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, MatDatepickerModule} from '@angular/material/datepicker';
import {PortalModule} from '@angular/cdk/portal';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

import {NgMatDatepicker} from './datepicker';
import {MatDatepickerContent as NgMatDatepickerContent} from './datepicker-base';
import {NgTimepickerComponent} from './timepicker.component';

@NgModule({
  declarations: [NgMatDatepicker, NgMatDatepickerContent, NgTimepickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PortalModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
  ],
  exports: [NgMatDatepicker, NgMatDatepickerContent, NgTimepickerComponent],
  providers: [MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
})
export class NgDateTimePickerModule {}
