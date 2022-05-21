import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '8bit-gg';

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    window.addEventListener('scroll', this.scrolling, true)
  }
  scrolling=()=>{
    var myTag = this.el.nativeElement.querySelector("nav");
    if (window.pageYOffset > 100) {
      myTag.classList.add('bg-dark', 'shadow');
    } else {
      myTag.classList.remove('bg-dark', 'shadow');
    }
  }
}
