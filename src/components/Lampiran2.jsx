import Kop from './Kop';

const Lampiran2 = () => {
  return (
    <section className="section-kop lampiran2">
      <img src="/public/fest2025.png" alt="" width={390} className="bg" />
      <Kop />
      <i>Lampiran II</i>
      <h1 style={{ marginBottom: 10 }}>SUSUNAN PANITIA FMIKOM FEST 2025</h1>
      <div>
        <h2 style={{ fontSize: 12, textAlign: 'start' }}>A. SteeringComite</h2>
        <img src="/src/assets/steering.png" alt="s" width={300} />
        <h2 style={{ fontSize: 12, textAlign: 'start', marginBottom: 5 }}>
          B. OrganizingComite
        </h2>
        <img src="/src/assets/organizing.png" alt="s" width={300} />
        <img
          src="/src/assets/acara.png"
          alt="d"
          width={300}
          style={{ position: 'relative', left: -2, marginBottom: 3 }}
        />
        <img
          src="/src/assets/acara2.png"
          alt=""
          width={300}
          style={{ position: 'relative', left: -4, top: -8 }}
        />
      </div>
    </section>
  );
};

export default Lampiran2;
