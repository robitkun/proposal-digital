import Kop from './Kop';

const SectionRencanaPelaksana = () => {
  return (
    <section className="section-kop">
      <img
        src="/public/fest2025.png"
        alt="fest2025"
        className="bg"
        width={390}
      />
      <Kop />
      <h1 className="judul">
        BAB II
        <br /> RENCANA PELAKSANAAN
      </h1>
      <h2 style={{ textAlign: 'start', fontSize: '12px', marginBottom: 5 }}>
        A. Waktu dan Tempat
      </h2>
      <p style={{ fontSize: '12px', marginLeft: 17 }}>
        Kegiatan Kompetisi akan dilaksanakan pada :
      </p>{' '}
      <p style={{ marginLeft: 17 }}>
        Pelaksanaan <span style={{ marginRight: 27 }}></span>: 21 – 22 Februari
        2025
      </p>
      <p style={{ marginLeft: 17, marginBottom: 5 }}>
        Tempat <span style={{ marginRight: 51 }}></span> : Universitas Nahdlatul
        Ulama Al Ghazali Cilacap
      </p>
      <h2 style={{ textAlign: 'start', fontSize: '12px' }}>B. Peserta</h2>
      <p style={{ marginLeft: 17, marginBottom: 5 }}>
        Sasaran peserta kegiatan FMIKOM FEST yaitu:
      </p>
      <ol style={{ marginLeft: 20 }}>
        <li>Mahasiswa/I dan pelajar SMA/sederajat se-Karesidenan Banyumas</li>
        <li>Masyarakat umum</li>
      </ol>
      <h2 style={{ textAlign: 'start', fontSize: '12px', marginBottom: 10 }}>
        C. Bentuk Kegiatan dan Metode
      </h2>
      <p style={{ textIndent: 20, marginBottom: 10 }}>
        Kegiatan ini akan diselengarakan dalam bentuk on-air dengan tema:
        “Transformasi Bersama Mengoptimalkan Teknologi Untuk Organisasi Yang
        Lebih Baik". Kegiatan ini meliputi perlombaan Robotik, Seminar
        Teknologi, Turnamen Mobile Legend.
      </p>
      <h2 style={{ textAlign: 'start', fontSize: '12px', marginBottom: 10 }}>
        D. Manual Acara
      </h2>
      <i style={{ fontSize: 12, marginBottom: 10 }}>Terlampir</i>
      <h2 style={{ textAlign: 'start', fontSize: '12px', marginBottom: 10 }}>
        E. Susunan Panitia
      </h2>
      <i style={{ fontSize: 12, marginBottom: 10 }}>Terlampir</i>
      <h2 style={{ textAlign: 'start', fontSize: '12px', marginBottom: 10 }}>
        F. Anggaran Dana
      </h2>
      <i style={{ fontSize: 12, marginBottom: 10 }}>Terlampir</i>
    </section>
  );
};

export default SectionRencanaPelaksana;
