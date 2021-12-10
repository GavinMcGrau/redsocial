import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasAmigosComponent } from './mas-amigos.component';

describe('MasAmigosComponent', () => {
  let component: MasAmigosComponent;
  let fixture: ComponentFixture<MasAmigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasAmigosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasAmigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
