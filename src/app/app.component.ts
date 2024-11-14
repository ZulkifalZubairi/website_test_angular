import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FooterComponent } from './components/footer/footer.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent, MainContentComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Home - Starwall';
  activeSection: string = '';
  showSubMenu: boolean = false;
  logo: string = 'assets/img/logo-full.svg'; // Default logo for the top of the page

  // Handle emitted section visibility data
  handleSectionInView(event: { sectionId: string, showSubMenu: boolean, logo: string }): void {
    this.activeSection = event.sectionId;
    this.showSubMenu = event.showSubMenu;
    this.logo = event.logo;
    
    console.log('Section in view:', event.sectionId);
  }
}
// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './components/header/header.component';
// import { MainContentComponent } from './components/main-content/main-content.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, HeaderComponent, MainContentComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent {
//   title = 'Home - Starwall';
//   activeSection: string = '';
//   showSubMenu: boolean = false;
//   logo: string = 'assets/img/logo-full.svg';

//   // Handle emitted section visibility data
//   handleSectionInView(event: { sectionId: string, showSubMenu: boolean, logo: string }): void {
//     this.activeSection = event.sectionId;
//     this.showSubMenu = event.showSubMenu;
//     this.logo = event.logo;
//     console.log('Section in view:', event.sectionId);
//   }
// }
