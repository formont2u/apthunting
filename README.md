# apthunting

An interactive starting map for an Oslo and Bærum rental search for two people, with at least one separate bedroom (usually “2-roms” in Norwegian listings).

## Run

From `/workspace/apthunting`, run:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Open the served `index.html` in a browser. No dependency installation or build is required. Leaflet 1.9.4 is vendored locally (JS/CSS SHA-256 verified against their pinned integrity values). Internet access is needed for OpenStreetMap tiles and optional Google Fonts. If map assets fail, the area list and ratings remain available.

## How to use

- Select **Oslo + Bærum + Lillestrøm**, **Oslo**, **Bærum · Sandvika & surroundings**, or **Lillestrøm** in Map area. Changing region frames the currently matching polygons. Search, travel filters, ratings and the on-map Layers control work in both regions.

- Areas without curated travel estimates start unscored (gray) and are labeled “Time unknown”. Uncheck “Include areas with unknown travel times” to exclude them; they are not verified to be within an hour.
- Filter assessed areas by the upper end of their approximate public transport journey range to Oslo S, up to 60 minutes. These are manually curated orientation estimates, not live schedules, door-to-door guarantees, or an exhaustive one-hour isochrone.
- Neighborhoods are filled polygons with visible borders: 96 Oslo statistical subdistricts (delbydeler) from Oslo kommune’s Bydelsfakta, plus 30 Bærum postal-code polygons grouped into 23 named postal localities from Posten Norge/Kartverket via carestad/norwegian-geodata. Bærum polygons are explicitly labeled **postal areas**, not official neighborhood borders. Click a polygon to rate it directly. Use the **Layers** icon at the top right of the map to toggle the overlay or adjust its opacity. The overlay is on by default; switching it off removes both the fills and borders. See [boundary provenance and license](data/SOURCES.md). Informal neighborhood names may cover different areas; tooltips show actual boundary names. Only areas with boundary polygons are displayed. There are no point markers; other towns and informal areas without matching boundaries are omitted.
- Previously unreviewed subdistricts start gray. For assessed areas, start with suggested scores favoring greenery, transit and residential atmosphere. These subjective suggestions do not measure safety, actual rents, or either partner’s workplace commute.
- Give each area your own 1–5 rating; this switches the map to your ratings. Unrated areas turn gray. Ratings save in this browser’s local storage; they do not sync between devices. Reset asks before clearing them.
- Check exact address-to-office journeys in Entur or Ruter before shortlisting. UiO campus and Sikt office addresses are still needed. Rent and apartment area comparisons are not implemented yet.

## Validation

`node --check app.js` checks JavaScript syntax. Serve the site and check the HTML, stylesheet and script return successfully. In a browser, verify map loading, filters, polygon popups, personal scores, refresh persistence, and the on-map Layers control on desktop and mobile. Tile/provider availability depends on network access. Map attribution remains visible.

## Personalized first ranking

The default color mode and list now use a provisional, editorial ranking for the couple's stated preferences: NOK 18,000 including heating/water (NOK 23,000 maximum), 45+ m², one separate bedroom, unfurnished preferred, parking preferred, 30-minute comfortable and 60-minute maximum work journeys, and shops/social atmosphere/parks. A residential base with space is preferred to a central apartment, then to living farther out. The user prefers public transport, walking or cycling despite having a car. Electricity inclusion and any separate parking cost are not assumed.

`preferences.js` stores the profile and 23 assessed candidates. Qualitative 1–5 factors are weighted: work-area proximity 30%, residential/urban balance 20%, shops 20%, social atmosphere 20%, parks 10%. These weights are our initial interpretation, not user-confirmed measurements. Both offices count equally. The score does not establish actual commute duration, rent, available floor area, furnishing or parking. There is no live rental-market or route data. Remaining areas stay unassessed in this mode, rather than being ranked last as bad areas. “Show only assessed matches” narrows the list/map to the first shortlist. Personal ratings remain separate and retain the existing browser storage key.

Two blue briefcase icons mark **approximate work areas**, with a separate checkbox in the Layers panel. They are the only point icons. UiO is placed at the Blindern campus, because PO Box 1032 is a postal address, not a workplace entrance. The user-provided Sikt address is Fridtjof Nansens vei 19, 0369 Oslo; the marker is only an approximate Majorstuen/Marienlyst area position. Official address requests to www.mn.uio.no and ws.geonorge.no were blocked by environment networking, so neither marker is claimed to be entrance-level geocoding. Confirm the actual UiO building and both entrances before routing. The existing time slider remains explicitly labeled as approximate transit **to Oslo S, not to work**.

Lillestrøm is included as three postal polygons (2000, 2003, 2004) grouped into one rateable area, with a separate region filter and a provisional preference ranking. Its 10–30 minute estimate is station-to-station to Oslo S, not to the offices. The shapes cover the named postal locality rather than the entire municipality.

## Saved rental listings

`listings.js` contains a summarized assessment of user-provided FINN listing 478815332, not a scraped feed or live availability check. No photographs were supplied or assessed. The first listing has a conditional editorial score of 7.5/10, assuming a 1 December start can be agreed. Its house icon is an explicitly approximate **Røa station reference**, not a geocode of Ostadalsveien 14. The supplied street address is preserved separately. FINN access was blocked by environment networking; verify the address/entrance on the original listing before routing. A Layers checkbox toggles saved listings, independently of neighborhood filtering and the workplace layer.

The assessment distinguishes one existing bedroom from a possible second bedroom, the standard NOK 54,000 deposit from the optional Qasa 4.98% monthly fee (NOK 896.40 on NOK 18,000), and electricity/water listed as included from heating coverage requiring confirmation. It flags the October availability versus a December move, noise, shared facilities, parking, internet and unverified office routes. Saved listings are checked-in data shared with anyone visiting the public site; personal neighborhood ratings remain browser-local.

A second user-supplied listing, FINN 310698314 (Glückstads gate 6), is saved with a provisional 8/10 assessment, displayed before Røa. It has 54 m², one bedroom, an unfurnished description and an advertised 1 December 2026 start. NOK 18,500 excludes electricity; other utilities/parking/internet and the elevator are unconfirmed. Three months’ deposit is calculated as NOK 55,500. Its map icon is only a Bislett neighborhood reference, not verified address geocoding. Røa’s assessment now explicitly treats 1 December as a preference rather than a hard requirement.

FINN 478691222 (Marstrandgata 4, Rodeløkka) is assessed at a provisional 7/10 for a standard lease **without** optional parking. NOK 22,000 includes advertised central heating, hot water and broadband, but other utilities require confirmation. The optional NOK 1,500 garage makes NOK 23,500, already above the stated ceiling. Optional Qasa fee scenarios are clearly separated from the classic deposit. The partially furnished status is displayed explicitly, and a washing-machine connection is not treated as an included machine. The marker is only an approximate Rodeløkka reference, not an address geocode.

## English UI and energy preference

All listing summaries, controls, marker tooltips, popups and assessments are in English (place names and addresses retain their proper spelling). The rental profile prefers confirmed energy grades A, B or C. `energyGrade: null` means unknown, not inefficient and not qualifying for A–C. Default order puts confirmed A–C listings ahead of others, then sorts by editorial fit score. Alternatives show all by fit or only confirmed A–C; filtering also updates the house-icon layer. No energy-score uplift is fabricated, and energy preference does not affect neighborhood rankings.

FINN 478729099 (Magnus Poulssons vei 14, Fornebu/Lysaker) is saved at a provisional 7.5/10, with 46 m², one bedroom, partial furnishing and a 9 December 2026 start. NOK 17,900 includes TV/broadband, but heating, water, electricity and parking are unconfirmed. Deposit NOK 53,700; optional Qasa arithmetic NOK 891.42/month is kept separate. The energy-rating heading in the supplied text contains no letter, so its grade stays unknown despite new/modern wording. Its house icon is a Lysaker station-area reference, not a verified address geocode.
