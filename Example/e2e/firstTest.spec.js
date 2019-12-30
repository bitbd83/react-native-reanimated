/* eslint-env detox/detox */

describe('ReanimatedExample', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have reanimated example string', async () => {
    await expect(element(by.text('🎬 Reanimated Examples'))).toBeVisible();
  });
});
