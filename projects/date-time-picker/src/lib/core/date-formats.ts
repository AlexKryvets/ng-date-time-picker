/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { InjectionToken } from '@angular/core';
import {MatDateFormats} from '@angular/material/core';

export const NG_MAT_DATE_FORMATS = new InjectionToken<MatDateFormats>('ng-mat-date-formats');

export const NG_MAT_DATETIME_FORMATS = new InjectionToken<MatDateFormats>('ng-mat-datetime-formats');
