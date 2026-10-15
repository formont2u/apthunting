# apthunting

An interactive starting map for an Oslo and Bærum rental search for two people, with at least one separate bedroom (usually “2-roms” in Norwegian listings).

## Run

From `/workspace/apthunting`, run:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Open the served `index.html` in a browser. No dependency installation or build is required. Leaflet 1.9.4 is vendored locally (JS/CSS SHA-256 verified against their pinned integrity values). Internet access is needed for OpenStreetMap tiles and optional Google Fonts. If map assets fail, the area list and ratings remain available.

## How to use

- Select **Oslo + Bærum**, **Oslo**, or **Bærum · Sandvika & surroundings** in Map area. Changing region frames the currently matching polygons. Search, travel filters, ratings and the on-map Layers control work in both regions.

- Areas without curated travel estimates start unscored (gray) and are labeled “Time unknown”. Uncheck “Include areas with unknown travel times” to exclude them; they are not verified to be within an hour.
- Filter assessed areas by the upper end of their approximate public transport journey range to Oslo S, up to 60 minutes. These are manually curated orientation estimates, not live schedules, door-to-door guarantees, or an exhaustive one-hour isochrone.
- Neighborhoods are filled polygons with visible borders: 96 Oslo statistical subdistricts (delbydeler) from Oslo kommune’s Bydelsfakta, plus 30 Bærum postal-code polygons grouped into 23 named postal localities from Posten Norge/Kartverket via carestad/norwegian-geodata. Bærum polygons are explicitly labeled **postal areas**, not official neighborhood borders. Click a polygon to rate it directly. Use the **Layers** icon at the top right of the map to toggle the overlay or adjust its opacity. The overlay is on by default; switching it off removes both the fills and borders. See [boundary provenance and license](data/SOURCES.md). Informal neighborhood names may cover different areas; tooltips show actual boundary names. Only areas with boundary polygons are displayed. There are no point markers; other towns and informal areas without matching boundaries are omitted.
- Previously unreviewed subdistricts start gray. For assessed areas, start with suggested scores favoring greenery, transit and residential atmosphere. These subjective suggestions do not measure safety, actual rents, or either partner’s workplace commute.
- Give each area your own 1–5 rating; this switches the map to your ratings. Unrated areas turn gray. Ratings save in this browser’s local storage; they do not sync between devices. Reset asks before clearing them.
- Check exact address-to-office journeys in Entur or Ruter before shortlisting. UiO campus and Sikt office addresses are still needed. Rent and apartment area comparisons are not implemented yet.

## Validation

`node --check app.js` checks JavaScript syntax. Serve the site and check the HTML, stylesheet and script return successfully. In a browser, verify map loading, filters, polygon popups, personal scores, refresh persistence, and the on-map Layers control on desktop and mobile. Tile/provider availability depends on network access. Map attribution remains visible.
