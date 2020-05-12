import React from 'react'

const Section = ({ image, text }) => {
  const getText = text => {
    return { __html: text }
  }
  return (
    <div data-test="infoSection" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img
              src={image && image.url}
              className="img-responsive"
              alt="about img"
            />
          </div>
          <div
            className="col-md-6 col-sm-12 about-des"
            dangerouslySetInnerHTML={getText(text)}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Section
