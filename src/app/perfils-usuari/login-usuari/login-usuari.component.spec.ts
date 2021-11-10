import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUsuariComponent } from './login-usuari.component';

describe('LoginUsuariComponent', () => {
  let component: LoginUsuariComponent;
  let fixture: ComponentFixture<LoginUsuariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUsuariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUsuariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
