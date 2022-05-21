import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamEbitComponent } from './team-ebit/team-ebit.component';
import { PartnersComponent } from './partners/partners.component';
import { NewsComponent } from './news/news.component';
import { CareersComponent } from './careers/careers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StoreComponent } from './store/store.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamEbitComponent,
    PartnersComponent,
    NewsComponent,
    CareersComponent,
    AboutUsComponent,
    StoreComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
