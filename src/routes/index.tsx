import { createFileRoute } from '@tanstack/react-router';
import pizzeria from '../assets/pizzeria.webp';
import { ResponsiveImage } from '../components/ResponsiveImage';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="page-container">
      <h1>Welcome to awsome image</h1>
      <ResponsiveImage
        image={pizzeria}
        altText="image of a pizzeria"
        imgCaption="Marios favourite place"
      />
    </div>
  );
}
