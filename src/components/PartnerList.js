import React from 'react';

const PartnerListItem = ({ partner }) => {
  return (
    <div>
      <img
        className={'partner-' + partner.name.toLowerCase()}
        src={partner.logo}
        alt={partner.name}
      />
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
