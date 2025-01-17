import React from 'react';
import Kop from './Kop';

const SectionRencanaLanjutan = () => {
  const data = [
    {
      no: 1,
      instansi: 'UNUGHA CILACAP',
      organisasi: 'BEM FMIKOM',
      alamat: 'Jl. Kemerdekaan Barat No.17, Kesugihan, Cilacap',
      email: 'bemfmikom@unugha.id',
      logo: '/public/bem.png', // Ganti dengan path logo Anda
    },
    {
      no: 2,
      instansi: 'UNUGHA CILACAP',
      organisasi: 'HIMAFORTIC UNUGHA',
      alamat: 'Jl. Kemerdekaan Barat No.17, Kesugihan, Cilacap',
      email: 'himafortic@unugha.id',
      logo: '/public/himafortic.png', // Ganti dengan path logo Anda
    },
    {
      no: 3,
      instansi: 'UNUGHA CILACAP',
      organisasi: 'HMPS-SI UNUGHA',
      alamat: 'Jl. Kemerdekaan Barat No.17, Kesugihan, Cilacap',
      email: 'hmpssi24@gmail.com',
      logo: '/public/si.png', // Ganti dengan path logo Anda
    },
    {
      no: 4,
      instansi: 'UNUGHA CILACAP',
      organisasi: 'HIMATIKA UNUGHA',
      alamat: 'Jl. Kemerdekaan Barat No.17, Kesugihan, Cilacap',
      email: 'himatikaunugha2324@gmail.com',
      logo: '/public/mtk.png',
    },
  ];
  return (
    <section className="section-kop" style={{ position: 'relative' }}>
      <Kop />
      <img
        src="/public/fest2025.png"
        alt="fest2025"
        className="bg"
        width={390}
      />
      <h2 style={{ textAlign: 'start', fontSize: '12px', marginBottom: 10 }}>
        G. Daftar Organisasi Yang Tergabung FMIKOM FEST 2025
      </h2>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Instansi</th>
            <th>Nama Organisasi</th>
            <th>Alamat</th>
            <th>Email</th>
            <th>Logo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.no}>
              <td>{item.no}</td>
              <td>{item.instansi}</td>
              <td>{item.organisasi}</td>
              <td>{item.alamat}</td>
              <td>
                <a href={`mailto:${item.email}`}>{item.email}</a>
              </td>
              <td>
                <img
                  src={item.logo}
                  alt={`Logo ${item.organisasi}`}
                  width={40}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default SectionRencanaLanjutan;
