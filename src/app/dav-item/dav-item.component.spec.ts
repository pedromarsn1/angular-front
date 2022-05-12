import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DavItemComponent } from './dav-item.component';

describe('DavItemComponent', () => {
  let component: DavItemComponent;
  let fixture: ComponentFixture<DavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DavItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
