import { Nav, Hero } from './components/Hero';
import { Problem, Anatomy } from './components/Product';
import { Dashboard } from './components/Dashboard';
import { Leaks } from './components/Leaks';
import { Mars } from './components/Mars';
import { HowItWorks, Differential, Roadmap, Markets, CTA, Footer } from './components/Sections';

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Anatomy />
      <Dashboard />
      <Leaks />
      <HowItWorks />
      <Differential />
      <Roadmap />
      <Markets />
      <Mars />
      <CTA />
      <Footer />
    </>
  );
}
