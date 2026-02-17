import { Component, input, output } from '@angular/core';

////////////////////////////////////////////////////////////////////////////////
// CHILD COMPONENT
////////////////////////////////////////////////////////////////////////////////

@Component({
  selector: 'app-user',
  standalone: true,
  template: `
    <p>The user's name is {{ name() }}</p>

    <button (click)="addItem()">Add item</button>
  `
})
export class User {

  // input (как было)
  name = input<string>();

  // output — создаём событие
  addItemEvent = output<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}

////////////////////////////////////////////////////////////////////////////////
// PARENT COMPONENT
////////////////////////////////////////////////////////////////////////////////

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [User],
  template: `
    Hello {{ city }}

    <hr>

    <!-- список элементов -->
    @for (item of items; track $index) {
      <p>{{ item }}</p>
    }

    <hr>

    <!-- слушаем событие -->
    <app-user
      name="Anel"
      (addItemEvent)="addItem($event)">
    </app-user>
  `
})
export class App {

  city = 'San Francisco';

  // массив, куда будем добавлять элементы
  items: string[] = [];

  // метод родителя
  addItem(newItem: string) {
    this.items.push(newItem);
  }
}

@Component({
  selector: 'comments',
  standalone: true,
  template: `
    <h3>Comments</h3>
    <p>💬 First comment!</p>
    <p>💬 Angular is amazing!</p>
    <p>💬 I love deferrable views!</p>
  `
})
export class Comments {}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Comments],
  template: `
    <h1>My Blog Post</h1>

    <article>
      <p>
        Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
        feature that makes defer loading content the easiest and most ergonomic it could possibly be.
        The Angular community is also filled with amazing contributors and experts that create excellent
        content.
      </p>
      <p>
        I can't express enough how much I enjoy working with Angular. It offers the best developer
        experience I've ever had. I love that the Angular team puts their developers first.
      </p>
      <p>
        Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
        feature that makes defer loading content the easiest and most ergonomic it could possibly be.
      </p>
      <p>
        I can't express enough how much I enjoy working with Angular. It offers the best developer
        experience I've ever had.
      </p>
      <p>
        Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
        feature that makes defer loading content the easiest and most ergonomic it could possibly be.
      </p>
      <p>
        I can't express enough how much I enjoy working with Angular.
      </p>
    </article>

    <hr>

    @defer (on viewport) {
      <comments />
    } @placeholder {
      <p>Future comments</p>
    } @loading (minimum 2s) {
      <p>Loading comments...</p>
    }
  `
})