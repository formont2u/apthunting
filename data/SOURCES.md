# Neighborhood boundary source

Oslo kommune, [Bydelsfakta](https://github.com/oslokommune/bydelsfakta/tree/27ce5367a4bb3f84f2df18ffbb9984169c1b185c/src/config/geoData), commit `27ce5367a4bb3f84f2df18ffbb9984169c1b185c`. Retrieved 15 October 2026. MIT license retained in LICENSE.

The 96 statistical subdistricts (delbydeler) come from the 15 district files, excluding oslo.js (the coarser district layer). Coordinates and boundaries are unchanged; a district label is added and files combined. This is a versioned municipal application dataset, not a claim that boundaries are the latest official revision. Statistical subdistricts can differ from informal neighborhood names. Sentrum, Marka and nearby municipalities are not covered by these polygons.

Curated area names are explicitly matched to corresponding subdistricts in app.js. A few familiar names differ: Tøyen → Nedre Tøyen, Grünerløkka → east and west, Majorstuen → north and south, Holmlia → north and south, Ullevål → Ullevål hageby. The map shows the actual statistical names in tooltips. Other names without matching polygons are excluded from the map and list; no point markers or invented borders are used. Previously unreviewed subdistricts have no starting score or travel estimate. They can be rated; the checkbox controls whether areas without travel estimates appear.
