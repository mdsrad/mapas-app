import { Component } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { Feature } from '../../interfaces/places';
import { MapService } from '../../services';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {

  public selectedId: string = '';

  constructor(
    private placesService: PlacesService,
    private mapService: MapService,
  ){}

  get isLoadinPlaces(): boolean {
    return this.placesService.isLoadingPlaces;
  }

  get places(): Feature[] {
    return this.placesService.places;
  }


  flyTo( place: Feature ){
    this.selectedId = place.id;

    const [lng, lat] = place.center
    this.mapService.flyTo([ lng, lat ])
  }

  getDirections( place: Feature ){

    if ( !this.placesService.userLocation ) throw Error('No hay userLocation');

    this.placesService.deletePLaces();

    const start = this.placesService.userLocation;
    const end = place.center as [number, number]

    this.mapService.getRouteBetweenPoints(start, end);

  }
}
