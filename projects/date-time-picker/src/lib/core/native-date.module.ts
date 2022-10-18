/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { PlatformModule } from '@angular/cdk/platform';
import { NgModule } from '@angular/core';
import { NgMatDateAdapter } from './date-adapter';
import { NgMatNativeDateAdapter } from './native-date-adapter';
import { NG_MAT_NATIVE_DATE_FORMATS } from './native-date-formats';
import { NG_MAT_DATE_FORMATS } from './date-formats';


@NgModule({
  imports: [PlatformModule],
  providers: [
    { provide: NgMatDateAdapter, useClass: NgMatNativeDateAdapter },
  ],
})
export class NgNativeDateModule { }

@NgModule({
  imports: [NgNativeDateModule],
  providers: [{ provide: NG_MAT_DATE_FORMATS, useValue: NG_MAT_NATIVE_DATE_FORMATS }],
})
export class NgMatNativeDateModule { }
