import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadPageComponent } from './pages/download-page/download-page.component';
import { HomeComponent } from './pages/home/home.component';
import { DatapacksComponent } from './pages/datapacks/datapacks.component';
import { ResourcepackComponent } from './pages/resourcepack/resourcepack.component';
import { ModsComponent } from './pages/mods/mods.component';
import { SkinsComponent } from './pages/skins/skins.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'downloads', component: DownloadPageComponent },
  { path: 'datapacks', component: DatapacksComponent },
  { path: 'resourcepacks', component: ResourcepackComponent },
  { path: 'mods', component: ModsComponent },
  { path: 'skins', component: SkinsComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
