import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilsUsuariComponent } from './perfils-usuari.component';

describe('PerfilsUsuariComponent', () => {
  let component: PerfilsUsuariComponent;
  let fixture: ComponentFixture<PerfilsUsuariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilsUsuariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilsUsuariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
