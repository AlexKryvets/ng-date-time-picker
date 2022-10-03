import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {NgDateTimePickerModule} from 'ng-date-time-picker';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatNativeDateModule,
        MatDatepickerModule,
        NgDateTimePickerModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
