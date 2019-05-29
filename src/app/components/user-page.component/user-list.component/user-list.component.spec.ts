import {
  TestBed,
  async,
  ComponentFixture,
  fakeAsync,
  tick
} from '@angular/core/testing';
import UserListComponent from './user-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import UserService from 'src/app/services/user.service';
import { of } from 'rxjs';

fdescribe('', () => {
  let fixture: ComponentFixture<UserListComponent>;
  let component: UserListComponent;

  const userMock = {
    id: 1,
    name: 'lala',
    username: 'lele',
    email: 'lala@mail.com',
    title: 'dummy titlle',
    url: 'url',
    thumbnailUrl: 'thumbnail-url'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [
        {
          provide: UserService,
          useValue: {
            getUser() {
              return of([userMock]);
            }
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.debugElement.componentInstance;

    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should  pick a random user when button is clicked (async)', async(() => {
    const button = fixture.debugElement.nativeElement.querySelector('button');

    button.click();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.currentUser).toEqual(userMock);
    });
  }));

  it('should  pick a random user when button is clicked (fakeAsync)', fakeAsync(() => {
    const button = fixture.debugElement.nativeElement.querySelector('button');

    button.click();
    fixture.detectChanges();

    tick(1000);

    expect(component.currentUser).toEqual(userMock);
  }));
});
