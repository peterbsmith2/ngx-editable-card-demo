import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { TryCardComponent } from './components/try-card/try-card.component';
import { TryCardFormComponent } from './components/try-card-form/try-card-form.component';
import { EditableTryCardComponent } from './components/editable-try-card/editable-try-card.component';

import { ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { TryEffects } from './effects/try.effects';
import { ApiService } from './api.service';

import { MarkdownModule } from 'ngx-markdown';

import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

import {
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
} from '@angular/material';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TryCardComponent,
    TryCardFormComponent,
    EditableTryCardComponent,
  ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([TryEffects]),
    StoreModule.forRoot(reducers),
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MarkdownModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [ApiService],
  bootstrap: [HomePageComponent]
})
export class AppModule { }
