import { Component, OnInit } from '@angular/core';
import { IFile } from 'src/app/models/file.interface';
import { FilesService } from 'src/app/services/files.service';
import { ApiResponse } from 'src/app/models/api.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-datapacks',
  templateUrl: './datapacks.component.html',
  styleUrls: ['./datapacks.component.css']
})
export class DatapacksComponent implements OnInit {

  public downloadurl = environment.DOWNLOADS_URL;
  public imageurl = environment.IMAGES_URL;

  public packs: Array<IFile>;
  public tweaks: Array<IFile>;

  constructor(
    private service: FilesService
  ) { }

  ngOnInit(): void {
    this.service.getTypes('datapacks').subscribe((data: ApiResponse) => {
      const files: Array<IFile> = data.data as Array<IFile>;
      this.packs = files;
    });
    this.service.getTypes('tweaks').subscribe((data: ApiResponse) => {
      const files: Array<IFile> = data.data as Array<IFile>;
      this.tweaks = files;
    });
  }

}
