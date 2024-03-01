/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// import {PlatformModule} from '@angular/cdk/platform';
import {DateAdapter, MAT_DATE_FORMATS, MatDateFormats} from '@angular/material/core';
import {NgModule, Provider} from '@angular/core';
import {NgMatDateAdapter} from './date-adapter';
import {NgMatNativeDateAdapter} from './native-date-adapter';
import {NG_MAT_NATIVE_DATE_FORMATS, NG_MAT_NATIVE_DATETIME_FORMATS} from './native-date-formats';
import {NG_MAT_DATE_FORMATS, NG_MAT_DATETIME_FORMATS} from './date-formats';


@NgModule({
  // imports: [PlatformModule],
  providers: [
    {provide: NgMatDateAdapter, useClass: NgMatNativeDateAdapter},
  ],
})
export class NgNativeDateModule {
}

@NgModule({
  // imports: [NgNativeDateModule],
  providers: [provideNgNativeDateAdapter()],
})
export class NgMatNativeDateModule {
}

export function provideNgNativeDateAdapter(
  dateFormats: MatDateFormats = NG_MAT_NATIVE_DATE_FORMATS,
  dateTimeFormats: MatDateFormats = NG_MAT_NATIVE_DATETIME_FORMATS,
): Provider[] {
  return [
    {provide: NgMatDateAdapter, useClass: NgMatNativeDateAdapter},
    // TODO: remove after SelectionModel is updated to use NgMatDateAdapter
    {provide: DateAdapter, useExisting: NgMatDateAdapter},
    {provide: NG_MAT_DATE_FORMATS, useValue: dateFormats},
    {provide: NG_MAT_DATETIME_FORMATS, useValue: dateTimeFormats},
    // TODO: remove after MatCalendar is updated to use NG_MAT_DATE_FORMATS
    {provide: MAT_DATE_FORMATS, useExisting: NG_MAT_DATE_FORMATS},
  ];
}
