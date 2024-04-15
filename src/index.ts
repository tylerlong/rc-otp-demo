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

  // Initiate OTP
  // await rc.post(
  //   '/restapi/oauth/initiate-otp',
  //   {
  //     username: process.env.RINGCENTRAL_USERNAME!, // format: +16588888888*101
  //   },
  //   undefined,
  //   {
  //     auth: {
  //       username: process.env.RINGCENTRAL_CLIENT_ID!,
  //       password: process.env.RINGCENTRAL_CLIENT_SECRET!,
  //     },
  //   },
  // );

  // Get token
  await rc.getToken({
    grant_type: 'otp',
    username: process.env.RINGCENTRAL_USERNAME!,
    code: '879844', // get this code from your email
  });
};
main();
