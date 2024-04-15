import RingCentral from '@rc-ex/core';
import DebugExtension from '@rc-ex/debug';

const rc = new RingCentral({
  server: process.env.RINGCENTRAL_SERVER_URL,
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
});

const main = async () => {
  const debugExtension = new DebugExtension();
  await rc.installExtension(debugExtension);

  // Get token
  await rc.getToken({
    grant_type: 'otp',
    username: process.env.RINGCENTRAL_USERNAME!,
    code: '701159', // get this OTP code from your email
  });
};
main();
