import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1IjoibWRzcmFkIiwiYSI6ImNsaWY0aDNsNjBzaDYzbHFmM2lmZnpseWkifQ._kx5ig53HLAF-LnbVXKQVA';


if ( !navigator.geolocation){
  alert('Navegador no soporta el Geolocation');
  throw new Error('Navegador no soporta el Geolocation');

}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
