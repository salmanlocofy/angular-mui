
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
    import { AppWrapperComponent } from '../src/app/app-wrapper/app-wrapper.component';;
import { MuiButtonComponent } from '../src/app/components/mui-button/mui-button.component';

    @NgModule({
      imports: [BrowserModule, CommonModule],
      declarations: [],
      exports: [], 
      providers: [],
      bootstrap: [],
    })
    class LocofyAppModule {}

    
  @Component({
    selector: 'locofy-app-inner-wrapper-66bf68f490efaf86dc002ecc',
    template: '<ng-content></ng-content>',
  })
  export class LocofyAppWrapper66bf68f490efaf86dc002ecc implements AfterViewInit, AfterViewChecked {
    @Input() cdnUrl: string = 'https://d3beo87skfz9b9.cloudfront.net/66bf68f490efaf86dc002ecc';

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

        const locofySrc = "https://d3beo87skfz9b9.cloudfront.net/66bf68f490efaf86dc002ecc" + (src.startsWith('/') ? src : '/' + src);
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
            { path: '', component: AppWrapperComponent, pathMatch: 'full' }, { path: '', component: MuiButtonComponent, pathMatch: 'full' }
          ]),
        ],
      });

      
      const eleAppWrapperComponent = createCustomElement(AppWrapperComponent, {
        injector: app.injector,
      });
      customElements.define("app-wrapper-66bf68f490efaf86dc002ecc", eleAppWrapperComponent);
    

      const ele0 = createCustomElement(MuiButtonComponent, {
        injector: app.injector,
      });
      customElements.define("mui-button-66bf68f490efaf86dc002ecc", ele0);
    

      const LocofyAppWrapper = createCustomElement(LocofyAppWrapper66bf68f490efaf86dc002ecc, {
        injector: app.injector,
      });
      customElements.define("locofy-image-wrapper-66bf68f490efaf86dc002ecc", LocofyAppWrapper);
    
    }

    (async function () {
      await webComponentApp();
    })();
  