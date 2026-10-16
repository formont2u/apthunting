// Editorial first-pass assessment, not measured rents or journey-planner results.
window.RENTAL_PROFILE = {
  comfortableRent:18000, maximumRent:23000, minimumArea:45, bedrooms:1,
  comfortableCommute:30, maximumCommute:60,
  includes:['heating','water'], furnishing:'unfurnished preferred', parking:'preferred, not required',
  priorities:[
    {key:'proximity',label:'Work-area proximity',weight:30},
    {key:'balance',label:'Residential / urban balance',weight:20},
    {key:'shops',label:'Shops & groceries',weight:20},
    {key:'social',label:'Social atmosphere',weight:20},
    {key:'parks',label:'Parks',weight:10}
  ],
  workplaces:[
    {name:'UiO · Blindern campus',lat:59.9405,lng:10.7235,short:'UiO',
      address:'Faculty of Mathematics and Natural Sciences, UiO',
      note:'Approximate Blindern campus location. PO Box 1032 is a mailing address, not a building entrance. Confirm your actual department/building before checking door-to-door routes.'},
    {name:'Sikt · work area',lat:59.9342,lng:10.7105,short:'Sikt',
      address:'Fridtjof Nansens vei 19, 0369 Oslo (provided address)',
      note:'Approximate Majorstuen/Marienlyst area only; this marker is not an address-level geocode. Official address lookup was unavailable. Confirm the entrance before checking routes.'}
  ]
};
// Factors are qualitative 1–5 judgments: proximity, residential balance, shops, social, parks.
// Space, prices, parking and actual journey duration are deliberately not estimated from these scores.
window.NEIGHBORHOOD_FIT = [
  ['Bislett',[5,4,5,5,4],'A strong first search area: everyday shops, cafés and social life, with both work areas nearby.','Check traffic/noise on the main streets and whether 45+ m² listings fit NOK 18k.'],
  ['Fagerborg',[5,5,4,4,5],'Residential streets between lively shopping areas and parks, close to the two work areas.','Rental supply and price need checking; the quieter streets can have fewer nearby venues.'],
  ['Majorstuen',[5,3,5,5,4],'The simplest starting point for shops, connections and access to both work areas.','Busier streets and competition for larger apartments; inspect noise and total cost.'],
  ['Lindern',[5,5,4,3,5],'Residential surroundings, green space and a convenient position toward Blindern.','Less evening activity on the doorstep than Bislett or Majorstuen.'],
  ['Ullevål',[5,5,4,3,5],'Green, residential and very convenient for UiO; close to local shops.','The mapped area is Ullevål hageby, not all of Ullevål. Verify rental stock and the Sikt journey.'],
  ['Sagene',[3,5,5,5,5],'A strong lifestyle match for groceries, cafés, social streets and river walks.','Cross-town travel toward both work areas needs a specific route check.'],
  ['Torshov',[3,5,5,5,5],'A neighborhood feel with parks, cafés and shops; good for your residential/social balance.','Work journeys can be less direct than from the western inner city.'],
  ['Ila',[4,4,4,4,5],'A residential base near parks and the inner-city social neighborhoods.','Check walking distance to useful work-bound services; hillside streets vary.'],
  ['Homansbyen',[5,3,5,4,4],'Convenient western inner-city streets close to cafés, shops and the work areas.','Check noise and rental value for your minimum floor area.'],
  ['Sandaker',[4,4,4,3,4],'A residential alternative with river walks and local shops, between busier neighborhood centers.','Check the exact address against the wider statistical border and verify the last leg to each office.'],
  ['Bjølsen',[3,5,4,4,5],'Residential streets and river access, with neighborhood shops and cafés.','Check the office journeys and how close the exact address is to local activity.'],
  ['Skøyen',[4,4,5,3,4],'Shops, transport connections and residential pockets west of the center.','A mixed office/road environment; compare the actual street and office connections.'],
  ['Grünerløkka',[3,3,5,5,4],'Excellent for social atmosphere and everyday shopping, with nearby parks.','Livelier than your first-choice residential balance; check noise and the westbound commute.'],
  ['Sofienberg',[3,4,4,5,5],'Park access and proximity to Grünerløkka’s social life.','Less direct work-area access; verify travel at your normal departure time.'],
  ['Sinsen',[3,4,4,3,4],'A residential alternative with transport connections and nearby shopping.','Check road noise and the full journey to both offices.'],
  ['Løren',[3,4,5,3,3],'Local shops and newer apartment stock, with metro access.','A less established café atmosphere; verify connections and rental costs.'],
  ['Bekkestua',[3,5,5,2,4],'A walkable local center with shops and a calmer residential setting.','Quieter social life; your preferred 30-minute office commute is not established.'],
  ['Stabekk',[3,5,4,2,4],'A smaller local center and green residential surroundings.','Fewer social venues; rail time to the center is not the office journey.'],
  ['Sandvika',[2,4,5,3,4],'A substantial shopping center, local amenities and waterfront access.','Farther from both work areas; verify the interchange and final walking legs before shortlisting.'],
  ['Lysaker',[3,3,4,2,4],'Useful transport connections and access to coastal/river walks.','Office-heavy pockets and main roads can weaken the neighborhood/social feel.'],
  ['Fornebu',[2,5,4,2,5],'Waterfront parks and residential surroundings, with local shopping.','Fewer social streets and office routes need checking; do not assume a metro connection.'],
  ['Høvik',[2,5,3,2,5],'Green residential surroundings and coastal access.','Amenities and station access vary across the postal area; less aligned with your social priority.']
].map(([name,factors,why,tradeoff])=>({name,factors,why,tradeoff}));
