import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComicsComponent } from './comics/comics.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [{path: "", component:HomeComponent},
{path: "kiadvanyok", component:ComicsComponent},
{path: "rolunk", component:AboutComponent},
{path: "kapcsolat", component:ContactComponent},
{path: "detail/:id", component:DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
