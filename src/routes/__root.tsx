import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { HeaderMenu } from '../components/HeaderMenu';
const RootLayout = () => (
  <>
    <div>
      <HeaderMenu />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  </>
);

export const Route = createRootRoute({ component: RootLayout });
