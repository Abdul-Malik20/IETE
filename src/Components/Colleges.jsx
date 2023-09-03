import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Colleges.css';
import { Building } from 'react-bootstrap-icons';

const collegeData = [
  { name: "Sri Venkateswara College of Engineering, Sriperambadur", website: "https://www.svce.ac.in/" },
  { name: "Panimalar Institute of Technology,Poonamallee-Chennai", website: "https://panimalar.ac.in/" },
  { name: "Easwari Engineering College", website: "https://srmeaswari.ac.in/" },
  { name: "Veltech Multi Engineering College", website: "https://www.veltechmultitech.org/" },
  { name: "SRM Institute of Science and Technology", website: "https://www.srmist.edu.in/" },
  { name: "Jeppiar Institute of Technology", website: "https://jeppiaarcollege.org/jeppiaar/" },
  { name: "RMK College of Engineering and Technology", website: "https://rmkcet.ac.in/" },
  { name: "Velammal Engineering College", website: "https://velammal.edu.in/" },
  { name: "KCG College of Technology", website: "https://kcgcollege.ac.in/" },
  { name: "Saveetha Engineering College", website: "https://www.saveetha.ac.in/" },
  { name: "Dr. M G R Educational & Research Institute", website: "https://www.drmgronline.in/drmgr-university-online-education-ct/?source=MGR&media=IGAW&campaign=BRAND&cn=s-brand-d&ag=allcourses&utm_term=dr%20mgr%20online%20university&gad=1&gclid=CjwKCAjw3dCnBhBCEiwAVvLcu6Eo8u8upDBUW1oCh9Xpqf3xhmBQnENjlHgThGQdmtG7oYuhJTrZWhoCShwQAvD_BwE" },
  { name: "DMI College of Engineering", website: "https://dmice.ac.in/" },
  { name: "MISRIMAL NAVAJEE MUNOTH JAIN ENGINEERING COLLEGE", website: "https://www.mnmjec.ac.in/" },
  
];

const Colleges = () => {
  return (
    <div className="container">
    <h1 className="text-center mb-4"><strong>LIST OF COLLEGES</strong></h1>
    <div className="row">
      {collegeData.map((college, index) => (
        <div key={index} className="col-md-6 mb-3">
          <div className="card" style={{backgroundColor:'#A73121'}}>
            <div className="card-body text-center">
              <h5 className="card-title">
                <a href={college.website} target="_blank" rel="noopener noreferrer" >
                  <Building size={20} />
                  {college.name}
                </a>
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Colleges;
