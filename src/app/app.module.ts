import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { QuoteItemComponent } from './quote-item/quote-item.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { CounterComponent } from './counter/counter.component';
import { CounterService } from './counter.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponent },
  { path: 'about/:id', component: MyAboutComponent },
  { path: 'counter', component: CounterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    QuoteListComponent,
    QuoteItemComponent,
    MyAboutComponent,
    MyHomeComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
