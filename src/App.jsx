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
import Ttd from './components/Ttd';
import Cp from './components/Cp';
const App = () => {
  return (
    <div className="container">
      <h1>FMIKOM FEST 2025 </h1>
      <SectionSatu />
      <Ttd />
      <SectionPendahuluan />
      <Section />
      <SectionRencanaPelaksana />
      <SectionRencanaLanjutan />
      <SectionPenutup />
      <Lampiran1 />
      <Lampiran2 />
      <Lampiran2Lanjutan />
      <Lampiran3 />
      <Cp />
    </div>
  );
};

export default App;
