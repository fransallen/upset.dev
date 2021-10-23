import React, { useState } from 'react';
import axios from 'axios';

import Layout from '../layouts/default';
import SEO from '../components/seo';

const LivePage = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
      alert(msg);
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: 'POST',
      url: 'https://getform.io/f/1d7483c5-ac16-4c64-b07d-69f522753e12',
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, 'Thanks!', form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <Layout>
      <SEO
        title="Live"
        description="Watch whenever Frans Allen is on Live Streaming."
        keywords={[`live`, `tech`, `frans allen`]}
      />
      <div className="blogpage-header">
        <h1>Live</h1>
        <p>Get notified when I go live.</p>
      </div>

      <div id="products">
        <form onSubmit={handleOnSubmit} className="form">
          <div className="ct">
            <h4 htmlFor="name">Name</h4>
            <input type="text" name="name" placeholder="Your name here..." required />
          </div>

          <div className="ct">
            <h4 htmlFor="email">Email</h4>
            <input id="email" type="email" name="email" placeholder="frans@example.com" required />
          </div>

          <div className="ct">
            <h4 htmlFor="twitter">Twitter</h4>
            <input id="twitter" type="text" name="twitter" placeholder="@fransallen" />
          </div>

          <div className="ct">
            <input type="submit" value="Send" />
          </div>

          <div className="ct">
            <small>I will never share your data with anyone.</small>
          </div>
        </form>
      </div>

    </Layout>
  )
}

export default LivePage;
