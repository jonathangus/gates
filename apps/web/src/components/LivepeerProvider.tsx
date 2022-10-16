import {
  LivepeerConfig,
  ThemeConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';

const client = createReactClient({
  provider: studioProvider({ apiKey: process.env.NEXT_PUBLIC_STUDIO_KEY }),
});

const livepeerTheme: ThemeConfig = {
  colors: {
    accent: 'rgb(0, 145, 255)',
    containerBorderColor: 'rgba(0, 145, 255, 0.9)',
  },
  fonts: {
    display: 'Inter',
  },
};
console.log({ apiKey: process.env.NEXT_PUBLIC_STUDIO_KEY });

const LivepeerProvider = ({ children }) => {
  return (
    <LivepeerConfig client={client} theme={livepeerTheme}>
      {children}
    </LivepeerConfig>
  );
};

export default LivepeerProvider;
