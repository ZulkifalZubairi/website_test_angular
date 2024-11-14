import { Component, HostListener, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private renderer: Renderer2) {}

  // Listen to the scroll event on the window
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.navbar');  // or use a specific selector if necessary
    if (window.scrollY > 50) {  // Threshold for scroll
      this.renderer.addClass(navbar, 'scrolled');
    } else {
      this.renderer.removeClass(navbar, 'scrolled');
    }
  }
  @Input() activeSection: string = ''; // Receives the active section ID
  submenuVisible: boolean = false; // Toggle submenu visibility

  @Input() showSubMenu: boolean = false;
  @Input() logo: string = 'assets/img/logo-full.svg';

  ngOnChanges(): void {
    // Toggle submenu visibility based on active section presence
    this.submenuVisible = this.showSubMenu;
  }
  
}
