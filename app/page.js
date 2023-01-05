/* eslint-disable react/jsx-indent */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    
    <GetStarted />
    <div className="gradient-04 z-0" />
    <WhatsNew />
    <World />
    <div className="relative">
    <Insights />
    <div className="gradient-05 z-0" />
    <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
