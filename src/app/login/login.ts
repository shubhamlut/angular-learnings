import { NgFor } from "@angular/common";
import {
  Component,
  computed,
  effect,
  Signal,
  signal,
  WritableSignal,
} from "@angular/core";
import { FormsModule, NgForm, NgModel } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-login",
  imports: [FormsModule, NgFor, RouterLink],
  templateUrl: "./login.html",
  styleUrl: "./login.css",
})
export class Login {
  name = "";
  displayName = "";
  display = false;
  students = [
    { name: "Shubham Lutade", id: 1 },
    { name: "Yash Lutade", id: 2 },
    { name: "Anaysha Lutade", id: 3 },
  ];

  count = signal(10);
  counter: WritableSignal<number | string> = signal(23);
  data: Signal<number> = computed(() => 13); //Computer signals can't be updated manuall by it gets automatically updated if its dependency value are update

  x = signal(10);
  y = signal(20);
  z = computed(() => this.x() + this.y());

  constructor() {
    effect(() => {
      console.log("Effect inside the constructor called", this.count());
    });
  }
  handleClick() {
    console.log("Button clicked !");
  }

  handleInput(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  showName() {
    this.displayName = this.name;
  }

  toggleDisplay(show: boolean) {
    console.log(show);
    this.display = !show;
  }

  updateCounter() {
    this.counter.set("hello signal");
  }

  updateX() {
    this.x.set(this.x() + 1);
  }
}
// The process of using Two way data binding

// 1, Import the FormModule inside the .ts File
//  2. in the .html file use [{ngModel}]="variable which you want to bind"
