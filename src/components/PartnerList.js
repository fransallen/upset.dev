import React from 'react';

const PartnerListItem = ({ partner }) => {
  return (
    <div>
      <img src={partner.logo} alt={partner.name} title={partner.name} />
    </div>
  );
};

const PartnerList = ({ partners }) => (
  <div className="partners-logo">
    {partners.items.map((partner, i) => (
      <PartnerListItem partner={partner} key={i} />
    ))}
  </div>
);

export default PartnerList;
