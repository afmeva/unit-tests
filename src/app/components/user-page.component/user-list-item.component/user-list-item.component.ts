import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';

import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html'
})
class UserListItemComponent {
  @Input() user: User;
  @Output() userSelected = new EventEmitter();

  @HostListener('click')
  handleClick(): void {
    this.userSelected.emit({
      ...this.user
    });
  }
}

export default UserListItemComponent;
