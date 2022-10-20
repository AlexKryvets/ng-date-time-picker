import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {PortalModule} from '@angular/cdk/portal';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepicker} from './datepicker';
import {MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, MatDatepickerContent} from './datepicker-base';
import {NgTimepickerComponent} from './timepicker.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [MatDatepicker, MatDatepickerContent, NgTimepickerComponent],
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
  exports: [MatDatepicker, MatDatepickerContent, NgTimepickerComponent],
  providers: [MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
})
export class NgDateTimePickerModule {}
