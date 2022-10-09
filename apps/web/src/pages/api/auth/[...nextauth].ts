import NextAuth from 'next-auth';
import TwitterProvider from 'next-auth/providers/twitter';
import GitHubWithAccessToken from '../../../auth/GitHubWithAccessToken';

export default NextAuth({
  providers: [
    GitHubWithAccessToken({
      clientId: '30fab8d12e8772999137',
      clientSecret: '79aac33a220e915bd8853b0ed7d6b08d6fbf67dd',
      authorization: {
        params: { scope: 'repo' },
      },
    }),
    // TwitterProvider({
    //   clientId: process.env.TWITTER_CLIENT_ID,
    //   clientSecret: process.env.TWITTER_CLIENT_SECRET,
    // }),
  ],
});
