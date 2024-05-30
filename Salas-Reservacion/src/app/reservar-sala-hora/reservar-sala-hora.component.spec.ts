import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarSalaHoraComponent } from './reservar-sala-hora.component';

describe('ReservarSalaHoraComponent', () => {
  let component: ReservarSalaHoraComponent;
  let fixture: ComponentFixture<ReservarSalaHoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservarSalaHoraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservarSalaHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
