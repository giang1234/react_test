import loadable from 'src/components/Loadable';

export const Main = loadable(
  () => import('./mainContainer')
);
