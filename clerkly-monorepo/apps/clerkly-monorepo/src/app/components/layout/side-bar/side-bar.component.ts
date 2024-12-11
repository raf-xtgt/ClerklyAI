import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent implements OnInit {
  isExpanded = false;
  isMobile = false;

  ngOnInit(): void {
    this.updateScreenSize();
  }

  toggleSidebar(): void {
    this.isExpanded = !this.isExpanded;
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.updateScreenSize();
  }

  private updateScreenSize(): void {
    this.isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed
    if (this.isMobile) {
      this.isExpanded = false; // Ensure the sidebar is collapsed initially on mobile
    }
  }
}
