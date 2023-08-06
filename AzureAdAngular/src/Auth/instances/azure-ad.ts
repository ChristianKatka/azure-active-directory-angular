import {
  IPublicClientApplication,
  PublicClientApplication,
} from '@azure/msal-browser';

export const MSALInstance = (): IPublicClientApplication => {
  return new PublicClientApplication({
    auth: {
      clientId: '',
      authority: '',
      redirectUri: 'http://localhost:4200',
      postLogoutRedirectUri: 'http://localhost:4200',
    },
  });
};
