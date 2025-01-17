import Kop from './Kop';

const Lampiran1 = () => {
  const schedule1 = [
    { time: '08.00 - 09.00', activity: 'Registrasi', location: 'Audit 2' },
    { time: '09.00 - 10.00', activity: 'Open Ceremony', location: 'Audit 2' },
    {
      time: '10.00 - 11.30',
      activity: 'Tournament MLBB (8 besar)',
      location: 'Audit 2',
    },
    { time: '11.30 - 12.45', activity: 'Isho', location: 'Audit 2' },
    {
      time: '12.45 - selesai',
      activity: 'Tournament MLBB (8 besar)',
      location: 'Audit 2',
    },
  ];

  const schedule2 = [
    { time: '08.00 - 09.30', activity: 'Registrasi', location: 'Tarub' },
    {
      time: '08.30 - 10.30',
      activity: 'Pelantikan Himpunan',
      location: 'Tarub',
    },
    {
      time: '10.40 - 12.00',
      activity: 'Seminar Teknologi',
      location: 'Tarub',
    },
    { time: '12.00 - 13.00', activity: 'Ishoma', location: '' },
    {
      time: '13.00 - 18.00',
      activity: 'Lomba MLBB & Robotic',
      location: 'Tarub',
    },
    {
      time: '18.00 - 19.00',
      activity: 'Ishoma',
      location: 'Tarub',
    },
    {
      time: '20.00 - selesai',
      activity: 'Pembagian Hadiah & Malam Puncak',
      location: 'Tarub',
    },
    {
      time: '',
      activity: 'Penutup',
      location: '',
    },
  ];
  return (
    <section className="section-kop">
      <Kop />
      <img
        src="/src/assets/fest2025.png"
        alt="fest2025"
        className="bg"
        width={390}
      />
      <i>Lampiran I</i>
      <h1 style={{ marginBottom: 10 }}>
        MANUAL ACARA FMIKOM FEST <br />
        FAKULTAS MATEMATIKA DAN ILMU KOMPUTER (FMIKOM)
        <br /> UNIVERSITAS NAHDLATUL ULAMA AL GHAZALI (UNUGHA)
        <br /> CILACAP - JAWA TENGAH TAHUN 2025
      </h1>
      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: 'collapse', width: '100%', marginBottom: 10 }}
      >
        <thead>
          <tr>
            <th colSpan="3" style={{ textAlign: 'center', background: 'none' }}>
              Jumat, 21 Februari 2025
            </th>
          </tr>
          <tr>
            <th style={{ background: 'none' }}>Waktu</th>
            <th style={{ background: 'none' }}>Kegiatan</th>
            <th style={{ background: 'none' }}>Lokasi</th>
          </tr>
        </thead>
        <tbody>
          {schedule1.map((item, index) => (
            <tr key={index}>
              <td>{item.time}</td>
              <td>{item.activity}</td>
              <td>{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: 'collapse', width: '100%', marginBottom: 10 }}
      >
        <thead>
          <tr>
            <th colSpan="3" style={{ textAlign: 'center', background: 'none' }}>
              Sabtu, 22 Februari 2025
            </th>
          </tr>
          <tr>
            <th style={{ background: 'none' }}>Waktu</th>
            <th style={{ background: 'none' }}>Kegiatan</th>
            <th style={{ background: 'none' }}>Lokasi</th>
          </tr>
        </thead>
        <tbody>
          {schedule2.map((item, index) => (
            <tr key={index}>
              <td>{item.time}</td>
              <td>{item.activity}</td>
              <td>{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Lampiran1;
