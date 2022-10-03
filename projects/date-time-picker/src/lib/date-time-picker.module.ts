import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {PortalModule} from "@angular/cdk/portal";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerComponent} from "./datepicker";
import {MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, MatDatepickerContent} from "./datepicker-base";

@NgModule({
    declarations: [MatDatepickerComponent, MatDatepickerContent],
    imports: [CommonModule, PortalModule, MatButtonModule, MatDatepickerModule],
    exports: [MatDatepickerComponent, MatDatepickerContent],
    providers: [MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER]
})
export class NgDateTimePickerModule {}
