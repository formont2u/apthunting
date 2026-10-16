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
  ['Lillestrøm',59.956,11.050,10,30,4,'A town center with shops, cafés and trains to Oslo S: roughly 10–12 minutes on fast services or 25–30 minutes on local services, station to station. Walking time and onward journeys to both offices must be checked.'],
  ['Strømmen',59.950,11.003,25,40,4,'Local rail, shopping and residential streets outside Oslo municipality.'],
  ['Lørenskog station area',59.945,10.944,20,35,4,'Rail access and suburban housing; other parts of Lørenskog have different journeys.'],
  ['Lysaker',59.913,10.637,10,20,4,'Major rail and bus hub; housing and road noise vary by pocket.'],
  ['Bekkestua',59.917,10.582,30,45,5,'Walkable local center, metro and residential surroundings.'],
  ['Sandvika',59.890,10.526,15,30,4,'Separate town center, trains, shopping and access to the waterfront.'],
  ['Asker',59.835,10.434,20,40,4,'Town center and train hub; suburban housing and green surroundings.'],
  ['Kolbotn',59.811,10.799,20,35,5,'Local center by the lake and rail access south of Oslo.'],
  ['Ski',59.719,10.838,15,30,4,'Town center and fast trains to Oslo S; UiO commute adds a further leg.']
].map(([name,lat,lng,min,max,score,description])=>({name,lat,lng,min,max,score,description}));

// Match familiar names to statistical subdistricts without inventing borders.
const boundaryAliases = {
  'Majorstuen':['Majorstuen nord','Majorstuen syd'],
  'Grünerløkka':['Grünerløkka vest','Grünerløkka øst'],
  'Tøyen':['Nedre Tøyen'], 'Holmlia':['Holmlia Nord','Holmlia Syd'],
  'Ullevål':['Ullevål hageby']
};
const boundaries=[...(window.OSLO_BOUNDARIES?.features || []),...(window.BAERUM_BOUNDARIES?.features || []),...(window.LILLESTROM_BOUNDARIES?.features || [])];
boundaries.forEach(f=>{f.properties.municipality ||= 'Oslo';});
const assigned=new Set();
areas.forEach(area=>{
  const names=boundaryAliases[area.name] || [area.name];
  area.features=boundaries.filter(f=>names.includes(f.properties.name));
  area.features.forEach(f=>assigned.add(f.properties.id));
  area.municipality=area.features[0]?.properties.municipality;
});
const unmatched=new Map();
boundaries.filter(f=>!assigned.has(f.properties.id)).forEach(feature=>{
  const key=feature.properties.municipality+':'+feature.properties.name;
  if(!unmatched.has(key)) unmatched.set(key,[]);
  unmatched.get(key).push(feature);
});
unmatched.forEach(features=>{
  const {name,municipality,district,boundaryType}=features[0].properties;
  const type=boundaryType==='postal'?'Postal area':'Statistical subdistrict';
  areas.push({name,municipality,features,min:null,max:null,score:null,
    description:`${type} in ${municipality==='Bærum'?'Bærum':district}. Explore and give it your own rating; travel time and starting preference have not been assessed.`});
});
areas.sort((a,b)=>a.name.localeCompare(b.name,'nb'));
const profile=window.RENTAL_PROFILE;
const fitByName=new Map((window.NEIGHBORHOOD_FIT || []).map(item=>[item.name,item]));
function fitScore(item){return profile.priorities.reduce((sum,factor,i)=>sum+factor.weight*item.factors[i],0)/100;}
const ranked=areas.filter(a=>a.features.length&&fitByName.has(a.name)).sort((a,b)=>fitScore(fitByName.get(b.name))-fitScore(fitByName.get(a.name))||fitByName.get(b.name).factors[0]-fitByName.get(a.name).factors[0]||a.name.localeCompare(b.name,'nb'));
const ranks=new Map(ranked.map((area,i)=>[area.name,i+1]));

const storageKey='apthunting-oslo-ratings-v1';
let ratings={};
try { const saved=JSON.parse(localStorage.getItem(storageKey)||'{}'); if(saved && typeof saved==='object' && !Array.isArray(saved)) ratings=Object.fromEntries(Object.entries(saved).filter(([,v])=>Number.isInteger(v)&&v>=1&&v<=5)); } catch {}
const $=id=>document.getElementById(id);
let map,neighborhoodLayer,workLayer,listingLayer;
if(window.L){
  map=L.map('map').setView([59.924,10.786],12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors · Boundaries: <a href="https://github.com/oslokommune/bydelsfakta">Oslo kommune</a> · Posten Norge/Kartverket',maxZoom:19}).addTo(map).on('tileerror',()=>{$('map-error').hidden=false;});
  neighborhoodLayer=L.layerGroup().addTo(map);
  workLayer=L.layerGroup().addTo(map);
  const briefcase='<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M8 7V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M3 8h18v12H3zM3 12l9 3 9-3M10 14v3h4v-3"/></svg>';
  profile.workplaces.forEach(work=>{
    const content=document.createElement('div');
    const title=document.createElement('strong');title.textContent=work.name;
    const address=document.createElement('p');address.textContent=work.address;
    const note=document.createElement('p');note.textContent=work.note;note.className='popup-copy';content.append(title,address,note);
    L.marker([work.lat,work.lng],{title:work.name+' (approximate)',alt:work.name+' work location, approximate',icon:L.divIcon({className:'work-icon',html:briefcase,iconSize:[38,38],iconAnchor:[19,19],popupAnchor:[0,-20]})}).addTo(workLayer).bindTooltip(work.short+' · approximate work area').bindPopup(content);
  });
}else {$('map-error').textContent='Map library could not load. The area list and ratings still work.';$('map-error').hidden=false;}
const colors=['#d34e46','#df8550','#e9b858','#90b66b','#419b69'];
function score(area){
  if($('mode').value==='personal')return ratings[area.name];
  if($('mode').value==='fit')return fitByName.has(area.name)?fitScore(fitByName.get(area.name)):null;
  return area.score;
}
function scoreText(area){const value=score(area);return value ? ($('mode').value==='fit'?value.toFixed(1):value)+'/5':'unassessed';}
function colorFor(area){const value=score(area);return value ? colors[Math.max(0,Math.min(4,Math.round(value)-1))]:'#87928e';}
function fitDetails(area){
  const item=fitByName.get(area.name);if(!item)return null;
  const root=document.createElement('div');root.className='fit-details';
  const why=document.createElement('p');why.textContent=item.why;
  const tradeoff=document.createElement('p');tradeoff.className='tradeoff';tradeoff.textContent='Check: '+item.tradeoff;
  const factors=document.createElement('p');factors.className='small';factors.textContent=profile.priorities.map((p,i)=>`${p.label} ${item.factors[i]}/5`).join(' · ');
  root.append(why,tradeoff,factors);return root;
}
function persist(){try{localStorage.setItem(storageKey,JSON.stringify(ratings));}catch{$('map-error').textContent='Your browser could not save ratings. They will last only for this visit.';$('map-error').hidden=false;}}
function setRating(area,value){ratings[area.name]=value;persist();$('mode').value='personal';render();}
function popup(area){
  const root=document.createElement('div');
  const title=document.createElement('div');title.className='popup-title';title.textContent=area.name;
  const copy=document.createElement('p');copy.className='popup-copy';
  copy.textContent=area.description+' '+(area.max===null?'Travel time not assessed.':`Approx. ${area.min}–${area.max} min to Oslo S.`);
  const scoreLabel=document.createElement('p');scoreLabel.className='popup-copy';scoreLabel.textContent=`${$('mode').value==='fit'?'Provisional fit (not verified rent/commute)':$('mode').value==='personal'?'Your rating':'Original suggestion'}: ${scoreText(area)}.`;
  const boundaryLabel=document.createElement('p');boundaryLabel.className='popup-copy';boundaryLabel.textContent=area.features[0].properties.boundaryType==='postal'
    ? `${area.municipality} postal area · postcode${area.features.length>1?'s':''} ${area.features.map(f=>f.properties.postalCode).join(', ')}. These are postal borders, not official neighborhood boundaries.`
    : `Borders: ${area.features.map(f=>f.properties.name).join(' + ')} (statistical subdistrict).`;
  root.append(title,copy,boundaryLabel,scoreLabel);const details=fitDetails(area);if(details)root.append(details);root.append(ratingControls(area));return root;
}
function ratingControls(area){
  const row=document.createElement('div');row.className='rating';
  const label=document.createElement('span');label.textContent='My feeling';row.append(label);
  for(let n=1;n<=5;n++){
    const button=document.createElement('button');button.textContent=n;
    button.setAttribute('aria-label',`Rate ${area.name} ${n} out of 5`);
    button.setAttribute('aria-pressed',String(ratings[area.name]===n));
    button.onclick=()=>{setRating(area,n);const replacement=[...$('areas').querySelectorAll('button')].find(b=>b.getAttribute('aria-label')===button.getAttribute('aria-label'));replacement?.focus({preventScroll:true});};row.append(button);
  }
  return row;
}
function render(){
  const limit=Number($('minutes').value),query=$('search').value.trim().toLocaleLowerCase();
  const opacity=Number($('opacity').value)/100,showBoundaries=$('show-boundaries').checked;
  $('time-label').textContent=`${limit} min`;$('opacity-label').textContent=`${Math.round(opacity*100)}%`;
  $('opacity').disabled=!showBoundaries;
  const visible=areas.filter(a=>a.features.length && (!$('ranked-only').checked||fitByName.has(a.name)) && ($('region').value==='all'||a.municipality===$('region').value) && (a.max===null ? $('unknown-times').checked : a.max<=limit)&&a.name.toLocaleLowerCase().includes(query));
  if($('mode').value==='fit')visible.sort((a,b)=>(ranks.get(a.name)||999)-(ranks.get(b.name)||999)||a.name.localeCompare(b.name,'nb'));
  $('count').textContent=`${visible.length} areas`;
  $('areas').replaceChildren(); neighborhoodLayer?.clearLayers();
  if(map){if(showBoundaries)neighborhoodLayer.addTo(map);else map.removeLayer(neighborhoodLayer);}
  if(!visible.length) $('areas').textContent='No areas match. Try a longer journey or a different search.';
  visible.forEach(area=>{
    const value=score(area),color=colorFor(area);
    let marker;
    if(map){
      if(area.features.length){
        marker=L.geoJSON({type:'FeatureCollection',features:area.features},{style:{color:'#3d5145',weight:1.3,opacity:.85,fillColor:color,fillOpacity:opacity}}).addTo(neighborhoodLayer);
        marker.eachLayer(layer=>{
          layer.bindTooltip(`${layer.feature.properties.name}${layer.feature.properties.boundaryType==='postal'?' · postal area '+layer.feature.properties.postalCode:''} · ${scoreText(area)}`,{sticky:true});
          layer.on('mouseover',()=>layer.setStyle({weight:3,fillOpacity:Math.min(opacity+.18,.9)}));
          layer.on('mouseout',()=>layer.setStyle({weight:1.3,fillOpacity:opacity}));
        });
        marker.bindPopup(()=>popup(area));
      }
    }
    const card=document.createElement('article');card.className='area';
    const top=document.createElement('div');top.className='area-top';
    const name=document.createElement('button');name.className='area-name';name.textContent=($('mode').value==='fit'&&ranks.has(area.name)?'#'+ranks.get(area.name)+' · ':'')+area.name;
    name.onclick=()=>{if(map){if(!$('show-boundaries').checked){$('show-boundaries').checked=true;neighborhoodLayer.addTo(map);$('opacity').disabled=false;}map.fitBounds(marker.getBounds(),{padding:[30,30],maxZoom:14,animate:false});marker.openPopup(marker.getBounds().getCenter());}};
    const badge=document.createElement('span');badge.className='badge';badge.textContent=area.max===null?'Time unknown':`${area.min}–${area.max} min`;
    top.append(name,badge);
    const copy=document.createElement('p');copy.textContent=area.description;
    card.append(top);if($('mode').value==='fit'&&fitByName.has(area.name)){const fitBadge=document.createElement('p');fitBadge.className='fit-score';fitBadge.textContent='Provisional fit '+scoreText(area);card.append(fitBadge,fitDetails(area));}else card.append(copy);card.append(ratingControls(area));$('areas').append(card);
  });
}
const savedListings=window.SAVED_LISTINGS || [];
const listingMarkers=new Map();
function listingContent(listing,expanded=false){
  const root=document.createElement('article');root.className='listing-card';root.lang='fr';
  const title=document.createElement('h3');title.textContent=listing.title;
  const score=document.createElement('p');score.className='listing-score';score.textContent=`${listing.score}/10 · note provisoire`;
  const facts=document.createElement('p');facts.textContent=`${listing.rent.toLocaleString('fr-FR')} NOK/mois · ${listing.area} m² annoncés · 1 chambre existante · non meublé`;
  const verdict=document.createElement('p');verdict.textContent=listing.verdict;
  const location=document.createElement('p');location.className='location-warning';location.textContent=listing.locationNote;
  root.append(title,score,facts,verdict,location);
  const details=document.createElement('details');details.open=expanded;
  const summary=document.createElement('summary');summary.textContent='Analyse, frais et points à vérifier';details.append(summary);
  for(const [heading,items] of [['Points forts',listing.strengths],['À confirmer',listing.checks]]){
    const h=document.createElement('h4');h.textContent=heading;const ul=document.createElement('ul');
    items.forEach(text=>{const li=document.createElement('li');li.textContent=text;ul.append(li);});details.append(h,ul);
  }
  for(const text of [listing.costs,listing.methodology,listing.source]){const paragraph=document.createElement('p');paragraph.textContent=text;details.append(paragraph);}
  const link=document.createElement('a');link.href=listing.url;link.target='_blank';link.rel='noopener';link.textContent='Voir sur FINN · '+listing.id;
  root.append(details,link);return root;
}
if(map){
  listingLayer=L.layerGroup().addTo(map);
  savedListings.forEach(listing=>{
    const icon=L.divIcon({className:'listing-icon',html:'<svg viewBox="0 0 24 24" width="23" height="23" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m2 11 10-8 10 8M5 9v12h14V9M10 21v-7h4v7"/></svg><span>≈</span>',iconSize:[42,42],iconAnchor:[21,21],popupAnchor:[0,-24]});
    const marker=L.marker([listing.lat,listing.lng],{title:listing.title+' · position approximative',icon}).addTo(listingLayer).bindTooltip(listing.title+' · '+listing.score+'/10 · repère approximatif').bindPopup(()=>listingContent(listing),{maxWidth:350});
    listingMarkers.set(listing.id,marker);
  });
}
savedListings.forEach(listing=>{
  const card=listingContent(listing);
  const button=document.createElement('button');button.className='show-listing';button.textContent='Voir le repère sur la carte';button.disabled=!map;
  button.onclick=()=>{if(map){$('show-listings').checked=true;listingLayer.addTo(map);map.setView([listing.lat,listing.lng],15,{animate:false});listingMarkers.get(listing.id).openPopup();}};
  card.append(button);$('saved-listings').append(card);
});
$('show-listings').addEventListener('input',()=>{if(map){if($('show-listings').checked)listingLayer.addTo(map);else map.removeLayer(listingLayer);}});
$('ranking-method').textContent=profile.priorities.map(p=>p.label+' '+p.weight+'%').join(' · ')+'. Both work areas count equally; proximity is a geographic judgment, not a transit-time calculation. Budget and floor area are listing requirements, not assumed neighborhood prices.';
$('show-work').addEventListener('input',()=>{if(map){if($('show-work').checked)workLayer.addTo(map);else map.removeLayer(workLayer);}});
const layerButton=$('layers-toggle'),layerPanel=$('layers-panel');
function toggleLayerPanel(open){layerPanel.hidden=!open;layerButton.setAttribute('aria-expanded',String(open));}
layerButton.addEventListener('click',()=>toggleLayerPanel(layerPanel.hidden));
document.addEventListener('click',event=>{if(!event.target.closest('.map-layers'))toggleLayerPanel(false);});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!layerPanel.hidden){toggleLayerPanel(false);layerButton.focus();}});
$('region').addEventListener('change',()=>{
  render();
  if(map&&neighborhoodLayer.getLayers().length){
    const bounds=L.latLngBounds([]);neighborhoodLayer.eachLayer(layer=>bounds.extend(layer.getBounds()));
    if(bounds.isValid())map.fitBounds(bounds,{padding:[24,24],maxZoom:12,animate:false});
  }
});
['minutes','search','mode','show-boundaries','opacity','unknown-times','ranked-only'].forEach(id=>$(id).addEventListener('input',render));
$('reset').onclick=()=>{if(confirm('Clear all your neighborhood ratings?')){ratings={};persist();render();}};
render();
