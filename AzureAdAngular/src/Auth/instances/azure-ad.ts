import {
  IPublicClientApplication,
  PublicClientApplication,
} from '@azure/msal-browser';

export const MSALInstance = (): IPublicClientApplication => {
  return new PublicClientApplication({
    auth: {
      clientId: '<Enter_The_Application_Id_here>',
      authority:
        'https://login.microsoftonline.com/<Enter_The_Tenant_Info_Here>',
      redirectUri: 'http://localhost:4200',
      postLogoutRedirectUri: 'http://localhost:4200',
    },
  });
};
