import { Directive, OnInit, OnDestroy } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { Subscription } from 'rxjs';

@Directive({
  selector: 'mat-select[searchable]',
  standalone: true,
})
export class SearchableSelectDirective implements OnInit, OnDestroy {
  private sub = new Subscription();

  constructor(private matSelect: MatSelect) {}

  ngOnInit(): void {
    this.sub = this.matSelect.openedChange.subscribe(opened => {
      if (opened) {
        setTimeout(() => this.injectSearch(), 0);
      }
    });
  }

  private injectSearch(): void {
    const panel = this.matSelect.panel?.nativeElement as HTMLElement;
    if (!panel) return;

    // Remove previous search box if any
    panel.querySelector('.select-search-box')?.remove();

    const box = document.createElement('div');
    box.className = 'select-search-box';

    const input = document.createElement('input');
    input.className = 'select-search-input';
    input.placeholder = 'Type to search...';
    input.setAttribute('autocomplete', 'off');

    input.addEventListener('keydown', e => {
      e.stopPropagation();
    });

    input.addEventListener('input', () => {
      const term = input.value.toLowerCase().trim();
      this.matSelect.options.forEach(option => {
        const el = option._getHostElement();
        if (!term) {
          el.style.display = '';
          return;
        }
        const match = option.viewValue.toLowerCase().includes(term);
        el.style.display = match ? '' : 'none';
      });
    });

    box.appendChild(input);
    panel.insertBefore(box, panel.firstChild);
    input.focus();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
