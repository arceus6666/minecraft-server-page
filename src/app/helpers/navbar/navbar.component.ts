import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { InventoryService } from 'src/app/services/inventory.service';
import { IItem } from '../../models/item.interface';
import { ApiResponse } from 'src/app/models/api.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private service: InventoryService
  ) { }

  ngOnInit(): void { }

  public newItem = (): void => {
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2']
    }).queue([
      'Item Name',
      'Item Position'
    ]).then((result: any) => {
      if (result.value) {
        const item: IItem = {
          name: result.value[0],
          position: parseInt(result.value[1], 10)
        };
        // console.log(result.value);
        Swal.fire({
          title: 'Is this correct?',
          html: `
          <div style="width: 60%; margin-left: 20%;">
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">Name</div>
              </div>
              <input type="text" class="form-control text-center" value="${item.name}" disabled>
            </div><br>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">Position</div>
              </div>
              <input type="text" class="form-control text-center" value="${item.position}" disabled>
            </div>
          </div>`,
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'Retry',
          confirmButtonColor: '#28A745',
          cancelButtonColor: '#DC3545'
        }).then((result2) => {
          if (result2.value) {
            this.service.create(item).subscribe((data: ApiResponse) => {
              if (data.error) {
                Swal.fire({
                  title: `${data.status} Error <i class="far fa-tired"></i>`,
                  text: 'Please try again later',
                  icon: 'error'
                });
                return;
              }
              const item2: IItem = data.data as IItem;
              this.service.updateList(item2);
              Swal.fire({
                title: 'Item created <i class="far fa-smile-wink"></i>',
                icon: 'success'
              });
            });
          } else {
            this.newItem();
          }
        });
      }
    });
  }

}
