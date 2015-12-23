import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'
import {NgFor, NgIf} from 'angular2/common';
import {FriendsService} from 'services/friends.service';
@Component({
  selector: 'display',
  bindings: [FriendsService]
})
@View({
	templateUrl: "templates/show-properties.html",
	directives: [NgFor, NgIf]
})

export class DisplayComponent {
  myName: string;
  names: Array<string>;
  constructor(friendsService: FriendsService) {
    this.myName = "Alice";
	this.names = friendsService.names;

  }
}
bootstrap(DisplayComponent);




