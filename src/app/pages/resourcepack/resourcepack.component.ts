import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IFile } from 'src/app/models/file.interface';
import { FilesService } from 'src/app/services/files.service';
import { ApiResponse } from 'src/app/models/api.interface';

@Component({
  selector: 'app-resourcepack',
  templateUrl: './resourcepack.component.html',
  styleUrls: ['./resourcepack.component.css']
})
export class ResourcepackComponent implements OnInit {

  public imageurl = environment.IMAGES_URL;
  public downloadurl = environment.DOWNLOADS_URL;

  public apidata: Array<IFile>;

  // = [
  //   'BetterBedrock',
  //   'ClearerWater',
  //   'LowerGrass',
  //   'LowerMycelium',
  //   'LowerPodzol',
  //   'LowerSnow',
  //   'LowerPaths',
  //   'ShorterTallGrass',
  //   'ShorterGrass',
  //   'QuieterGhasts',
  //   'QuieterDispensersDroppers',
  //   'QuieterMinecarts',
  //   'OreBorders',
  //   'MineProgressBar',
  //   'StickyPistonSides',
  //   'CleanRedstoneDust',
  //   'DiminishingTools',
  //   'UnobtrusiveRain',
  //   'BorderlessGlass',
  //   'BorderlessStainedGlass',
  //   'UnobtrusiveScaffolding',
  //   'LowerShield',
  //   '3DLadders',
  //   '3DRails',
  //   '3DSugarcane',
  //   '3DIronBars',
  //   '3DVines',
  //   '3DDoors&Trapdoors',
  //   '3DStonecutters',
  //   'SmootherFont',
  //   'DarkUIGreyText',
  //   'NumberedHotbar',
  // ];

  constructor(
    private service: FilesService
  ) { }

  ngOnInit(): void {
    this.service.getTypes('rsspacks').subscribe((data: ApiResponse) => {
      const files: Array<IFile> = data.data as Array<IFile>;
      this.apidata = files;
    });
  }

}
