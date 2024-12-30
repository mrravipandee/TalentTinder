import React from "react";
import { Card } from "./ui/Card";

const worksData = [
  {
    avatar: "https://png.pngtree.com/png-clipart/20230914/original/pngtree-beautiful-woman-vector-png-image_12158154.png",
    avatarName: "Shweta",
    title: "Upload Your Resume",
    description:
      "Begin by uploading your resume. The system will automatically scan it and extract your skills, experience, and qualifications.",
  },
  {
    avatar: "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
    avatarName: "Ravi",
    title: "Skill Matching",
    description:
      "The platform uses a machine learning algorithm to match your skills with available job openings, ensuring a perfect fit.",
  },
  {
    avatar: "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
    avatarName: "Ravi",
    title: "Discover Top Companies",
    description:
      "Once your skills are matched, discover top companies actively looking for professionals like you. Apply directly to these roles.",
  },
];

const Works: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-[#0a0f34]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-10">
          How <span className="text-[#436ef5]">TalentFinder</span> Works?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {worksData.map((work, index) => (
            <Card
              key={index}
              avatar={work.avatar}
              avatarName={work.avatarName}
              stepTitle={work.title}
              description={work.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
