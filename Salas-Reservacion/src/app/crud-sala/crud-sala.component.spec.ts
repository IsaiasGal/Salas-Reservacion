import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSalaComponent } from './crud-sala.component';

describe('CrudSalaComponent', () => {
  let component: CrudSalaComponent;
  let fixture: ComponentFixture<CrudSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudSalaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
