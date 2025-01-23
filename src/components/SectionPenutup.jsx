import Kop from './Kop';

const SectionPenutup = () => {
  return (
    <section className="section-kop">
      <img src="/fest2025.png" alt="Yuhu" width={390} className="bg" />
      <Kop />
      <h1>
        BAB III <br /> PENUTUP
      </h1>
      <p className="text">
        Demikianlah proposal persembahan kami tentang acara FMIKOM FEST 2025.
        Melalui kegiatan ini, kami yakin dapat menggali kreativitas peserta dan
        masyarakat sekaligus sebagai sarana untuk berbagi ide dan inspirasi.
      </p>
      <p className="text">
        Kami berharap proposal ini dapat diterima dan mendapatkan dukungan dari
        semua pihak. Kami siap bekerja sama dengan semua pihak yang terkait
        untuk menyukseskan acara ini.
      </p>

      <div
        style={{
          width: '100%',
          height: 'auto',
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: 12,
            }}
          >
            Ketua Panitia
          </p>
          <img src="/ttd-yoss.png" alt="" width={100} />
          <p
            style={{
              fontWeight: 700,
              textDecoration: 'underline',
              fontSize: 12,
            }}
          >
            Yossan Adi Santoso
          </p>
          <p
            style={{
              fontWeight: 700,
              fontSize: 12,
            }}
          >
            NIM. 22EO10025
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionPenutup;
