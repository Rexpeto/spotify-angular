import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { authorizationInterceptor } from '@core/interceptors/session.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    CookieService,
    provideHttpClient(withInterceptors([authorizationInterceptor])),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
