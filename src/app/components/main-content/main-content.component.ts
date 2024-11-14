import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent implements OnInit, AfterViewInit{
    @Output() sectionInView = new EventEmitter<{ sectionId: string, showSubMenu: boolean, logo: string }>();

  ngOnInit(): void {
    AOS.init();

    // Define options for Intersection Observer
    const options = {
      root: null,
      threshold: 0.5
    };

    // Initialize Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const sectionId = entry.target.getAttribute('id'); // Get id directly as an attribute

        if (entry.isIntersecting && sectionId) { // Only if sectionId is valid
          console.log(`Section in view: ${sectionId}`);
          this.sectionInView.emit({
            sectionId,
            showSubMenu: ['product-1', 'product-2', 'product-3', 'product-4'].includes(sectionId),
            logo: 'assets/img/logo-small.svg'
          });
        } else if (sectionId === 'product-1' && !entry.isIntersecting) {
          // Default behavior when 'product-1' exits view
          console.log(`Exiting section: ${sectionId}`);
          this.sectionInView.emit({
            sectionId: '',
            showSubMenu: false,
            logo: 'assets/img/logo-full.svg'
          });
        } else if (!sectionId) {
          // Log warning if sectionId is empty or undefined
          console.warn("Empty or undefined section ID detected, skipping entry.");
        }
      });
    }, options);

    // Observe only sections with an id
    document.querySelectorAll('section[id]').forEach((section) => {
      if (section.getAttribute('id')) { // Double-check that the section has a non-empty id
        observer.observe(section);
      } else {
        console.warn("Skipping section without ID:", section);
      }
    });
  }


  ngAfterViewInit(): void {
    this.setupHoverEffect();
  }
  
  private setupHoverEffect(): void {
    // Select all 'span' elements inside 'li' elements inside '.left ul'
    const listItems = document.querySelectorAll('.left ul li span');

    // Loop through each list item and add the event listener
    listItems.forEach((item: Element) => {
      // Explicitly cast the 'item' as HTMLElement
      const htmlItem = item as HTMLElement;
      
      htmlItem.addEventListener('mouseover', () => {
        // Remove 'selected' class from all list items
        document.querySelectorAll('.left ul li span').forEach((li: Element) => {
          // Explicitly cast 'li' as HTMLElement to access 'classList'
          const htmlLi = li as HTMLElement;
          htmlLi.classList.remove('selected');
        });

        // Add 'selected' class to the hovered list item
        htmlItem.classList.add('selected');

        // Hide and remove animation from all content divs
        document.querySelectorAll('.content').forEach((content: Element) => {
          const htmlContent = content as HTMLElement;
          htmlContent.classList.remove('active');
          htmlContent.style.animation = 'none'; // Reset animation
        });

        // Show the relevant content based on the data-content attribute
        const contentId = `content-${htmlItem.getAttribute('data-content')}`;
        const contentElement = document.getElementById(contentId);
        if (contentElement) {
          contentElement.classList.add('active');

          // Force reflow to restart animation
          void contentElement.offsetWidth;
          contentElement.style.animation = 'fadeSlideIn 1s ease forwards';
        }
      });
    });
  }
// for product 1
  activeIndex: number = 0;  // Initially set to the first item

  // Method to set the active index on hover
  setActive(index: number) {
    this.activeIndex = index;
  }

  // for product 2
  activeIndexProduct2: number = 0;  // Initially set to the first item

  // Method to set the active index on hover
  setActiveP2(index: number) {
    this.activeIndexProduct2 = index;
  }

  // for product 3
  activeIndexProduct3: number = 0;  // Initially set to the first item

  // Method to set the active index on hover
  setActiveP3(index: number) {
    this.activeIndexProduct3 = index;
  }
  
  // for product 4
  activeIndexProduct4: number = 0;  // Initially set to the first item

  // Method to set the active index on hover
  setActiveP4(index: number) {
    this.activeIndexProduct4 = index;
  }

  doNothing() {
    // Empty function or placeholder
  }

  scrollToSection(sectionId: string) {
    // Find the target section by its ID
    const element = document.getElementById(sectionId);

    if (element) {
      // Calculate the scroll position with an offset
      const yOffset = -100; // Adjust this value as needed
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      // Scroll smoothly to the calculated position
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  }
}
