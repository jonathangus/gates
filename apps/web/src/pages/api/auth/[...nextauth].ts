import NextAuth from 'next-auth';
import TwitterProvider from 'next-auth/providers/twitter';
import GitHubWithAccessToken from '../../../auth/GitHubWithAccessToken';

export default NextAuth({
  providers: [
    GitHubWithAccessToken({
      clientId: '4509c42af2104db32589',
      clientSecret: '8a6c8c856b80366773f1a1682d60393f3b58136d',
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
