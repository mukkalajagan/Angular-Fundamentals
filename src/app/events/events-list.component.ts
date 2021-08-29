import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService } from "../commom/toastr.service";

@Component({
  templateUrl: "./events-list.component.html"
})
export class EventsListComponent implements OnInit {
  events: any;
  constructor(
    private eventService: EventService,
    private toasterService: ToastrService
  ) {}

  ngOnInit() {
    this.eventService.getEvents().subscribe((events) => {
      this.events = events;
    });
  }

  handleThumbnailClick(eventName) {
    this.toasterService.success(eventName);
  }
}
