import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

// import * as $ from 'jquery';
import Swal from 'sweetalert2';

import { IItem } from 'src/app/models/item.interface';
import { InventoryService } from 'src/app/services/inventory.service';
import { ApiResponse } from 'src/app/models/api.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit, OnDestroy {

  private apidata: Array<IItem>;

  private subscriptions: Array<Subscription> = [];

  public quantity: number;

  public editing: IItem = null;

  public showdata: Array<Array<IItem>> = [];

  public hiddenAlert = true;

  public sort = {
    name: 0,
    position: 0,
    date: 0
  };

  public pagination = {
    size: 5,
    page: 0
  };

  public sizes: Array<number> = [5, 10, 20, 50];

  public itemForm: FormGroup;

  public searchText = '';

  private incomingItem: IItem;

  constructor(
    private fb: FormBuilder,
    private service: InventoryService
  ) { }

  ngOnInit(): void {
    // this.showdata = this.paginate(this.data, 10, 1);
    this.itemForm = this.fb.group({
      position: new FormControl(null),
      name: new FormControl(null)
    });
    this.subscriptions.push(this.service.getAll().subscribe((data: ApiResponse) => {
      // console.log('data', data);
      const items: Array<IItem> = data.data as Array<IItem>;
      this.apidata = items;
      this.quantity = items.length;
      this.paginate(items);
    }));
    this.subscriptions.push(this.service.currentItem.subscribe((item: IItem) => {
      if (item && this.apidata) {
        this.quantity = this.apidata.push(item);
        this.paginate(this.apidata);
        this.myAlert();
      }
    }));
    $(() => {
      ($('[data-toggle="tooltip"]') as any).tooltip();
    });
  }

  private paginate = async (array: Array<IItem>): Promise<void> => {
    // const temp: Array<IItem> = [];
    // await array.forEach((item: IItem) => { temp.push(item); });
    const pages = await Math.ceil(array.length / this.pagination.size);
    this.showdata = new Array<Array<IItem>>(pages);
    this.quantity = array.length;
    // tslint:disable-next-line: forin
    for (let i = 0; i < pages; i++) {
      const start = await this.pagination.size * i;
      // console.log('page:', i, 'pages:', pages, 'start:', start, 'end:', start + this.pagination.size)
      this.showdata[i] = await new Array<IItem>(...array.slice(start, start + this.pagination.size));
    }
  }

  private positionSorter = (inverted: boolean = false):
    (a: IItem, b: IItem) => number => {
    if (inverted) {
      return (a, b) => a.position > b.position ? -1 : 1;
    }
    return (a, b) => a.position > b.position ? 1 : -1;
  }

  private nameSorter = (inverted: boolean = false):
    (a: IItem, b: IItem) => number => {
    if (inverted) {
      return (a, b) => a.name > b.name ? -1 : a.name === b.name ? 0 : 1;
    }
    return (a, b) => a.name > b.name ? 1 : a.name === b.name ? 0 : -1;
  }

  private dateSorter = (inverted: boolean = false): (a: IItem, b: IItem) => number => {
    if (inverted) {
      return (a, b) => a.created_at > b.created_at ? -1 : a.created_at === b.created_at ? 0 : 1;
    }
    return (a, b) => a.created_at > b.created_at ? 1 : a.created_at === b.created_at ? 0 : -1;
  }

  public sortByPosition = async (): Promise<void> => {
    const v = this.sort.position;
    this.sort.name = 0;
    this.sort.date = 0;
    const temp: Array<IItem> = await [...this.apidata];
    if (v === 0) {
      await temp.sort(this.positionSorter());
      await this.paginate(temp);
      this.sort.position = await 1;
    } else if (v === 1) {
      await temp.sort(this.positionSorter(true));
      await this.paginate(temp);
      this.sort.position = await -1;
    } else {
      await this.paginate(temp);
      this.sort.position = await 0;
    }
  }

  public sortByName = async (): Promise<void> => {
    const v = this.sort.name;
    this.sort.position = 0;
    this.sort.date = 0;
    const temp: Array<IItem> = await [...this.apidata];
    // await this.showdata.forEach((page: Array<IItem>) => { temp.concat(page); });
    if (v === 0) {
      await temp.sort(this.nameSorter());
      await this.paginate(temp);
      this.sort.name = await 1;
    } else if (v === 1) {
      await temp.sort(this.nameSorter(true));
      await this.paginate(temp);
      this.sort.name = await -1;
    } else {
      await this.paginate(this.apidata);
      this.sort.name = await 0;
    }
  }

  public sortByDate = async (): Promise<void> => {
    const v = this.sort.date;
    this.sort.name = 0;
    this.sort.position = 0;
    const temp: Array<IItem> = await [...this.apidata];
    if (v === 0) {
      await temp.sort(this.dateSorter());
      await this.paginate(temp);
      this.sort.date = await 1;
    } else if (v === 1) {
      await temp.sort(this.dateSorter(true));
      await this.paginate(temp);
      this.sort.date = await -1;
    } else {
      await this.paginate(this.apidata);
      this.sort.date = await 0;
    }
  }

  public changePage = (value: number | boolean): void => {
    if (typeof value === 'number') {
      this.pagination.page = value;
    } else {
      if (value) {
        this.pagination.page++;
      } else {
        this.pagination.page--;
      }
    }
  }

  public changeSize = (value: number): void => {
    this.pagination.size = value;
    this.paginate(this.apidata);
  }

  public changeEditing = async (value: number): Promise<void> => {
    this.editing = await this.apidata.find((i: IItem) => i.position === value);
    if (value > -1) {
      // const item = await this.apidata.find((i: IItem) => i.position === value);
      this.itemForm = await this.fb.group({
        position: new FormControl(value),
        name: new FormControl(this.editing.name)
      });
    }
  }

  public editItem = async (): Promise<void> => {
    await Swal.fire({
      title: 'Is this OK?',
      html: `
      <div style="width: 60%; margin-left: 20%;">
      <div class="input-group mb-2">
          <div class="input-group-prepend">
          <div class="input-group-text">Name</div>
          </div>
          <input type="text" class="form-control text-center" value="${this.itemForm.value.name}" disabled>
          </div><br>
          <div class="input-group mb-2">
          <div class="input-group-prepend">
          <div class="input-group-text">Position</div>
          </div>
          <input type="text" class="form-control text-center" value="${this.itemForm.value.position}" disabled>
          </div>
          </div>`,
      icon: 'warning',
      confirmButtonText: 'Yes',
      showCancelButton: true,
      confirmButtonColor: '#28A745',
      cancelButtonColor: '#DC3545'
    }).then((result) => {
      this.editing.name = this.itemForm.value.name;
      this.editing.position = this.itemForm.value.position;
      if (result.value) {
        // console.log(this.editing);
        this.subscriptions.push(this.service.update(this.editing).subscribe((data: ApiResponse) => {
          if (data.error) {
            Swal.fire({
              title: `${data.status} Error <i class="far fa-tired"></i>`,
              text: 'Please try again later',
              icon: 'error'
            });
            return;
          }
          Swal.fire({
            title: 'Item edited&nbsp;<i class="far fa-smile"></i>',
            icon: 'success'
          });
        }, error => {
          const data: ApiResponse = error.error;
          Swal.fire({
            title: `${data.status} Error <i class="far fa-tired"></i>`,
            text: 'Please try again later',
            icon: 'error'
          });
        }));
      }
    });
  }

  public deleteItem = async (value: number): Promise<void> => {
    this.editing = await this.apidata.find((i: IItem) => i.position === value);
    await Swal.fire({
      title: `Delete "${this.editing.name}"?`,
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#28A745',
      cancelButtonColor: '#DC3545',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this.subscriptions.push(this.service.delete(this.editing._id).subscribe(async (data: ApiResponse) => {
          // console.log(data);
          if (data.error) {
            Swal.fire({
              title: `${data.status} Error <i class="far fa-tired"></i>`,
              text: 'Please try again later',
              icon: 'error'
            });
            return;
          }
          this.apidata = await this.apidata.filter((i: IItem) => i._id !== this.editing._id);
          this.paginate(this.apidata);
          Swal.fire({
            title: 'Item deleted&nbsp;<i class="far fa-frown-open"></i>',
            icon: 'success'
          });
        }, (error: any) => {
          // console.log(error.error);
          const status: number = error.error.status;
          let msg: string;
          switch (status) {
            case 404:
              msg = 'Item not found';
              break;
            default:
              msg = 'Unknown server error\nPlease try again later';
              break;
          }
          Swal.fire({
            title: `${status} Error <i class="far fa-tired"></i>`,
            text: msg,
            icon: 'error'
          });
        }));
      } else {
        Swal.fire({
          title: 'Item saved&nbsp;<i class="far fa-smile-wink"></i>',
          icon: 'error'
        });
      }
    });
  }

  public showAlert = (): void => {
    // $('.toast').toast('show');
    Swal.fire({
      title: 'OK',
      icon: 'success'
    });
  }

  public search = (value: string): void => {
    // console.log(value);
    const temp = this.apidata.filter((item: IItem) => item.name.toLowerCase().includes(value.toLowerCase()));
    this.paginate(temp);
  }

  public myAlert = (show: boolean = true): void => {
    // ($("#myToast") as any).toast('show');
    this.hiddenAlert = false;
    if (show) {
      ($('.alert') as any).show();
      setTimeout(() => {
        ($('.alert') as any).hide();
      }, 6000);
      return;
    }
    ($('.alert') as any).hide();
  }

  test() {
    this.service.updateList({ name: 'test', position: 0 });
  }

  print() {
    console.log(this.showdata, this.apidata, this.sort.name);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s: Subscription) => { s.unsubscribe(); });
  }

}
