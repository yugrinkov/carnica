import React from 'react'

const Copyright = () => {
  return (
    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-sm-6">
            <p>© {new Date().getFullYear()} Клуб Карники (Украина)</p>
          </div>
          <div className="col-md-2 col-sm-6">
            <ul className="social-icons">
              <li>
                <a
                  href="https://www.facebook.com/ApiJournal/"
                  className="fa fa-facebook"
                ></a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCXGGeAcFY8cfSSgkihDSa9w"
                  className="fa fa-youtube"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Copyright
