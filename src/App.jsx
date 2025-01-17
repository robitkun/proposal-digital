import SectionSatu from './components/SectionSatu';
import './App.css';
import SectionPendahuluan from './components/SectionPendahuluan';
import Section from './components/Section';
import SectionRencanaPelaksana from './components/SectionRencanaPelaksana';
import SectionRencanaLanjutan from './components/SectionRencanaLanjutan';
import SectionPenutup from './components/SectionPenutup';
import Lampiran1 from './components/Lampiran1';
import Lampiran2 from './components/Lampiran2';
import Lampiran2Lanjutan from './components/Lampiran2Lanjutan';
import Lampiran3 from './components/Lampiran3';
const App = () => {
  return (
    <div className="container">
      <h1>YOSSAN GANTENG </h1>
      <SectionSatu />
      <SectionPendahuluan />
      <Section />
      <SectionRencanaPelaksana />
      <SectionRencanaLanjutan />
      <SectionPenutup />
      <Lampiran1 />
      <Lampiran2 />
      <Lampiran2Lanjutan />
      <Lampiran3 />
    </div>
  );
};

export default App;
