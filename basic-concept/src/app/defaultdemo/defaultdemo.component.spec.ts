import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultdemoComponent } from './defaultdemo.component';

describe('DefaultdemoComponent', () => {
  let component: DefaultdemoComponent;
  let fixture: ComponentFixture<DefaultdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultdemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
