export type Coords = { lat: number; lon: number };

export type GeoData = {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  class: string;
  type: string;
  place_rank: number;
  importance: number;
  addresstype: string;
  name: string;
  display_name: string;
  address: {
    house_number: string;
    road: string;
    neighbourhood: string;
    farm: string;
    village: string;
    municipality: string;
    county: string;
    postcode: string;
    country: string;
    country_code: string;
  };
  boundingbox: string[];
};

export type VideoClickHandlerTypes = 'open' | 'close';
