import type { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/home/page'));
const ProgramDetail = lazy(() => import('../pages/programs/page'));
const StarryCreator = lazy(() => import('../pages/starry-creator/page'));
const NotFound = lazy(() => import('../pages/NotFound'));
const ComprehensiveProgramPage = lazy(() => import('../pages/comprehensive-program/page'));
const SteamAIPage = lazy(() => import('../pages/steam-ai/page'));
const OnlineLearningPage = lazy(() => import('../pages/online-learning/page'));
const RegularTutoringPage = lazy(() => import('../pages/regular-tutoring/page'));
const InterviewPrepPage = lazy(() => import('../pages/interview-prep/page'));
const HomeworkSupportPage = lazy(() => import('../pages/homework-support/page'));
const WorkshopsPage = lazy(() => import('../pages/workshops/page'));
const PartnersPage = lazy(() => import('../pages/partners/page'));
const ArtWorkshopsPage = lazy(() => import('../pages/art-workshops/page'));
const ThreeDCreativePage = lazy(() => import('../pages/3d-creative/page'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/programs/:programId',
    element: <ProgramDetail />
  },
  {
    path: '/starry-creator',
    element: <StarryCreator />
  },
  {
    path: '/comprehensive-program',
    element: <ComprehensiveProgramPage />,
  },
  {
    path: '/steam-ai',
    element: <SteamAIPage />,
  },
  {
    path: '/online-learning',
    element: <OnlineLearningPage />,
  },
  {
    path: '/regular-tutoring',
    element: <RegularTutoringPage />,
  },
  {
    path: '/interview-prep',
    element: <InterviewPrepPage />,
  },
  {
    path: '/homework-support',
    element: <HomeworkSupportPage />,
  },
  {
    path: '/workshops',
    element: <WorkshopsPage />,
  },
  {
    path: '/art-workshops',
    element: <ArtWorkshopsPage />,
  },
  {
    path: '/3d-creative',
    element: <ThreeDCreativePage />,
  },
  {
    path: '/partners',
    element: <PartnersPage />,
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;