import Kop from './Kop';

const Ttd = () => {
  return (
    <div className="section-kop">
      <Kop />
      <h1>LEMBAR PENGESAHAN</h1>
      <p style={{ fontSize: 12, marginBottom: 10 }}>
        Usulan kegiatan ini disetujui dan dinyatakan memenuhi syarat untuk
        dilaksanakan pada :{' '}
      </p>
      <p style={{ fontSize: 12, marginBottom: 10 }}>
        Hari <span style={{ marginLeft: 17 }}></span>: Jumat - Sabtu
      </p>
      <p style={{ fontSize: 12, marginBottom: 20 }}>
        Tanggal : 21 – 22 Februari
      </p>

      <img src="/ttd-all.jpeg" alt="ttd-all" />
    </div>
  );
};

export default Ttd;
