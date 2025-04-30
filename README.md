
# ESPAÑOL: ¡Bienvenidos a la aplicación de visitantes del Hotel y Escuela Cerrito! (English version below)

Este es un proyecto de [Expo](https://expo.dev) creado con
[`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

En esta aplicación, usamos React Native como nuestro framework, React Native Paper para nuestra interfaz de usuario, Expo Image para imágenes e i18n para ofrecer versiones en inglés y español.

Para nuestra estructura de archivos y navegación, usamos Expo Router, donde cada archivo es una pantalla, o “Screen,” debajo de un componente del cajón, o “Drawer,” principal.

Si necesitas acceso al archivo .jks, envíe un correo electrónico a Jacob Murphy a jjmurphy1@wpi.edu.

## Empezar

1. Instalar dependencias

   ```bash
   npm install
   ```

2. Empezar la app

   ```bash
    npx expo start
   ```

En la salida, encontrará opciones para abrir la aplicación en un

- [La versión de desarrollo](https://docs.expo.dev/develop/development-builds/introduction/)
- [El emulador de Android](https://docs.expo.dev/workflow/android-studio-emulator/)
- [El simulador de iOS](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), un sandbox limitado para probar el desarrollo de aplicaciones con Expo

## Construir para la utilización

Configurar la versión
 ```bash
   eas build:configure
   ```
Compile para la plataforma deseada (iOS utilizado en el ejemplo)
 ```bash
   eas build --platform ios
   ```
Enviar la versión para descargar
```bash
   eas submit --platform ios
   ```

→ Si necesitas la propiedad de EAS, contacta a Jacob Murphy a jjmurphy1@wpi.edu 
--> Para enviar la aplicación para la utilización de iOS, usamos Transporter en vez de de EAS CLI


# ENGLISH: Welcome to the Cerrito Hotel and School visitor application!

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

In this application, we use React Native as our framework, React Native Paper for our UI, Expo Image for images, and i18n to offer english and spanish versions.

For our file structure and navigation, we use Expo Router where each file is a screen under a parent drawer component.

If you need access to the .jks file, email Jacob Murphy at jjmurphy1@wpi.edu.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Build for deployment

Configure the build
 ```bash
   eas build:configure
   ```
Build for your desired platform (iOS used in the example)
 ```bash
   eas build --platform ios
   ```
Submit your build for download
```bash
   eas submit --platform ios
   ```

--> If you need EAS ownership, contact Jacob Murphy at jjmurphy1@wpi.edu 
--> For iOS deployment, we used Transporter instead of EAS CLI
