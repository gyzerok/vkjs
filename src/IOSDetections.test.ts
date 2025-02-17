import { describe, expect, test } from '@jest/globals';
import { detectIOS } from './IOSDetections';

describe(detectIOS, () => {
  test.each<[Parameters<typeof detectIOS>[0], ReturnType<typeof detectIOS>]>([
    [
      undefined,
      {
        isIPad: false,
        isIPhone: false,
        isIOS: false,
        isIPadOS: false,
        iosMajor: 0,
        iosMinor: 0,
        isWKWebView: false,
        isScrollBasedViewport: true,
        isIPhoneX: false,
        isIOSChrome: false,
      },
    ],
    [
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15',
      {
        isIPad: false,
        isIPhone: false,
        isIOS: false,
        isIPadOS: false,
        iosMajor: 0,
        iosMinor: 0,
        isWKWebView: false,
        isScrollBasedViewport: true,
        isIPhoneX: false,
        isIOSChrome: false,
      },
    ],
    // IPhone
    [
      'Mozilla/5.0 (iPhone; CPU iPhone OS 16_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Mobile/15E148 Safari/604.1',
      {
        isIPad: false,
        isIPhone: true,
        isIOS: true,
        isIPadOS: false,
        iosMajor: 16,
        iosMinor: 4,
        isWKWebView: false,
        isScrollBasedViewport: false,
        isIPhoneX: false,
        isIOSChrome: false,
      },
    ],
    [
      'Mozilla/5.0 (iPhone; CPU iPhone OS 16_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/112.0.5615.46 Mobile/15E148 Safari/604.1',
      {
        isIPad: false,
        isIPhone: true,
        isIOS: true,
        isIPadOS: false,
        iosMajor: 16,
        iosMinor: 4,
        isWKWebView: false,
        isScrollBasedViewport: false,
        isIPhoneX: false,
        isIOSChrome: true,
      },
    ],
    [
      'Mozilla/5.0 (iPhone; CPU iPhone OS 16_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/111.0 Mobile/15E148 Safari/605.1.15',
      {
        isIPad: false,
        isIPhone: true,
        isIOS: true,
        isIPadOS: false,
        iosMajor: 16,
        iosMinor: 4,
        isWKWebView: false,
        isScrollBasedViewport: false,
        isIPhoneX: false,
        isIOSChrome: false,
      },
    ],
    // IPad old
    [
      'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10',
      {
        isIPad: true,
        isIPhone: false,
        isIOS: true,
        isIPadOS: false,
        iosMajor: 3,
        iosMinor: 2,
        isWKWebView: false,
        isScrollBasedViewport: true,
        isIPhoneX: false,
        isIOSChrome: false,
      },
    ],
  ])('detectIOS(%s)', (ua, expected) => {
    expect(detectIOS(ua)).toStrictEqual(expected);
  });
});
