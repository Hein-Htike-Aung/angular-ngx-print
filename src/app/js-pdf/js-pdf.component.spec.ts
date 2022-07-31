import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsPdfComponent } from './js-pdf.component';

describe('JsPdfComponent', () => {
  let component: JsPdfComponent;
  let fixture: ComponentFixture<JsPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsPdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
