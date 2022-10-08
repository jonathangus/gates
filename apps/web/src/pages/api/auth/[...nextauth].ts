import NextAuth from 'next-auth';
import TwitterProvider from 'next-auth/providers/twitter';
import GitHubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: '4509c42af2104db32589',
      clientSecret: '8a6c8c856b80366773f1a1682d60393f3b58136d',
    }),
    TwitterProvider({
      clientId: '',
      clientSecret: '',
    }),
  ],
});
