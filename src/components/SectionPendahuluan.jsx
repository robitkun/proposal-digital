import Kop from './Kop';

const SectionPendahuluan = () => {
  return (
    <section className="section-kop">
      <img
        src="/public/fest2025.png"
        alt="fest 2025"
        className="bg"
        width={390}
      />
      <Kop />
      <div>
        <h1 className="judul">
          BAB I<br /> PENDAHULUAN
        </h1>
        <h2 className="subjudul">A. Latar Belakang</h2>
        <p className="text">
          Di era digital saat ini, perkembangan teknologi memberikan dampak yang
          signifikan terhadap berbagai aspek kehidupan, termasuk pendidikan, dan
          ekonomi. Teknologi tidak hanya mendorong inovasi, tetapi juga
          menciptakan ruang baru untuk kreativitas, kolaborasi, dan transformasi
          sosial. Media sosial, misalnya, menjadi platform strategis untuk
          menyebarkan informasi, karya, dan ide-ide inspiratif kepada khalayak
          luas.
        </p>
        <p className="text">
          Dalam konteks transformasi digital, teknologi robotika muncul sebagai
          inovasi yang memegang peranan penting di bidang industri, pendidikan,
          dan penelitian. Sementara itu, turnamen Mobile Legends menjadi salah
          satu bentuk hiburan modern yang menggambarkan bagaimana teknologi
          digital juga merangkul aspek sosial dan kompetitif, khususnya di
          kalangan generasi muda. Selain itu, seminar teknologi menjadi wadah
          edukasi dan diskusi yang efektif untuk meningkatkan kesadaran dan
          pemahaman masyarakat tentang peluang dan tantangan dalam era digital.{' '}
        </p>
        <p className="text">
          Sebagai wujud dukungan terhadap inovasi teknologi dan pemberdayaan
          ekonomi lokal, Organisasi FMIKOM Universitas Nahdlatul Ulama Al
          Ghazali Cilacap (UNUGHA) dengan bangga menyelenggarakan FMIKOM FEST
          2025. Ajang ini merupakan acara perdana yang bertujuan menjadi
          platform kolaboratif untuk menyatukan berbagai elemen, meliputi:
        </p>
        <ol>
          <li>
            Lomba Teknologi Robotika, yang memberikan kesempatan bagi generasi
            muda untuk menampilkan inovasi mereka di bidang teknologi.
          </li>
          <li>
            Seminar Teknologi Wadah edukasi yang menghadirkan para ahli untuk
            membahas peluang dan tantangan transformasi digital.
          </li>
          <li>
            Turnamen Mobile Legends Sebagai bentuk hiburan modern yang
            mengedepankan semangat kompetitif dan kebersamaan generasi muda.
          </li>
        </ol>
        <p className="text">
          Sebagai ajang perdana, FMIKOM FEST 2025 diharapkan mampu memberikan
          dampak positif yang besar dan menjadi cikal bakal untuk
          diselenggarakan secara rutin di masa mendatang. Melalui kegiatan ini,
          Organisasi FMIKOM UNUGHA Cilacap ingin mendorong{' '}
        </p>
      </div>
    </section>
  );
};

export default SectionPendahuluan;
