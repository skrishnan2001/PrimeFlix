import 'dotenv/config';

export default {
  name: 'PrimeFlix',
  slug: 'PrimeFlix',
  description:
    "Find movies & tv shows guide recommendations - Looking for a movie or series idea for tonight? PrimeFlix is the simplest and fastest way to discover movies, series and actors. It's an application based on themoviedb (TMDb)database.",
  version: '1.0.0',
  orientation: 'portrait',
  githubUrl: 'https://github.com/skrishnan2001/PrimeFlix',
  icon: 'src/assets/icon.png',
  splash: {
    image: 'src/assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#121418'
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: false
  },
  android: {
    adaptiveIcon: {
      foregroundImage: 'src/assets/adaptive-icon.png',
      backgroundColor: '#121418'
    },
    package: 'com.skrishnan.PrimeFlix',
    playStoreUrl: '',
    versionCode: 3
  },
  web: {
    favicon: 'src/assets/favicon.png'
  },
  extra: {
    eas: {
      projectId: '7f427b3f-a23a-4e31-a68e-ccead8308bcf'
    },
    theMovieDbApiKey: process.env.THEMOVIEDB_API_KEY
  }
};
