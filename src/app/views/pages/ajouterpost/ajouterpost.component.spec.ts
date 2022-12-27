import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterpostComponent } from './ajouterpost.component';

describe('AjouterpostComponent', () => {
  let component: AjouterpostComponent;
  let fixture: ComponentFixture<AjouterpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
