import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './helpers/navbar/navbar.component';
import { DatapacksComponent } from './pages/datapacks/datapacks.component';
import { FilenamePipe } from './pipes/filename.pipe';
import { ResourcepackComponent } from './pages/resourcepack/resourcepack.component';
import { ModsComponent } from './pages/mods/mods.component';
import { SkinsComponent } from './pages/skins/skins.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { UserdataComponent } from './pages/userdata/userdata.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DatapacksComponent,
    FilenamePipe,
    ResourcepackComponent,
    ModsComponent,
    SkinsComponent,
    InventoryComponent,
    UserdataComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
