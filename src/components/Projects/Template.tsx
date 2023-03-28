import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { BiLinkExternal } from "react-icons/bi";
import AText from "@/ui/AText";
import LinkBar from "@/ui/LinkBar";
import ProjectPic from "@/ui/ProjectPic";

interface Prop {
  title: string;
  children: ReactNode;
  web: StaticImageData;
  mobile: StaticImageData;
}

const Template: React.FC<Prop> = ({ title, children, web, mobile }) => {
  return (
    <div className="flex h-auto w-full flex-col-reverse lg:h-144 lg:flex-row">
      <div className="mt-8 mr-4 flex w-full flex-col lg:mt-0 lg:w-6/12">
        <div className="font-extrabold uppercase tracking-widest">Project</div>
        <div className="mt-6 mb-2 text-5xl font-bold lg:text-7xl">
          <AText noskew>{title}</AText>
        </div>
        <div className="mt-2 [&>div]:mt-4">{children}</div>
        <LinkBar>
          Link
          <BiLinkExternal />
        </LinkBar>
      </div>
      <ProjectPic web={web} mobile={mobile} />
    </div>
  );
};

export default Template;
