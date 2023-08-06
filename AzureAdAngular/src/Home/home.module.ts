import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { components } from '.';
import { MaterialModule } from '../material.module';
import { SharedModule } from 'src/Shared/shared.module';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, SharedModule],

  declarations: [...components],
  entryComponents: [],
  exports: [...components],
})
export class HomeModule {}
