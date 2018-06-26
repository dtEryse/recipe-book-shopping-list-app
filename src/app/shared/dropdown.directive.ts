import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}

/*
* Assignment: Create a directive which attaches the "open" CSS class onto a HTML element
*             whenever the element is clicked, and removes it once we click a second time.
*
*
* @Input() set appDropdown(condition: boolean) {
    this.toggled = !this.toggled;
    if (this.toggled) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  toggled: boolean = condition;

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {}
*
* */
