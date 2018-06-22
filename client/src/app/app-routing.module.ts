import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
	{path: "pets/new", component: NewComponent},
	{path: "pets/:id", component: DetailsComponent},
	{path: "pets/:id/edit", component: EditComponent},
	{path: "", component: PetsComponent},
	{path: "**", component: PetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
