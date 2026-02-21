import { RxCross2 } from "react-icons/rx";
const Skills = () => {
  return (
    <div className=" px-5 md:px-12 mb-10 w-[100%]">
      <div className="flex items-end gap-1">
        <h1 className="font-bold text-[40px] md:text-[60px]">
          Skills <span className="text-purple-500">.</span>
        </h1>
      </div>

      <div className="flex justify-between flex-wrap h-[auto] mt-10 gap-6 ">
        <div>
          <ul>
            <p className="font-bold text-xl">Web Design</p>
            <li>Responsive Design</li>
            <li>User Research</li>
            <li>Logo Design</li>
          </ul>
        </div>
        <div>
          <ul>
            <p className="font-bold text-xl">Frontend</p>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>CSS3</li>
            <li>HTML</li>
            <li>TailwindCSS</li>
          </ul>
        </div>
        <div>
          <ul>
            <p className="font-bold text-xl">Backend</p>
            <li>NodeJS</li>
            <li>MongoDB</li>
            <li>ExpressJs</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div>
          <ul>
            <p className="font-bold text-xl">Soft Skills</p>
            <li>Effective communication</li>
            <li>Collaboration</li>
            <li>Commitment</li>
            <li>Leadership</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Skills;
