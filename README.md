# Austin Bike Comfort Routes

The hosted copy of the Austin bike route planner: **https://saulbanov.github.io/austin-bike-routes/**

Open the address on a phone, then Share > Add to Home Screen. The planner draws a route between
two places over the streets, trails and paths the City of Austin rates comfortable for bikes,
marks the high-crash junctions and exposed streets along the way, names the next turn and speaks
it while you ride, and hands the route to Google Maps.

Every file here is written by `biking/scripts/publish_pages.py` in the source repo,
`saulbanov/austin-outdoors`, where the planner's page, data, method and notes live
(`biking/ROUTING.md` there has the method and its caveats). Nothing in this repo is edited by hand.

## Sources

- City of Austin open data: the city's bike comfort ratings, street centerlines, traffic signals,
  sidewalks, and police crash reports for bike and scooter crashes since 2010. The ratings are the
  city's judgment; crash counts are police reports and undercount.
- Paths the city's files lack: © OpenStreetMap contributors, Open Database License (ODbL).
- Background map: OpenStreetMap's tile servers. Address search beyond the city's own files: the
  public Photon geocoder. Both are meant for light use.
- Map library: Leaflet 1.9.4, from cdnjs.
