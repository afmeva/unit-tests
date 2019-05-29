import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import UserDetailsComponent from './user-details.component';
import { By } from '@angular/platform-browser';

describe('myComponent', () => {
  let fixture: ComponentFixture<UserDetailsComponent>;
  let component: UserDetailsComponent;

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
      declarations: [UserDetailsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.debugElement.componentInstance;

    component.user = userMock;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render name', () => {
    const cardTitle = fixture.debugElement.query(By.css('.card-title'))
      .nativeElement;

    expect(cardTitle.innerHTML).toBe(userMock.name);
  });

  it('should render name', () => {
    const cardTitle = fixture.debugElement.query(By.css('.card-text'))
      .nativeElement;

    expect(cardTitle.innerHTML).toContain(userMock.title);
  });
});
