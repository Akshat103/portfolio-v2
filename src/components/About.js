import React, { Component } from 'react';
export default class About extends Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <section id="about" >
            <div className="row">

               <div className="three columns">

                  <img className="profile-pic" src="images/profile.jpg" alt="" />

               </div>

               <div className="nine columns main-col">

                  <h2>About Me</h2>
                  <p>
                     {
                        resumeData.aboutme
                     }
                  </p>

                  <div className="row">

                     <div className="columns contact-details">

                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{resumeData.name}</span>
                           <br></br>
                           <span>
                              {resumeData.address}
                           </span>
                           <br></br>
                           <span>
                           <a href="mailto:akshattamrakar.work@gmail.com">akshattamrakar.work@gmail.com</a>
                           </span>
                           <br></br>
                           <span>
                              <a href='https://drive.google.com/uc?export=download&id=1Bs0sL1zt0nm_6sKrJ4t3a8I09TPXw34k'><button class="buttonDownload">Resume</button></a>
                           </span>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}