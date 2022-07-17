import { useEffect, useState } from "react";
import jobService from "./services/jobs"

import Header from "./components/Header/Header";
import bgImageDesktop from './/assets/images/bg-header-desktop.svg'
import Joblist from "./components/JobList/Joblist";



function App() {
  const [jobs, setJobs] = useState([]);  
  function getJobs() { 
      jobService.getAll().then((allJobs) => {
        setJobs(allJobs)
      })
  }
  useEffect(getJobs, []);
  return (
    <>
      <Header src={bgImageDesktop} alt="backgroud image"/>
      <Joblist jobs={jobs} />
      {console.log('Job:', jobs)}
    </>
  );
}

export default App;
