import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'obfuscate-link',
  outputTargets: [
    {
      type: 'dist-custom-elements',
    }
  ],
  testing: {
    browserHeadless: "new",
  },
};
