import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import de HomeComponent
import { ListAlbumsComponent } from './list-albums/list-albums.component'; // Import de HomeComponent

const routes: Routes = [ { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirection vers 'home'
  { path: '', component: HomeComponent },
  { path: 'listalbums', component: ListAlbumsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
