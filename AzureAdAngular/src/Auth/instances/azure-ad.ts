import {
  IPublicClientApplication,
  PublicClientApplication,
} from '@azure/msal-browser';

export const MSALInstance = (): IPublicClientApplication => {
  return new PublicClientApplication({
    auth: {
      clientId: '<Enter_The_Application_client_ID_HERE>',
      authority:
        'https://login.microsoftonline.com/<Enter_The_Directory_tenant_ID_HERE>',
      redirectUri: 'http://localhost:4200',
      postLogoutRedirectUri: 'http://localhost:4200',
    },
  });
};
