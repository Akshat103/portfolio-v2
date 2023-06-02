import React, { Component } from 'react';

export default class Porfolio extends Component {

  render() {
    let resumeData = this.props.resumeData;
    
    return (
      <section id="portfolio">
        <h3 className="portfolio-head">Checkout My Work</h3>
        <div className="portfolio-items">
          {resumeData.portfolio &&
            resumeData.portfolio.map((item) => (
              <div key={item.name} className="portfolio-item">
                <div className="item-wrap">
                  <img src={item.imgurl} alt={item.name} className="item-img" />
                  <div className="portfolio-item-overlay">
                    <div className="portfolio-item-details">
                      <h4 className='item-name'>{item.name}</h4>
                      <p>{item.description}</p>
                    </div>
                    <div className="portfolio-item-buttons">
                      {item.githubLink && (
                        <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      )}
                      {item.projectLink && (
                        <a href={item.projectLink} target="_blank" rel="noopener noreferrer">
                          Project
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

      </section>
    );
  }
}