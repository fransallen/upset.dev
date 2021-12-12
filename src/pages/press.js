import React from 'react';
import Layout from '../layouts/default';
import SEO from '../components/seo';

const PressPage = () => (
  <Layout>
    <SEO
      title="Press"
      description="All press releases about the products I make and contribute."
      keywords={[`press`, `news`, `frans allen`, `sirilius kevin`]}
    />
    <div className="blogpage-header">
      <h1>Press</h1>
      <p>All press releases about the products I make and contribute.</p>
    </div>

    <div id="products" style={{ paddingTop: `0` }}>
      <div className="products-all">
        <h3>Sirilius Kevin</h3>
        <div className="projects2">
          <div>
            <a href="https://inet.detik.com/cyberlife/d-5800653/kevin-cah-yogya-pencipta-watermark-ktp-yang-sangat-berguna">
              <h4>detikInet</h4>
              Kevin, Cah Yogya Pencipta Watermark KTP yang Sangat Berguna
            </a>
          </div>

          <div>
            <a href="https://www.kompas.com/tren/read/2021/11/19/181500765/remaja-14-tahun-ini-buat-aplikasi-watermark-ktp-">
              <h4>Kompas.com</h4>
              Remaja 14 Tahun Ini Buat Aplikasi Watermark KTP
            </a>
          </div>

          <div>
            <a href="https://id.techinasia.com/kevin-ciptakan-aplikasi-watermark-ktp">
              <h4>Tech in Asia</h4>
              Sirilius Kevin, Remaja asal Yogya Ciptakan Aplikasi Watermark KTP
            </a>
          </div>

          <div>
            <a href="https://www.cnnindonesia.com/teknologi/20211014125330-185-707721/cara-agar-foto-ektp-tidak-disalahgunakan">
              <h4>CNN Indonesia</h4>
              Cara Agar Foto eKTP Tidak Disalahgunakan
            </a>
          </div>

          <div>
            <a href="https://mojok.co/konter/watermark-ktp-solusi-baru-memerangi-pinjol-laknat/">
              <h4>Mojok.co</h4>
              Watermark KTP, Solusi Baru Memerangi Pinjol Laknat!
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default PressPage;
