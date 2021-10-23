import React, { useState } from 'react';
import axios from 'axios';

import Layout from '../layouts/default';
import SEO from '../components/seo';

const TakeMeOutPage = () => {
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
      url: 'https://getform.io/f/77565557-5480-4b30-9f4f-8fb6b67636f1',
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
        title="Take Me Out"
        description="Hangout with Frans Allen."
        keywords={[`dating`, `hangout`, `frans allen`]}
      />
      <div className="blogpage-header">
        <h1>Take Me Out</h1>
        <p>Wanna take me on a date? Let me know what you like :)</p>
      </div>

      <div id="products">
        <form onSubmit={handleOnSubmit} className="form">
          <div className="ct">
            <h4 htmlFor="name">Food preference</h4>
            <div id="checkbox">
              <div className="checkbox">
                <input type="checkbox" id="western" name="food[]" value="Western" />
                <label htmlFor="western" className="checkbox-label">Western</label>
              </div>

              <div className="checkbox">
                <input type="checkbox" id="indonesian" name="food[]" value="Indonesian" />
                <label htmlFor="indonesian" className="checkbox-label">Indonesian</label>
              </div>

              <div className="checkbox">
                <input type="checkbox" id="korean" name="food[]" value="Korean" />
                <label htmlFor="korean" className="checkbox-label">Korean</label>
              </div>

              <div className="checkbox">
                <input type="checkbox" id="japanese" name="food[]" value="Japanese" />
                <label htmlFor="japanese" className="checkbox-label">Japanese</label>
              </div>
            </div>
          </div>

          <div className="ct">
            <h4 htmlFor="name">Location</h4>
            <div id="radio">
              <div className="radio">
                <input type="radio" id="walking-distance" name="location" value="Walking distance" />
                <label htmlFor="walking-distance" className="radio-label">Walking distance</label>
              </div>

              <div className="radio">
                <input type="radio" id="30mins-ride" name="location" value="< 30 min ride" />
                <label htmlFor="30mins-ride" className="radio-label">&lt; 30 min ride</label>
              </div>

              <div className="radio">
                <input type="radio" id="other-town" name="location" value="Bring me to other town" />
                <label htmlFor="other-town" className="radio-label">Bring me to other town</label>
              </div>
            </div>
          </div>

          <div className="ct">
            <h4 htmlFor="name">Ambient</h4>
            <div id="checkbox">
              <div className="checkbox">
                <input type="checkbox" id="live-music" name="ambient[]" value="Live music" />
                <label htmlFor="live-music" className="checkbox-label">Live music</label>
              </div>

              <div className="checkbox">
                <input type="checkbox" id="great-view" name="ambient[]" value="Great view" />
                <label htmlFor="great-view" className="checkbox-label">Great view</label>
              </div>

              <div className="checkbox">
                <input type="checkbox" id="instagrammable" name="ambient[]" value="Instagrammable" />
                <label htmlFor="instagrammable" className="checkbox-label">Instagrammable</label>
              </div>
            </div>
          </div>

          <div className="ct">
            <h4 htmlFor="name">Budget (per person)</h4>
            <div id="checkbox">
              <div className="checkbox">
                <input type="checkbox" id="250" name="budget[]" value=">IDR 250,000" />
                <label htmlFor="250" className="checkbox-label">&gt; IDR 250,000</label>
              </div>

              <div className="checkbox">
                <input type="checkbox" id="249" name="budget[]" value="IDR 50,000 - 249,000" />
                <label htmlFor="249" className="checkbox-label">IDR 50,000 - 249,000</label>
              </div>

              <div className="checkbox">
                <input type="checkbox" id="50" name="budget[]" value="< IDR 50,000" />
                <label htmlFor="50" className="checkbox-label">&lt; IDR 50,000</label>
              </div>

              <div className="checkbox">
                <input type="checkbox" id="0" name="budget[]" value="IDR 0 (you expect me to pay for your food)" />
                <label htmlFor="0" className="checkbox-label">IDR 0 (you expect me to pay for your food)</label>
              </div>
            </div>
          </div>

          <div className="ct">
            <h4 htmlFor="name">I would like to know your name</h4>
            <input type="text" name="name" placeholder="Your name here..." required />
          </div>

          <div className="ct">
            <h4 htmlFor="phone">Your phone number so I contact you</h4>
            <input id="phone" type="text" name="phone" placeholder="+628..." required />
          </div>

          <div className="ct">
            <h4 htmlFor="instagram">Your Instagram so we can see each other</h4>
            <input id="instagram" type="text" name="instagram" placeholder="@instagram" />
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

export default TakeMeOutPage;
