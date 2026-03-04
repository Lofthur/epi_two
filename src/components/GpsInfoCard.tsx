import { useScreenSize } from '../hooks/useScreenSize';

import type { GeoData } from '../types';
import { TitleInfo } from './TitleInfo';

type GpsInfoCardProps = {
  geoData: GeoData;
};

export const GpsInfoCard = ({ geoData }: GpsInfoCardProps) => {
  const { isLargeScreen } = useScreenSize();

  return (
    <article className="gps-card box-shadow">
      <h4 className="gps-card-header">Info about your location</h4>
      <div className="gps-card-body">
        <TitleInfo title="Latitude" info={geoData.lat} />
        <TitleInfo title="Longitude" info={geoData.lon} />
        {isLargeScreen && (
          <>
            <h5 className="large-screen-info-header">
              Here are some more info about your location
            </h5>
            <TitleInfo title={'Road'} info={geoData.address.road} />
            <TitleInfo
              title={'House number'}
              info={geoData.address.house_number}
            />
            <TitleInfo title={'Postcode'} info={geoData.address.postcode} />
            <TitleInfo title={'Village'} info={geoData.address.village} />
            <TitleInfo title={'City'} info={geoData.address.municipality} />
            <TitleInfo title={'Country'} info={geoData.address.country} />
          </>
        )}
      </div>
    </article>
  );
};
