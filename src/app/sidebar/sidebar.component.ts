import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/home', title: 'Home', icon: 'pe-7s-home', class: '' },
  { path: '/brides', title: 'මනාලියෝ', icon: 'pe-7s-user-female', class: '' },
  { path: '/grooms', title: 'මනාලයෝ', icon: 'pe-7s-user', class: '' },
  { path: '/typography', title: 'Wedding Decoration', icon: 'pe-7s-science', class: '' },
  { path: '/icons', title: 'Wedding Halls', icon: 'pe-7s-photo', class: '' },
  { path: '/maps', title: 'Salons', icon: 'pe-7s-way', class: '' },
  { path: '/notifications', title: 'Photographes', icon: 'pe-7s-camera', class: '' },
  { path: '/upgrade', title: 'Contact Us', icon: 'pe-7s-call', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
