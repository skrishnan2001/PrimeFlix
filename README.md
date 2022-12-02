# PrimeFlix
Find movies & TV shows and get recommendations - Looking for a movie or series idea for tonight? PrimeFlix is the simplest and fastest way to discover movies, series and actors. It's an application based on themoviedb (TMDb) database.

![alt image](https://user-images.githubusercontent.com/50322149/149024555-ebc3d433-a2db-423d-b162-cfe52ff9faf4.png)

---

[![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/)

## Running the app in Expo

1. Clone the repository
2. Create your own api key from [themoviedb](https://developers.themoviedb.org/)
3. Add `THEMOVIEDB_API_KEY` key on your EAS secrets
4. create a `.env` (see the example file)
5. Install the required dependencies using the command
```
npm install
```
6. Replace the firebase.ts present in ```src/config``` folder with your firebase config file. 
7. To run the app in expo, use the command
```
npm start
```

## To Build the APK

- To build the APK for android devices, use the command:
```
eas build -p android --profile preview
```

