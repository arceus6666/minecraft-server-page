import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownloadPageComponent } from './pages/download-page/download-page.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './addons/navbar/navbar.component';
import { DatapacksComponent } from './pages/datapacks/datapacks.component';
import { FilenamePipe } from './pipes/filename.pipe';
import { ResourcepackComponent } from './pages/resourcepack/resourcepack.component';
import { ModsComponent } from './pages/mods/mods.component';
import { SkinsComponent } from './pages/skins/skins.component';

@NgModule({
  declarations: [
    AppComponent,
    DownloadPageComponent,
    HomeComponent,
    NavbarComponent,
    DatapacksComponent,
    FilenamePipe,
    ResourcepackComponent,
    ModsComponent,
    SkinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
