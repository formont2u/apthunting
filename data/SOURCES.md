# Neighborhood boundary source

Oslo kommune, [Bydelsfakta](https://github.com/oslokommune/bydelsfakta/tree/27ce5367a4bb3f84f2df18ffbb9984169c1b185c/src/config/geoData), commit `27ce5367a4bb3f84f2df18ffbb9984169c1b185c`. Retrieved 15 October 2026. MIT license retained in LICENSE.

The 96 statistical subdistricts (delbydeler) come from the 15 district files, excluding oslo.js (the coarser district layer). Coordinates and boundaries are unchanged; a district label is added and files combined. This is a versioned municipal application dataset, not a claim that boundaries are the latest official revision. Statistical subdistricts can differ from informal neighborhood names. Sentrum, Marka and nearby municipalities are not covered by these polygons.

Curated area names are explicitly matched to corresponding subdistricts in app.js. A few familiar names differ: Tøyen → Nedre Tøyen, Grünerløkka → east and west, Majorstuen → north and south, Holmlia → north and south, Ullevål → Ullevål hageby. The map shows the actual statistical names in tooltips. Other names without matching polygons are excluded from the map and list; no point markers or invented borders are used. Previously unreviewed subdistricts have no starting score or travel estimate. They can be rated; the checkbox controls whether areas without travel estimates appear.

## Bærum postal areas

30 postal-code polygons grouped into 23 named postal localities in Bærum municipality (3201), sourced from [carestad/norwegian-geodata](https://github.com/carestad/norwegian-geodata/tree/b8080052824bc623c188e834d64ad378a8a6c67b), commit `b8080052824bc623c188e834d64ad378a8a6c67b`, `postal-codes.json.gz`. The source credits Posten Norge/Kartverket via Geonorge's [Postnummerområder dataset](https://kartkatalog.geonorge.no/metadata/postnummeromraader/462a5297-33ef-438a-82a5-07fff5799be3). Original extraction dates: 28 January 2024. Retrieved 15 October 2026. Repository MIT license retained in LICENSE-postal.

Coordinates are unchanged; metadata is reduced and postal polygons with the same poststed are displayed as one rateable area. Internal postcode borders remain visible. These are postal delivery areas, **not official neighborhood or statistical subdistrict boundaries**, and may include large green or outlying areas. They are a versioned snapshot, not a claim of current postal coverage. Postal locality names do not delimit every informal place name in the screenshot.

Coverage: Sandvika, Bekkestua, Blommenholm, Bærums Verk, Eiksmarka, Fornebu, Gjettum, Haslum, Hosle, Høvik, Høvikodden, Jar, Kolsås, Lommedalen, Lysaker, Rud, Rykkinn, Skui, Slependen, Snarøya, Stabekk, Vøyenenga and Østerås. Existing curated estimates/scores are reused for Sandvika, Bekkestua and Lysaker. Other new areas have unknown travel times and no suggested score; they are not verified to fall within a one-hour commute. Personal ratings use the displayed postal locality name and apply across its postal polygons.
