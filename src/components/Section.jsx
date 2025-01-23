import Kop from './Kop';

const Section = () => {
  return (
    <section className="section-kop">
      <Kop />
      <img src="/fest2025.png" alt="wkwk" className="bg" width={390} />
      <p className="paragraf">
        terciptanya sinergi antara teknologi. Ajang ini tidak hanya menjadi
        wadah pengembangan kreativitas dan inovasi, tetapi juga langkah nyata
        untuk mendukung kemajuan mahasiswa, pelajar dan masyarakat di era
        digital. FMIKOM FEST 2025 adalah inspirasi baru untuk masa depan yang
        lebih kreatif, kolaboratif, dan inovatif.
      </p>
      <h2 style={{ textAlign: 'start' }}>B. Lanjutan</h2>
      <p style={{ marginLeft: 15 }} className="paragraf">
        Tujuan Event Akbar ini diselenggarakan adalah antara lain:{' '}
      </p>
      <ol>
        <li className="paragraf">
          Mengimplementasikan pemikiran inovasi atau ide-ide kreatif ke dalam
          sebuah bentuk karya teknologi.
        </li>
        <li className="paragraf">
          Mendorong mahasiswa dan masyarakat untuk dapat berkarya sehingga
          menghasilkan insan yang produktif.
        </li>
        <li className="paragraf">
          Menjadi wadah atau sarana untuk mengembangkan minat dan bakat serta
          potensi siswa, mahasiswa/mahasiswi, dan masyarakat di Indonesia dalam
          hal teknologi robotika.
        </li>
        <li className="paragaraf">
          Menyediakan edukasi melalui seminar teknologi guna meningkatkan
          pemahaman terhadap peluang dan tantangan di era transformasi digital.
        </li>
        <li className="paragraf">
          Mengembangkan semangat kompetitif dan kebersamaan generasi muda
          melalui turnamen Mobile Legends.
        </li>
      </ol>
      <h2 style={{ textAlign: 'start' }}>C. Hasil Yang Diharapkan</h2>
      <ol className="c">
        <li className="paragraf">
          Meningkatkan minat dan partisipasi dalam kompetisi berbasis teknologi
          melalui lomba teknologi dan turnamen Mobile Legends.
        </li>
        <li className="paragraf">
          Mendorong peningkatan keterampilan peserta dalam mengembangkan
          kemampuan mereka, terutama dalam menghasilkan karya berbasis teknologi
          yang inovatif
        </li>
        <li className="paragraf">
          Meningkatkan kepercayaan diri peserta atas hasil karya mereka dalam
          konteks kompetisi teknologi dan turnamen digital.
        </li>
        <li className="paragraf">
          Memberikan pengalaman yang berkesan bagi seluruh peserta dan
          pengunjung, baik dari aspek edukasi, kompetisi, maupun hiburan.
        </li>
      </ol>
    </section>
  );
};
export default Section;
