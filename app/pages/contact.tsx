import { TimelineComponent } from "@/components";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Contact = () => {
  const contactList = [
    {
      href: "https://www.linkedin.com/in/nattidajang/",
      icon: "basil:linkedin-solid",
      name: "in/nattidajang",
    },
    {
      href: "https://medium.com/@lalanattida",
      icon: "bi:medium",
      name: "medium.com/@lalanattida",
    },

    {
      href: "https://github.com/LaLaStalin",
      icon: "mdi:github",
      name: "github.com/LaLaStalin",
    },
    {
      href: "",
      icon: "ic:baseline-phone",
      name: "(+66) 92-638-1338",
    },
    {
      href: "",
      icon: "mdi:location",
      name: "Samut Prakan, Thailand",
    },
    {
      href: "www.linkedin.com/in/nattidajang",
      icon: "material-symbols:alternate-email",
      name: "nattida.jangpipat@gmail.com",
    },
  ];

  return (
    <section id="contact" className="bg-[#0e0d10]  px-[16px]">
      <div className="w-full h-full flex flex-col justify-start max-w-[1024px] mx-auto z-20">
        <TimelineComponent hightBottom="100%" lineTop={true}>
          <p className=" text-text-secondaryDark text-[18px] font-light pt-[62px] z-10">
            Contact{" />"}
          </p>

          {/* Find me on */}
          <div className="mt-[180px] mb-[240px]">
            <h1 className="text-while text-[22px] pt-[8px] pb-[16px]">
              Find me on:
            </h1>
            <div className="grid grid-cols-3 gap-[16px] md:grid-cols-2 sm:grid-cols-1">
              {contactList.slice(0, 3).map((contact) => (
                <Link href={contact.href} target="_blank" key={contact.name}>
                  <button className="text-text-secondaryDark text-[16px] p-[8px] ml-[-8px] flex lfex items-center gap-2 hover:bg-[#5a18df0f] rounded-[8px]">
                    <Icon
                      icon={contact.icon}
                      className="text-primary-mainDark"
                      width="32"
                      height="32"
                    />
                    {contact.name}
                  </button>
                </Link>
              ))}

              <button className="text-text-secondaryDark text-[16px] p-[8px] ml-[-8px] flex lfex items-center gap-2 hover:bg-[#5a18df0f] rounded-[8px]">
                <Icon
                  icon={contactList[3].icon}
                  className="text-primary-mainDark"
                  width="32"
                  height="32"
                />
                {contactList[3].name}
              </button>
              <button className="text-text-secondaryDark text-[16px] p-[8px] ml-[-8px] flex lfex items-center gap-2 hover:bg-[#5a18df0f] rounded-[8px]">
                <Icon
                  icon={contactList[4].icon}
                  className="text-primary-mainDark"
                  width="32"
                  height="32"
                />
                {contactList[4].name}
              </button>

              <Link href={contactList[5].href} target="_blank">
                <button className="text-text-secondaryDark text-[16px] p-[8px] ml-[-8px] flex lfex items-center gap-2 hover:bg-[#5a18df0f] rounded-[8px]">
                  <Icon
                    icon={contactList[5].icon}
                    className="text-primary-mainDark"
                    width="32"
                    height="32"
                  />
                  {contactList[5].name}
                </button>
              </Link>
            </div>
          </div>

          <div className="flex w-full justify-between items-end">
            <p className="text-[12px] text-text-secondaryDark pb-[8px]">
              {
                "© Made with </> by LaLa. Thailand 2023. reference desgin: https://yasio.dev"
              }
            </p>
            <span className="loader mr-[-300px] md:mr-[-200px] sm:mr-[0px]"></span>
          </div>
        </TimelineComponent>
      </div>
    </section>
  );
};

export default Contact;
