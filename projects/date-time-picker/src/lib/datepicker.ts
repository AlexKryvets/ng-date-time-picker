/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER, MatDatepicker} from '@angular/material/datepicker';
import {
  MatDatepickerBase as NgMatDatepickerBase,
  MatDatepickerControl as NgMatDatepickerControl,
} from './datepicker-base';

const MatDatepickerBase = Object.getPrototypeOf(MatDatepicker);

// TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="matDatepicker"). We can change this to a directive
// if angular adds support for `exportAs: '$implicit'` on directives.
/** Component responsible for managing the datepicker popup/dialog. */
@Component({
  selector: 'ng-mat-datepicker',
  template: '',
  exportAs: 'ngMatDatepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER,
    {provide: MatDatepickerBase, useExisting: NgMatDatepicker},
  ],
})
export class NgMatDatepicker<D> extends NgMatDatepickerBase<NgMatDatepickerControl<D>, D | null, D> {}
