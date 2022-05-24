import React from "react";

const MyPortfolio = () => {
  return (
    <div className="px-4 md:px-20 lg:px-32 mt-12">
      <p className="text-xl">
        Hi there, I am Majedul Islam. My email address is
        majedulislam393@gmail.com. I passed S.S.C in 2016 and passed H.S.C in
        2018. Now I am studying at B.S.C in degree in Govt. Edward College
        pabna. I start learning web development in 2021. After 1 year I have
        learned Html, Css, Bootstrap, Tailwind Css, Sass, Javascript, Api, React
        Js, React Route, Firebase Authentication, Node Js, Express Js, MongoDB.
        My three projects links in the below:
        <p className="cursor-pointer my-2">
          <a href=" https://groca-2cea6.web.app/">
            {" "}
            1. https://groca-2cea6.web.app/{" "}
          </a>
        </p>
        <p className="cursor-pointer my-2">
          <a href="https://tony-robbins-da9e7.web.app/">
            2. https://tony-robbins-da9e7.web.app/
          </a>
        </p>
        <p className="cursor-pointer my-2">
          <a href="https://lora-convention-center.netlify.app/">
            3. https://lora-convention-center.netlify.app/
          </a>
        </p>
      </p>
    </div>
  );
};

export default MyPortfolio;
