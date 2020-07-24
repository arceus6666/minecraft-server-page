import { Component, OnInit } from '@angular/core';
import { IFile } from 'src/app/models/file.interface';
import { FilesService } from 'src/app/services/files.service';
import { ApiResponse } from 'src/app/models/api.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mods',
  templateUrl: './mods.component.html',
  styleUrls: ['./mods.component.css']
})
export class ModsComponent implements OnInit {

  public downloadurl = environment.DOWNLOADS_URL;
  public imageurl = environment.IMAGES_URL;

  public apidata: Array<IFile>;

  // = [
  //   {
  //     name: 'just_enough_items',
  //     desc: 'JEI is an item and recipe viewing mod for Minecraft, built from the ground up for stability and performance.',
  //     link: 'https://www.curseforge.com/minecraft/mc-mods/jei'
  //   },
  //   {
  //     name: 'xaero\'s_minimap',
  //     desc: 'Unlike many other minimap mods, Xaero\'s minimap keeps the aesthetic of vanilla Minecraft which might even make you forget that it was a mod in the first place. It\'s also the first rotating square minimap for Minecraft. There is a toggle to make it lock north and not rotate (the arrow approach). There are 2 mod editions, full and fair-play (designed for fair PVP). You can place waypoints. The minimap also displays entities, such as players, mobs and items.',
  //     link: 'https://www.curseforge.com/minecraft/mc-mods/xaeros-minimap'
  //   },
  //   {
  //     name: 'xaero\'s_world_map',
  //     desc: 'Xaero\'s World Map mod adds a self-writing fullscreen map to your Minecraft client. Works as a separate mod but is a lot better with Xaero\'s Minimap. The reason why it\'s available separately is to keep Xaero\'s Minimap as light-weight as possible.\nThe mod is still in development! Please report any bugs that you encounter or otherwise they probably won\'t get fixed.',
  //     link: 'https://www.curseforge.com/minecraft/mc-mods/xaeros-world-map'
  //   },
  //   {
  //     name: 'advanced_xray',
  //     desc: 'Minecraft Forge based XRay mod designed to aid players who don\'t like the ore searching process.',
  //     link: 'https://www.curseforge.com/minecraft/mc-mods/advanced-xray'
  //   }
  // ];

  constructor(
    private service: FilesService
  ) { }

  ngOnInit(): void {
    this.service.getTypes('mods').subscribe((data: ApiResponse) => {
      const files: Array<IFile> = data.data as Array<IFile>;
      this.apidata = files;
    });
  }

}
