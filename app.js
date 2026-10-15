// Curated orientation data: approximate centers and typical transit ranges, not routing results.
const areas = [
  ['Sentrum',59.911,10.746,0,10,3,'Very central, busy streets, shops and nightlife; apartment character varies.'],
  ['Majorstuen',59.929,10.714,10,20,4,'Excellent metro connections, cafés and shopping; busy around the junction.'],
  ['Frogner',59.919,10.704,15,25,4,'Established residential streets, parks and cafés; mainly tram and bus.'],
  ['Skøyen',59.922,10.679,5,15,4,'Rail, tram and bus hub; a mix of offices and residential pockets.'],
  ['Bislett',59.926,10.733,15,25,4,'Lively residential streets, cafés, tram access and nearby parks.'],
  ['St. Hanshaugen',59.928,10.744,15,25,5,'Hilltop park, neighborhood cafés and residential streets; mostly bus connections.'],
  ['Sagene',59.940,10.752,20,30,5,'River walks, older apartment buildings and a local neighborhood feel; buses.'],
  ['Bjølsen',59.947,10.754,20,35,5,'Residential streets and access to the river; buses and walks to nearby hubs.'],
  ['Torshov',59.938,10.768,20,30,5,'Parks, cafés and tram access; a mix of quieter and livelier streets.'],
  ['Grünerløkka',59.923,10.759,10,25,4,'Restaurants, bars and independent shops; check street noise carefully.'],
  ['Sofienberg',59.925,10.771,15,25,4,'Park-centered urban living, close to Grünerløkka; bus and tram nearby.'],
  ['Grønland',59.913,10.760,5,15,3,'Central, busy and varied, with food shops and metro access.'],
  ['Tøyen',59.917,10.775,5,15,4,'Metro, cafés and access to Tøyenparken and the botanical garden.'],
  ['Kampen',59.914,10.784,15,25,5,'Small-scale residential streets with nearby metro stations; hilly in places.'],
  ['Ensjø',59.915,10.798,10,20,4,'Many newer apartment buildings and metro access; ongoing development in places.'],
  ['Helsfyr',59.920,10.806,10,20,3,'Strong metro and bus connections, offices and residential pockets.'],
  ['Bryn',59.908,10.825,10,25,3,'Rail and metro nearby; road noise and walkability depend on the address.'],
  ['Bjerke',59.943,10.811,20,35,4,'Residential areas, green space and bus connections.'],
  ['Økern',59.928,10.806,15,25,3,'Metro access and newer housing; major roads and construction shape the area.'],
  ['Løren',59.931,10.796,15,30,4,'Modern apartments, local shops and metro access.'],
  ['Sinsen',59.938,10.781,15,30,4,'Metro, tram and bus connections; check proximity to major roads.'],
  ['Storo',59.946,10.776,15,25,4,'Transit hub with shopping, apartments and access to the river.'],
  ['Nydalen',59.950,10.766,15,25,5,'Modern apartments, riverside paths and metro connections.'],
  ['Ullevål',59.949,10.735,15,30,5,'Green residential surroundings, metro and proximity to Blindern.'],
  ['Blindern',59.940,10.723,15,25,5,'UiO campus area, green surroundings and metro access.'],
  ['Berg / Tåsen',59.956,10.744,20,35,5,'Quiet residential surroundings, green space and metro stations.'],
  ['Kjelsås',59.966,10.784,20,40,5,'Access to forest and lakes; rail, tram and bus depending on the address.'],
  ['Grefsen',59.958,10.780,20,40,5,'Residential hillside streets with tram and bus access; check station walking time.'],
  ['Røa',59.947,10.644,25,40,5,'Green suburban feel with a local center and metro.'],
  ['Hovseter',59.951,10.655,25,40,4,'Residential apartment areas, green space and metro.'],
  ['Holmenkollen',59.962,10.666,35,55,4,'Forest access and hillside views; steep walks and a longer metro ride.'],
  ['Sognsvann / Kringsjå',59.967,10.732,25,40,5,'Metro and easy forest access; quieter and less urban.'],
  ['Oppsal',59.893,10.843,20,35,5,'Residential, green and on the metro; access to Østmarka.'],
  ['Bøler',59.884,10.861,25,40,5,'Local center, metro and forest access; calmer suburban atmosphere.'],
  ['Manglerud',59.897,10.813,15,30,4,'Residential areas, metro and local shopping.'],
  ['Lambertseter',59.874,10.812,20,35,4,'Local shopping, metro and established residential areas.'],
  ['Ekeberg',59.892,10.774,20,35,5,'Parks, views and tram or bus connections; hilly streets.'],
  ['Nordstrand',59.862,10.790,15,35,5,'Leafy hillside residential area; rail and bus access varies by address.'],
  ['Holmlia',59.835,10.797,15,30,4,'Rail hub, local shops and green residential surroundings.'],
  ['Mortensrud',59.848,10.828,30,45,4,'Metro terminus, local shops and nearby forest.'],
  ['Furuset',59.942,10.898,25,40,4,'Metro and local center, with green residential surroundings.'],
  ['Stovner',59.963,10.924,30,45,4,'Metro, shopping and access to surrounding green areas.'],
  ['Grorud',59.961,10.882,25,40,4,'Metro and green surroundings; rail station is in a different part of the area.'],
  ['Lillestrøm',59.956,11.050,10,25,4,'Separate town with frequent trains to Oslo; workplace trips need another check.'],
  ['Strømmen',59.950,11.003,25,40,4,'Local rail, shopping and residential streets outside Oslo municipality.'],
  ['Lørenskog station area',59.945,10.944,20,35,4,'Rail access and suburban housing; other parts of Lørenskog have different journeys.'],
  ['Lysaker',59.913,10.637,10,20,4,'Major rail and bus hub; housing and road noise vary by pocket.'],
  ['Bekkestua',59.917,10.582,30,45,5,'Walkable local center, metro and residential surroundings.'],
  ['Sandvika',59.890,10.526,15,30,4,'Separate town center, trains, shopping and access to the waterfront.'],
  ['Asker',59.835,10.434,20,40,4,'Town center and train hub; suburban housing and green surroundings.'],
  ['Kolbotn',59.811,10.799,20,35,5,'Local center by the lake and rail access south of Oslo.'],
  ['Ski',59.719,10.838,15,30,4,'Town center and fast trains to Oslo S; UiO commute adds a further leg.']
].map(([name,lat,lng,min,max,score,description])=>({name,lat,lng,min,max,score,description}));

const storageKey='apthunting-oslo-ratings-v1';
let ratings={};
try { const saved=JSON.parse(localStorage.getItem(storageKey)||'{}'); if(saved && typeof saved==='object' && !Array.isArray(saved)) ratings=Object.fromEntries(Object.entries(saved).filter(([,v])=>Number.isInteger(v)&&v>=1&&v<=5)); } catch {}
const $=id=>document.getElementById(id);
let map,markers;
if(window.L){
  map=L.map('map').setView([59.924,10.786],11);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',maxZoom:19}).addTo(map).on('tileerror',()=>{$('map-error').hidden=false;});
  markers=L.layerGroup().addTo(map);
  L.marker([59.9109,10.7528]).addTo(map).bindPopup('<b>Oslo S</b><br>Reference point for approximate travel ranges.');
}else $('map-error').hidden=false;
const colors=['#d34e46','#df8550','#e9b858','#90b66b','#419b69'];
function score(area){return $('mode').value==='personal' ? ratings[area.name] : area.score;}
function persist(){try{localStorage.setItem(storageKey,JSON.stringify(ratings));}catch{$('map-error').textContent='Your browser could not save ratings. They will last only for this visit.';$('map-error').hidden=false;}}
function render(){
  const limit=Number($('minutes').value),query=$('search').value.trim().toLocaleLowerCase();
  $('time-label').textContent=`${limit} min`;
  const visible=areas.filter(a=>a.max<=limit&&a.name.toLocaleLowerCase().includes(query));
  $('count').textContent=`${visible.length} areas`;
  $('areas').replaceChildren(); markers?.clearLayers();
  if(!visible.length) $('areas').textContent='No areas match. Try a longer journey or a different search.';
  visible.forEach(area=>{
    const value=score(area),color=colors[value-1]||'#87928e';
    let marker;
    if(map){marker=L.circleMarker([area.lat,area.lng],{radius:13,color:'#fff',weight:2,fillColor:color,fillOpacity:.88}).addTo(markers).bindTooltip(`${area.name} · ${value ? value+'/5':'unrated'}`).bindPopup(`<div class="popup-title">${area.name}</div><div class="popup-copy">${area.description}<br><br>Approx. ${area.min}–${area.max} min to Oslo S.<br>${$('mode').value==='personal'?'Your rating':'Suggested fit'}: ${value ? value+'/5':'not rated'}.<br>Rate this area in the side panel.</div>`);}
    const card=document.createElement('article');card.className='area';
    const top=document.createElement('div');top.className='area-top';
    const name=document.createElement('button');name.className='area-name';name.textContent=area.name;name.onclick=()=>{if(map){map.setView([area.lat,area.lng],13);marker.openPopup();}};
    const badge=document.createElement('span');badge.className='badge';badge.textContent=`${area.min}–${area.max} min`;
    top.append(name,badge);
    const copy=document.createElement('p');copy.textContent=area.description;
    const row=document.createElement('div');row.className='rating';
    const label=document.createElement('span');label.textContent='My feeling';row.append(label);
    for(let n=1;n<=5;n++){const button=document.createElement('button');button.textContent=n;button.setAttribute('aria-label',`Rate ${area.name} ${n} out of 5`);button.setAttribute('aria-pressed',String(ratings[area.name]===n));button.onclick=()=>{ratings[area.name]=n;persist();$('mode').value='personal';render();const replacement=[...$('areas').querySelectorAll('button')].find(b=>b.getAttribute('aria-label')===button.getAttribute('aria-label'));replacement?.focus({preventScroll:true});};row.append(button);}
    card.append(top,copy,row);$('areas').append(card);
  });
}
['minutes','search','mode'].forEach(id=>$(id).addEventListener('input',render));
$('reset').onclick=()=>{if(confirm('Clear all your neighborhood ratings?')){ratings={};persist();render();}};
render();
