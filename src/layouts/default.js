import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';
import './default.css';

const Layout = ({ children }) => (
  <>
    <Header siteTitle="Frans Allen / upset.dev" />
    <Menu />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
