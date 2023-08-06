import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MSAL_INSTANCE, MsalModule, MsalService } from '@azure/msal-angular';
import { SharedModule } from 'src/Shared/shared.module';
import { MaterialModule } from 'src/material.module';
import { components } from '.';
import { MSALInstance } from './instances/azure-ad';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MsalModule,
    SharedModule,
  ],
  exports: [],
  declarations: [...components],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstance,
    },
    MsalService,
  ],
})
export class AuthModule {}
