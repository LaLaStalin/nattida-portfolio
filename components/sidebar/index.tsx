import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const SideBar = ({
  setPopUpSidebar,
  linkActive,
  scrollToElement,
  navLinks,
}: any) => {
  return (
    <div className="hidden sm:block absolute top-0 right-0 w-[300px] bg-[#222] h-[500px]">
      <button onClick={() => setPopUpSidebar(false)}>
        <CloseIcon />
      </button>

      {navLinks.map((link: any) => (
        <Link
          href={link.hrefLink}
          passHref
          key={link.name}
          scroll={false}
          onClick={() => scrollToElement(link.name)}
        >
          <button className="flex  items-center ">
            <p
              className="text-[22px] font-bold hover:opacity-60 opacity-40 capitalize"
              style={{ opacity: linkActive === link.name ? ".8" : "" }}
            >
              {link.name === "#" ? "start" : link.name}
            </p>

            <span className="text-[22px]  font-bold opacity-40">{"/>"}</span>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
