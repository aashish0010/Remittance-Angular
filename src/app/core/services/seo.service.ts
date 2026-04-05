import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly appName = 'RemitAdmin';

  constructor(private title: Title, private meta: Meta) {}

  setPage(pageTitle: string, description?: string): void {
    this.title.setTitle(`${pageTitle} | ${this.appName}`);
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
    }
  }
}
