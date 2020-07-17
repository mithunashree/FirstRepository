import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from'@angular/forms';
import { RegisterComponent } from './register/register.component';
import {MatCardModule} from '@angular/material/card';
import { UserComponent } from './user/user.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
