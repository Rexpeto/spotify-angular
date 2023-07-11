import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import * as mockRaw from '../../../data/user.json';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser: any = (mockRaw as any).default;
  let httpClientSpy: { post: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new AuthService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //* Testing of sendCredetials
  it('Testing valid of sendCredetials', (done: DoneFn) => {
    //? Arrage
    const user: any = mockUser.userOk;
    const mockRes: any = {
      data: {},
      tokenSession:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODkwODcxMDUsImV4cCI6MTY4OTA5NDMwNX0.ojWf4EjMYmdX7Dj4KLbKa3qpPcpoySIRw8C_3Yf6_5g',
    };

    httpClientSpy.post.and.returnValue(of(mockRes));

    //? Act
    service.sendCredential(user.email, user.password).subscribe((resApi) => {
      const getProperties = Object.keys(resApi);
      expect(getProperties).toContain('data');
      expect(getProperties).toContain('tokenSession');
      done();
    });

    //? Assert
  });
});
