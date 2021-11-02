import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Person } from 'src/app/Model/Person';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  person:Person = new Person;
  constructor() { }

  map: mapboxgl.Map;

  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mapBoxToken;
    let q:string=localStorage.getItem("person");

    const mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
    mapboxClient.geocoding
    .forwardGeocode({
    query: q,
    autocomplete: false,
    limit: 1
    })
    .send()
    .then((response) => {
if (
!response ||
!response.body ||
!response.body.features ||
!response.body.features.length
) {
console.error('Invalid response:');
console.error(response);
return;
}
const feature = response.body.features[0];

localStorage.setItem("lng", feature.center[0])
localStorage.setItem("lat", feature.center[1])

    this.map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: feature.center, // starting position [lng, lat]
    zoom: 10 // starting zoom
});

new mapboxgl.Marker().setLngLat(feature.center).addTo(this.map);
  });
    
}

}
