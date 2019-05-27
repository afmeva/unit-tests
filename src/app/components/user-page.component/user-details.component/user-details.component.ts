import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
class UserDetailsComponent {
  @Input() user: User = {} as User;
}

export default UserDetailsComponent;
