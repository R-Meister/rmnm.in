const Story = () => {
  const divStyle = {
    fontFamily: "Poppins",
  };
  return (
    <div className="px-5 md:px-12 mb-10">
      <div className="flex items-end gap-1">
        <h1 className="font-bold text-[40px] md:text-[60px]">
          About <span className="text-purple-500">.</span>
        </h1>
      </div>
      <div className="flex justify-center items-center  h-[auto] mt-10 ">
        <h1 style={divStyle} className="md:text-xl">
          I am a passionate developer with a deep-rooted love for{" "}
          <span className="text-purple-500">technology</span> and how it can be
          used to solve real-world problems. My journey started with curiosity
          and has led me to <span className="text-purple-500">mastering</span>{" "}
          various <span className="text-purple-500">web development</span> tools
          and frameworks. Through continuous learning, hands-on experience, and
          a drive to excel, I have grown into a confident developer, eager to{" "}
          <span className="text-purple-500">create innovative solutions</span>{" "}
          and collaborate on exciting projects.
        </h1>
      </div>
    </div>
  );
};
export default Story;
