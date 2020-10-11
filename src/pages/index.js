import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts/default';
import ProjectList from '../components/ProjectList';
import Project2List from '../components/Project2List';
import PartnerList from '../components/PartnerList';

const IndexPage = ({ data }) => (
  <Layout>
    <div
      id="whoami"
      dangerouslySetInnerHTML={{ __html: data.takeshape.about.bioHtml }}
    />

    <div id="projects" className="section">
      <h2 className="title">Projects/OSS</h2>

      <ProjectList projects={data.takeshape.projects} className="projects" />
    </div>

    <div id="projects2">
      <Project2List projects2={data.takeshape.projects2} />

      <div className="see-more mt-10">
        <a
          className="umami--click--btn-see-more-projects"
          href="https://github.com/fransallen"
        >
          See more
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
          </svg>
        </a>
      </div>
    </div>

    <div id="partners" className="section mt-20">
      <h2 className="title">I work with these companies</h2>

      <PartnerList partners={data.takeshape.partners} />
    </div>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    takeshape {
      about: getAbout {
        bioHtml
      }
      projects: getProjectList {
        items {
          name
          description
          url
          icon
          startDate
        }
      }
      projects2: getProjectSmallList {
        items {
          name
          description
          url
        }
      }
      partners: getPartnerList {
        items {
          name
          logo
        }
      }
    }
  }
`;
