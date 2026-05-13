import { Nav, Hero } from './components/Hero';
import { Problem, Anatomy } from './components/Product';
import { Dashboard } from './components/Dashboard';
import { HowItWorks, Differential, Roadmap, Markets, CTA, Footer } from './components/Sections';

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Anatomy />
      <Dashboard />
      <HowItWorks />
      <Differential />
      <Roadmap />
      <Markets />
      <CTA />
      <Footer />
    </>
  );
}
