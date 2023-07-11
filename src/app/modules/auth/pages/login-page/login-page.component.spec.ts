import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent, SideBarComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //* Invalid data form
  it('Invalid form', () => {
    //? Arrange
    const mockCredentials = {
      email: 'test.com',
      password: 'credentialsTestInvalid',
    };

    const emailForm: any = component.formLogin.get('email');
    const passwordForm: any = component.formLogin.get('password');

    //? Act
    emailForm.setValue(mockCredentials.email);
    passwordForm.setValue(mockCredentials.password);

    //? Assert
    expect(component.formLogin.invalid).toEqual(true);
  });

  //* Valid data form
  it('Valid form', () => {
    //? Arrage
    const mockCredentials = {
      email: 'test@test.com',
      password: 'prueba123',
    };

    const emailForm: any = component.formLogin.get('email');
    const passwordForm: any = component.formLogin.get('password');

    //? Act
    emailForm.setValue(mockCredentials.email);
    passwordForm.setValue(mockCredentials.password);

    //? Assert
    expect(component.formLogin.invalid).toEqual(false);
  });
});
