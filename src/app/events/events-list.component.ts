import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService } from "../commom/toastr.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./shared/index";

@Component({
  templateUrl: "./events-list.component.html"
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(
    private eventService: EventService,
    private toasterService: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.events = this.route.snapshot.data["events"];
  }

  handleThumbnailClick(eventName) {
    this.toasterService.success(eventName);
  }
}
