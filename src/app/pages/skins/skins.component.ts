import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FilesService } from 'src/app/services/files.service';
import { ApiResponse } from 'src/app/models/api.interface';
import { IFile } from 'src/app/models/file.interface';

@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.css']
})
export class SkinsComponent implements OnInit {

  public downloadurl = environment.DOWNLOADS_URL;
  public imageurl = environment.IMAGES_URL;

  public apidata: Array<IFile>;

  //  = [
  //   {
  //     name: 'Brendan - Pokémon Emerald',
  //     file: 'brendan_pkmn_emerald'
  //   },
  //   {
  //     name: 'Legion Trooper - Star Wars',
  //     file: 'legion_trooper'
  //   },
  //   {
  //     name: 'Mario - Super Mario Bros.',
  //     file: 'nes_mario'
  //   },
  //   {
  //     name: 'Red - Pokémon Red & Blue',
  //     file: 'red_pkmn_red'
  //   },
  //   {
  //     name: 'Trooper 2',
  //     file: 'red_trooper'
  //   },
  // ];

  constructor(
    private service: FilesService
  ) { }

  ngOnInit(): void {
    this.service.getTypes('skins').subscribe((data: ApiResponse) => {
      const files: Array<IFile> = data.data as Array<IFile>;
      this.apidata = files;
    });
  }

}
