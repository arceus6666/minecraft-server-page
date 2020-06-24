import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcepackComponent } from './resourcepack.component';

describe('ResourcepackComponent', () => {
  let component: ResourcepackComponent;
  let fixture: ComponentFixture<ResourcepackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcepackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcepackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
