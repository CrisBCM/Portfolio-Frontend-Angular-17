import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-shared-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './shared-header.component.html',
  styleUrl: './shared-header.component.scss'
})
export class SharedHeaderComponent {
  isLanguageDropDownOpen:boolean = false;

  constructor(private translate:TranslateService){

  }

  switchLanguageDropDown(){
    this.isLanguageDropDownOpen = this.isLanguageDropDownOpen ? false : true;
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    this.isLanguageDropDownOpen = false;
}
}
