import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapacksComponent } from './datapacks.component';

describe('DatapacksComponent', () => {
  let component: DatapacksComponent;
  let fixture: ComponentFixture<DatapacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatapacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
