import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainlayOutComponent } from './mainlay-out.component';

describe('MainlayOutComponent', () => {
  let component: MainlayOutComponent;
  let fixture: ComponentFixture<MainlayOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainlayOutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainlayOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
