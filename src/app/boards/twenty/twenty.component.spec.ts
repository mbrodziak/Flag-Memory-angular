import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyComponent } from './twenty.component';

describe('TwentyComponent', () => {
  let component: TwentyComponent;
  let fixture: ComponentFixture<TwentyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwentyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
