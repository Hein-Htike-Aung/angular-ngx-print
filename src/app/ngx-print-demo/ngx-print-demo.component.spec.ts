import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPrintDemoComponent } from './ngx-print-demo.component';

describe('NgxPrintDemoComponent', () => {
  let component: NgxPrintDemoComponent;
  let fixture: ComponentFixture<NgxPrintDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxPrintDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxPrintDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
