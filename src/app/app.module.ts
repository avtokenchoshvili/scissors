import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddComponent } from './add/add.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { CardComponent } from './card/card.component';
import { PanelComponent } from './panel/panel.component';


import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

import { AppmaterialUIModule } from './app-material-ui.module';
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    AllJobsComponent,
    CardComponent,
    PanelComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppmaterialUIModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
