import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { FormsModule } from '@angular/forms';

import {MatCardModule, MatButtonModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { HomeComponent } from './home/home.component';
import { MealplanComponent } from './mealplan/mealplan.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { LocalStorageService } from './localstorage.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MealplanComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AmplifyAngularModule,
    StorageServiceModule,
    FormsModule,
    MatCardModule,
    MatButtonModule, 
    FlexLayoutModule,
    ChartsModule
  ],
  providers: [AmplifyService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
