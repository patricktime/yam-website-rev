import React from "react";

export default function Outreach() {
  const [showList, setShowList] = React.useState(false);
  console.log('🚀 ~ Outreach ~ showList', showList);
  return (
    <section className="outreach-section container">
      <div className="outreach-banners">
        <div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfmoYQNX9JFVwcouBZ7a7WDf1RK_nfejDNgkTquQgHhW-Vsww/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={require('../../assets/home/outreach/tech_graphic.png')} alt="Now hiring CTO" />
          </a>
        </div>
        <div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSetFEY2TltA6o5y9P0HJ2FFLbUohtdXo-lshrn4XEnGQJAbKQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={require('../../assets/home/outreach/outreach_graphic.png')} alt="now hiring application in bio" />
          </a>
        </div>
      </div>
      <p>
        <button
          className={`incentive-list-btn${showList ? ' expand' : ''}`}
          type="button"
          onClick={() => setShowList((prevShowList) => !prevShowList)}
          tabIndex={0}
          aria-expanded={showList}
          aria-controls="incentive-list"
        >
          Incentives for joining YAM
        </button>
        <ul
          className={`list-group list-group-flush incentive-list${showList ? ' expand' : ''}`}
          id="incentive-list"
        >
          <li className="list-group">Connect with artists around the world/networking opportunities</li>
          <li className="list-group">Get work experience with an international 501(c)3 nonprofit organization</li>
          <li className="list-group">Looks good on college applications!</li>
          <li className="list-group">Develop leadership and organization skills</li>
          <li className="list-group">Work towards our mission of getting the arts to be taken more seriously and elevating young artists</li>
          <li className="list-group">Form bonds with our team: a variety of people with similar interests and goals</li>
          <li className="list-group">Get to directly benefit the community by organizing events and through donations</li>
          <li className="list-group">Get community service hours (our organization is eligible for the President’s Volunteer Service Award)</li>
          <li className="list-group">Opportunities to get promoted inside the organization</li>
          <li className="list-group">Get to partner with other organizations and individuals with similar goals/missions</li>

        </ul>
      </p>
    </section>
  )
}