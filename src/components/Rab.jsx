const BudgetTable = () => {
  const expenses = [
    { no: '1.', description: 'Tarub + Panggung', amount: 'Rp 1.500.000' },
    { no: '2.', description: 'Sound System', amount: 'Rp 1.800.000' },
    { no: '3.', description: 'Lighting', amount: 'Rp 1.500.000' },
    { no: '4.', description: 'Piala + sertifikat', amount: 'Rp 600.000' },
    { no: '5.', description: 'Pemateri Seminar', amount: 'Rp 500.000' },
    { no: '6.', description: 'Hiburan Band', amount: 'Rp 3.000.000' },
    { no: '7.', description: 'Komentator Mobile Legend', amount: 'Rp 200.000' },
    { no: '8.', description: 'Juri Lomba Robotic', amount: 'Rp 300.000' },
    { no: '9.', description: 'Hadiah Lomba ML', amount: 'Rp 2.300.000' },
    { no: '10.', description: 'Hadiah Lomba Robotic', amount: 'Rp 1.050.000' },
    {
      no: '11.',
      description: 'Konsumsi Peserta lomba dan Seminar',
      amount: 'Rp 2.600.000',
    },
    { no: '12.', description: 'Kesekretariatan', amount: 'Rp 500.000' },
    { no: '13.', description: 'Dokumentasi', amount: 'Rp 500.000' },
  ];

  const fundingSources = [
    { description: 'Kas BEM FMKOM', amount: 'Rp 1.550.000' },
    { description: 'SPONSORSHIP', amount: '-' },
    { description: 'PROPOSAL', amount: '-' },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <table
        cellPadding="10"
        style={{
          borderCollapse: 'collapse',
          width: '100%',
          textAlign: 'left',
          marginBottom: '20px',
        }}
        border="1"
      >
        <thead>
          <tr style={{ backgroundColor: '#d3d3d3', textAlign: 'center' }}>
            <th>NO</th>
            <th>URAIAN</th>
            <th>NOMINAL</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item, index) => (
            <tr key={index}>
              <td style={{ textAlign: 'center' }}>{item.no}</td>
              <td>{item.description}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="2" style={{ textAlign: 'center', fontWeight: 'bold' }}>
              TOTAL PENGELUARAN
            </td>
            <td>Rp 16.550.000</td>
          </tr>
          <tr>
            <td colSpan="2" style={{ textAlign: 'center', fontWeight: 'bold' }}>
              SALDO
            </td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      <table
        cellPadding="10"
        style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'left' }}
        border="1"
      >
        <thead>
          <tr style={{ backgroundColor: '#d3d3d3', textAlign: 'center' }}>
            <th>SUMBER DANA</th>
            <th>NOMINAL</th>
          </tr>
        </thead>
        <tbody>
          {fundingSources.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>
              TOTAL KEKURANGAN DANA
            </td>
            <td>Rp 15.000.000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BudgetTable;
