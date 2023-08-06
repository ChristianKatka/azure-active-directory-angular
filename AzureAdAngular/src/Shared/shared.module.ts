import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { components } from '.';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [...components],
  exports: [...components],
  providers: [],
  bootstrap: [],
  entryComponents: [],
})
export class SharedModule {}
