/* App root */
function App() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
