import { Component, Input } from "@angular/core";

@Component({
  selector: "event-thumbnail",
  template: ` <div
    [routerLink]="['/events', event.id]"
    class="well hoverwell thumbnail"
  >
    <h2>{{ event?.name }}</h2>
    <div>Date: {{ event?.date }}</div>
    <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
      Time: {{ event?.time }}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price:$ {{ event?.price }}</div>
    <div [hidden]="!event?.location">
      <span>Location: {{ event?.location?.address }} </span>
      <span class="pad-left"
        >{{ event?.location?.city }}, {{ event?.location?.country }}</span
      >
    </div>
    <div [hidden]="!event?.onlineUrl">Online URL: {{ event?.onlineUrl }}</div>
  </div>`,
  styles: [
    `
      .thumbnail {
        min-height: 180px;
      }
      .pad-left {
        margin-left: 10px;
      }
      .well {
        color: #bbb;
        padding: 15px;
        margin-bottom: 10px;
      }
      .green {
        color: #003300 !important;
      }
      .bold {
        font-weight: bold;
      }
    `
  ]
})
export class EventThumbnailComponent {
  @Input() event: any;

  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === "8:00 am";
    return { green: isEarlyStart, bold: isEarlyStart };
  }
}
