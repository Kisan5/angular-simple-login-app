import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormPageComponent } from './login-form-page.component';

describe('LoginFormPageComponent', () => {
  let component: LoginFormPageComponent;
  let fixture: ComponentFixture<LoginFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFormPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
