import NavBar from './components/nav-bar.component';
import Section1 from './components/section1.component';
import Section2 from './components/section2.component';
import Section3 from './components/section3.component';
import Section4 from './components/section4.component';
import Section5 from './components/section5.components';

export default function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 /> 
      </div>
    </div>
  );
}
