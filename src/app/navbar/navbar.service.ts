import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private links = new Array<{ text: string, path: string }>();
  private isLoggedIn = new Subject<boolean>();

  constructor() { 
    this.addItem({ text: 'Login', path: '/' });
    this.isLoggedIn.next(false);
  }

  getLinks() {
    return this.links;
  }

  getLoginStatus() {
    return this.isLoggedIn;
  }

  updateLoginStatus(status: boolean) {
    this.isLoggedIn.next(status);

    if (!status) {
      this.clearAllItems();
      this.addItem({ text: 'Login', path: '/' });
    }
  }

  updateNavAfterAuth(role: string): void {
    this.removeItem({ text: 'Login' });

    if (role === 'cliente') {
      this.addItem({ text: 'Registro de menus', path: 'menu' });
      this.addItem({ text: 'historial', path: 'historial' });
      this.addItem({ text: 'contacto', path: 'contacto' });
    } else if (role === 'admin') {
      this.addItem({ text: 'Registro de pedidos', path: 'hadmin' });
      this.addItem({ text: 'Carta', path: 'madmin' });
      this.addItem({ text: 'Clientes', path: 'cadmin' });
      this.addItem({ text: 'Platos', path: 'plato' });
    }
  }

  addItem({ text, path }) {
    this.links.push({ text: text, path: path });
  }

  removeItem({ text }) {
    this.links.forEach((link, index) => {
      if (link.text === text) {
        this.links.splice(index, 1);
      }
    });
  }

  clearAllItems() {
    this.links.length = 0;
  }
}
