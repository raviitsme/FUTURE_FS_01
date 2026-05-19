import Card from "./ui/Card";

const AboutMe = () => {
  return (
    <section className="min-h-screen w-full mt-12 flex flex-col">
      <h1 className="text-6xl text-white text-center">About Me</h1>
      <div className="flex w-full h-2.5 justify-center items-center">
        <div className="w-32 h-px bg-linear-[to_right,transparent,rgba(34,211,238,0.6),rgba(168,85,247,0.6),transparent]"></div>
      </div>
      <div className="mt-60 text-center flex flex-col w-full justify-end items-end">
        <Card classname="transition-all duration-150 bg-muted-light hover:bg-black">
          Hello
        </Card>
        <Card classname="transition-all duration-150 bg-muted-light hover:bg-black">
          Hello
        </Card>
        <Card classname="transition-all duration-150 bg-muted-light hover:bg-black">
          Hello
        </Card>
        <Card classname="transition-all duration-150 bg-muted-light hover:bg-black">
          Hello
        </Card>
      </div>
    </section>
  );
};

export default AboutMe;
