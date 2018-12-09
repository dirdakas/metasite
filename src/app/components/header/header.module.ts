import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { UserNavComponent } from './components/user-nav/user-nav.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    SearchBarComponent,
    UserNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent],
})
export class HeaderModule { }
