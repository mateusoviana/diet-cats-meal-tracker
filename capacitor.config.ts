import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dietcats.mealtracker',
  appName: 'diet-cats-meal-tracker',
  webDir: 'dist',
  // Using default Capacitor server settings; no external URL
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
  },
};

export default config;
