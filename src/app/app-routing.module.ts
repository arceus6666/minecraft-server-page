import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DatapacksComponent } from './pages/datapacks/datapacks.component';
import { ResourcepackComponent } from './pages/resourcepack/resourcepack.component';
import { ModsComponent } from './pages/mods/mods.component';
import { SkinsComponent } from './pages/skins/skins.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { UserdataComponent } from './pages/userdata/userdata.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'userdata', component: UserdataComponent },
  { path: 'datapacks', component: DatapacksComponent },
  { path: 'resourcepacks', component: ResourcepackComponent },
  { path: 'mods', component: ModsComponent },
  { path: 'skins', component: SkinsComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
