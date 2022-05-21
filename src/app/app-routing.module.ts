import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { PartnersComponent } from './partners/partners.component';
import { StoreComponent } from './store/store.component';
import { TeamEbitComponent } from './team-ebit/team-ebit.component';

const routes: Routes = [
  {path:'', component:AboutUsComponent},
  {path:'8bit', component:TeamEbitComponent},
  {path:'news', component:NewsComponent},
  {path:'store', component:StoreComponent},
  {path:'partners', component:PartnersComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
