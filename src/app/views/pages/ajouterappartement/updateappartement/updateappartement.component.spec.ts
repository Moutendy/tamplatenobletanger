import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateappartementComponent } from './updateappartement.component';

describe('UpdateappartementComponent', () => {
  let component: UpdateappartementComponent;
  let fixture: ComponentFixture<UpdateappartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateappartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateappartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
