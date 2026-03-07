export class UserPrefs {
  private static readonly _identityTokenKey = 'user/identityToken';

  getIdentityToken(): string | null {
    return localStorage.getItem(UserPrefs._identityTokenKey);
  }

  setIdentityToken(token: string | null): void {
    if (token) {
      localStorage.setItem(UserPrefs._identityTokenKey, token);
    } else {
      localStorage.removeItem(UserPrefs._identityTokenKey);
    }
  }
}