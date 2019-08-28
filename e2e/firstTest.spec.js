describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have buttons on welcome screen', async () => {
    await expect(element(by.id('welcomeScreen'))).toBeVisible();
    await expect(element(by.id('getStartedButton'))).toBeVisible();
    await expect(element(by.id('signInButton'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('signInButton')).tap();
    await expect(element(by.id('signInScreen'))).toBeVisible();
    await expect(element(by.id('signInButton'))).toBeVisible();
  });

});
