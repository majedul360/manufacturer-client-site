import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDollar,
  faPeopleGroup,
  faSackDollar,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import { faAvianex } from "@fortawesome/free-brands-svg-icons";
const BusinessSummery = () => {
  return (
    <div className="mt-20">
      <h2 className="text-center pb-12 text-4xl">Business Summery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 px-4 md:px-8 lg:px-32 text-center py-8">
        <div>
          <FontAwesomeIcon
            className="text-5xl text-accent-800"
            icon={faPeopleGroup}
          />
          <h2 className="text-3xl my-4 font-bold text-accent">260+</h2>
          <h3 className="text-xl">Happy Clients</h3>
        </div>
        <div>
          <FontAwesomeIcon
            className="text-5xl text-accent-800"
            icon={faSackDollar}
          />
          <h2 className="text-3xl my-4 font-bold text-accent">120M+</h2>
          <h3 className="text-xl">Revenue</h3>
        </div>
        <div>
          <FontAwesomeIcon
            className="text-5xl text-accent-800"
            icon={faCommentDollar}
          />
          <h2 className="text-3xl my-4 font-bold text-accent">350+</h2>
          <h3 className="text-xl">Feedbacks</h3>
        </div>
        <div>
          <FontAwesomeIcon
            className="text-5xl text-accent-800"
            icon={faToolbox}
          />
          <h2 className="text-3xl my-4 font-bold text-accent">50+</h2>
          <h3 className="text-xl">Tools</h3>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;
