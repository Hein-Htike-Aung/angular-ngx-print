import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCanvasDemoComponent } from './html-canvas-demo.component';

describe('HtmlCanvasDemoComponent', () => {
  let component: HtmlCanvasDemoComponent;
  let fixture: ComponentFixture<HtmlCanvasDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlCanvasDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlCanvasDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
