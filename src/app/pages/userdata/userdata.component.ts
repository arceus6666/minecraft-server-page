import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata.service';
import { ApiResponse } from 'src/app/models/api.interface';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  public uuid: string;
  public name: string;

  public hiddenAlert = true;

  constructor(
    private service: UserdataService
  ) { }

  ngOnInit(): void {

  }

  public getUuid = (): void => {
    if (!this.name) { return; }
    this.service.getUuid(this.name).subscribe((data: ApiResponse) => {
      this.uuid = data.data as string;
    }, (err) => {

    });
  }

  public copy = (): void => {
    if (!this.uuid) { return; }
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.uuid;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.myAlert();
  }

  public myAlert = (show: boolean = true): void => {
    // ($("#myToast") as any).toast('show');
    this.hiddenAlert = false;
    if (show) {
      ($('.alert') as any).show();
      setTimeout(() => {
        ($('.alert') as any).hide();
      }, 2000);
      return;
    }
    ($('.alert') as any).hide();
  }

}
