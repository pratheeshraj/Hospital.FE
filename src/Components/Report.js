import "./Report.css";
import "./about.css";
import "../index.css";
import NavBars from "../Sections/navbar";
import { FiHome } from "react-icons/fi";
import Footer from "../Sections/footer";
import ToTop from "../Sections/totop";
import { Link } from "react-router-dom";



import "react-toastify/dist/ReactToastify.css";


function Service() {

  return (
    <div>
      <NavBars />
      <div className="banner-wraper">
        <div className="page-banner">
          <div className="container">
            <div className="page-banner-entry text-center">
              <h1>Reports</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/"}>
                      <FiHome />
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Report
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
       <div className="reportTables">
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Disease</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              
            
                  <tr>
                    <td>patientName</td>
                    <td>patientDisease</td>
                    <td>docName</td>
                    <td>docDepartment</td>
                    <td>date</td>
                  </tr>
             
             
            </tbody>
          </table>
        </div>
     
      <>
        
              <div className="reportContainer">
                <div className="reportHeading">
                  <h1>HEALTH REPORT</h1>
                </div>
                <div className="reportDetail">
                  <div>
                    <p>Doctor Name :</p>
                    <p>Number : </p>
                    <p>Department :</p>
                  </div>
                  <div>
                    <p>Patient Name :</p>
                    <p>Age :</p>
                    <p>Gender :</p>
                  </div>
                </div>
                <div className="reportMedical">
                  <div>
                    <p>Blood Group : </p>
                    <p>Disease :</p>
                    <p>Temperature : </p>
                    <p>Weight :</p>
                    <p>BP :</p>
                    <p>Blood Sugar :</p>
                    <p>Remarks :</p>
                  </div>
                  <div>
                    <p>patientBloodGroup</p>
                    <p>patientDisease </p>
                    <p>patientTemperature C</p>
                    <p>patientWeight KG </p>
                    <p>patientBP mm/hg</p>
                    <p>patientGlucose mg/dl</p>
                    <p>extrainfo</p>
                  </div>
                </div>
                <div className="reportMedicines">
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Dosage</th>
                        <th>Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                     
                     
                          <tr>
                            <td>medName</td>
                            <td>dosage</td>
                            <td>duration</td>
                          </tr>
                     
                    
                    </tbody>
                  </table>
                </div>
                <div className="reportDate">
                  <p>Date :12-7-2022</p>
                  <p>Time :1pm </p>
                </div>
              </div>
        
        </>
      <Footer />
      <ToTop />
    </div>
  );
}

export default Service;
