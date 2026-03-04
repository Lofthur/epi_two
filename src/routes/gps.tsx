import { createFileRoute } from '@tanstack/react-router';

import { GpsInfoCard } from '../components/GpsInfoCard';

import { fetchMapData } from '../utils.ts/fetchMapData';

export const Route = createFileRoute('/gps')({
  component: About,
  loader: () => fetchMapData(),
  errorComponent: ({ error }) => {
    return (
      <div className="page-container">
        <h2>😱 Something went horrible wrong 😱</h2>
        <pre>{error.message}</pre>
      </div>
    );
  },
});

function About() {
  const geoData = Route.useLoaderData();

  return (
    <div className="page-container">
      <h1>Welcome to your GPS info!</h1>
      <GpsInfoCard geoData={geoData} />
    </div>
  );
}
