import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaUsuariComponent } from './pagina-usuari.component';

describe('PaginaUsuariComponent', () => {
  let component: PaginaUsuariComponent;
  let fixture: ComponentFixture<PaginaUsuariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaUsuariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaUsuariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
