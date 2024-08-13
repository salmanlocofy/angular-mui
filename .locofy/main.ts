
    import {
      importProvidersFrom,
      NgModule,
      AfterViewChecked,
      AfterViewInit,
      Component,
      ElementRef,
      Input,
    } from '@angular/core';
    import { provideRouter } from '@angular/router';
    import { createCustomElement } from '@angular/elements';
    import { BrowserModule, createApplication } from '@angular/platform-browser';
    import { CommonModule } from '@angular/common';
    import { MuiButtonComponent } from '../src/app/components/mui-button/mui-button.component';;
import { MuiInputComponent } from '../src/app/components/mui-input/mui-input.component';

    @NgModule({
      imports: [BrowserModule, CommonModule],
      providers: [],
      bootstrap: [],
    })
    class LocofyAppModule {}

    
  @Component({
    selector: 'locofy-app-inner-wrapper',
    template: '<ng-content></ng-content>',
  })
  export class LocofyAppWrapper implements AfterViewInit, AfterViewChecked {
    @Input() cdnUrl: string = 'https://d3beo87skfz9b9.cloudfront.net/66bafb128a3774a429eae195';

    constructor(private elementRef: ElementRef) {}

    cachedImages = new Map<string, string>();
    fetching: string[] = [];

    ngAfterViewInit() {
      this.replaceImageSrcWithCDN();
    }

    ngAfterViewChecked() {
      this.replaceImageSrcWithCDN();
    }

    replaceImageSrcWithCDN() {
      const images: NodeListOf<HTMLImageElement> = this.elementRef.nativeElement.querySelectorAll('img');
      
      images.forEach((img) => {
        const src =
          img.getAttribute('src') ||
          img.getAttribute('ngSrc') ||
          img.getAttribute('ngsrc');

        const cache = typeof src === 'string' && this.cachedImages.get(src);
        if (cache) {
          if (cache !== 'failed') { 
            img.setAttribute('src', cache);
          }
          return;
        }

        if (typeof src !== 'string' || (src.startsWith('http') || src.startsWith('data:'))) {
          return;
        }

        const locofySrc = "https://d3beo87skfz9b9.cloudfront.net/66bafb128a3774a429eae195" + (src.startsWith('/') ? src : '/' + src);
        if (this.fetching.includes(locofySrc)) return;

        this.fetching.push(locofySrc);

        fetch(locofySrc).then((res) => {
          if (res.status === 200) {
            this.cachedImages.set(src, locofySrc);
            img.setAttribute('src', locofySrc);
          } else {
            this.cachedImages.set(src, 'failed');
          }
        });
      });
    }
  }
  

    async function webComponentApp() {
      const app = await createApplication({
        providers: [
          importProvidersFrom(LocofyAppModule),
          provideRouter([
            { path: '', component: MuiButtonComponent, pathMatch: 'full' }, { path: '', component: MuiInputComponent, pathMatch: 'full' }
          ]),
        ],
      });

      
      const ele0 = createCustomElement(MuiButtonComponent, {
        injector: app.injector,
      });
      customElements.define("locofy-mui-button", ele0);
    

      const ele1 = createCustomElement(MuiInputComponent, {
        injector: app.injector,
      });
      customElements.define("locofy-mui-input", ele1);
    

      const locofyAppWrapper = createCustomElement(LocofyAppWrapper, {
        injector: app.injector,
      });
      customElements.define("locofy-app-wrapper", locofyAppWrapper);
    
    }

    (async function () {
      await webComponentApp();
    })();
  