import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimations(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-4bcc9","appId":"1:1031839174173:web:5aa9eb232c014c280480f4","storageBucket":"ring-of-fire-4bcc9.appspot.com","apiKey":"AIzaSyDX2tAvsJ1nNcSemONDPkjZr0fHjtESYW0","authDomain":"ring-of-fire-4bcc9.firebaseapp.com","messagingSenderId":"1031839174173"}))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase()))]
};
