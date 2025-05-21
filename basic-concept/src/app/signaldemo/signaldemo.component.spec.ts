import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignaldemoComponent } from './signaldemo.component';

describe('SignaldemoComponent', () => {
  let component: SignaldemoComponent;
  let fixture: ComponentFixture<SignaldemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignaldemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignaldemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
