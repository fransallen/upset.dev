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

          <div>
            <a href="https://www.suara.com/news/2021/10/15/162419/bocah-14-tahun-bikin-aplikasi-watermark-ktp-demi-cegah-jebakan-pinjol-ini-cara-pakainya">
              <h4>Suara.com</h4>
              Bocah 14 Tahun Bikin Aplikasi Watermark KTP Demi Cegah Jebakan Pinjol, Ini Cara Pakainya
            </a>
          </div>

          <div>
            <a href="https://techbiz.id/2021/10/aplikasi-watermark-ktp-ala-bocah-14-tahun-ini-bantu-hindari-jebakan-pinjol/">
              <h4>Techbiz.id</h4>
              Aplikasi Watermark KTP ala Bocah 14 Tahun Ini Bantu Hindari Jebakan Pinjol
            </a>
          </div>

          <div>
            <a href="https://mikrofon.pikiran-rakyat.com/teknologi/pr-1052787043/aplikasi-watermark-ktp-dari-remaja-berusia-14-tahun-ini-bisa-menyelamatkanmu-dari-jebakan-pinjol">
              <h4>Mikrofon.id</h4>
              Aplikasi Watermark KTP dari Remaja Berusia 14 Tahun Ini Bisa Menyelamatkanmu dari Jebakan Pinjol
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default PressPage;
