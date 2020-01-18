import React, { Component } from "react";
import Job from "./Job";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobtitle: [
        {
          // Job Experience 1
          id: 1,
          label: "Project Assistant III",
          company: "Food and Nutrition Research Institute",
          duration: "July 2019 - Present",
          desc1:
            "1. Assists in the development of NNS Online Training Website.",
          desc2:
            "2. Assists in the updating of the electronic Data Collection System (e-DCS).",
          desc3: "3. Assists in the implementation of e-DCS.",
          desc4: "4. Assists in database management.",
          desc5: "5. Assists in the administration of websites and servers.",
          desc6: "6. Assists in the maintainance of Remote Desktop Servers.",
          desc7:
            "7. Assists in the development of information systems as required by division.",
          desc8: "8. Assists in the maintainance of IT equipment.",
          desc9: "9. Assists in computer network troubleshooting.",
          desc10: "10. Assists in the maintainance of NAMD computer room.",
          desc11: "11. Assists in data encoding."
        },
        {
          // Job Experience 2
          id: 2,
          label: "Project Assistant II",
          company: "Food and Nutrition Research Institute",
          duration: "January 2019 - June 2019",
          desc1:
            "1. Assists in the development of NNS Online Training Website.",
          desc2:
            "2. Assists in the updating of the electronic Data Collection System (e-DCS).",
          desc3: "3. Assists in the implementation of e-DCS.",
          desc4: "4. Assists in database management.",
          desc5: "5. Assists in the administration of websites and servers.",
          desc6: "6. Assists in the maintainance of Remote Desktop Servers.",
          desc7:
            "7. Assists in the development of information systems as required by division."
        },
        {
          // Job Experience 3
          id: 3,
          label: "Project Assistant I",
          company: "Food and Nutrition Research Institute",
          duration: "January 2017 - December 2018",
          desc1:
            "1. Edits and encodes data on anthropmetry, clinical and health, government program participant, food security, maternal and IYCF components form data collection system.",
          desc2:
            "2. Assisted in the inventory, control and safekeeping of logbook,consent form, certification of non-coverage of areas and NSO listings.",
          desc3: "3. Assisted in machine validation and data cleaning.",
          desc4: "4. Performed data encoding.",
          desc5:
            "5. Designed graphics as needed for the presentation and publication materials.",
          desc6: "6. Developed infographics for the 44th FNRI Seminar Series.",
          desc7:
            "7. Created an audio visual presentation for the launching of Public Use Files project.",
          desc8: "8. Produced 2-D animated video for the planning workshop.",
          desc9: "9. Designed icons for the eNutrition website.",
          desc10:
            "10. Captures the highlighs of the 44th FNRI Seminar Series through same day edit (SDE) videos."
        },
        {
          // Job Experience 4
          id: 4,
          label: "Project Technician I",
          company: "Food and Nutrition Research Institute",
          duration: "September 2015 - December 2016",
          desc1:
            "1. Assisted in the inventory, control and safekeeping of logbook, consent form, certification of non-coverage of areas and NSO listings.",
          desc2: "2. Assisted in machine validation and data cleaning.",
          desc3: "3. Performed data encoding."
        }
      ]
    };
  }
  render() {
    return (
      <React.Fragment>
        <Job key={this.state.jobtitle.id} job={this.state.jobtitle} />
      </React.Fragment>
    );
  }
}

export default Experience;
