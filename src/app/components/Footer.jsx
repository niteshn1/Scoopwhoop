import {
  FaInstagram,
  FaDribbble,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    { label: "YouTube", icon: FaYoutube },
    { label: "Instagram", icon: FaInstagram },
    { label: "Twitter", icon: FaXTwitter },
  ];

  const links = [
    [
      { label: "About us", key: "item-1-1" },
      { label: "Contact us", key: "item-1-3" },
      { label: "Careers", key: "item-1-4" },
    ],
    [
      { label: "Advertise With Us", key: "header-2" },
      { label: "Privacy Policy", key: "item-2-1" },
      { label: "Terms And Conditions", key: "item-2-2" },
    ],
  ];

  return (
    <div className="w-full flex items-end justify-center font-poppins border border-yellow-300">
      <div className="py-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 bg-white text-white w-full p-4 relative">
        <div className="  ml-14">
          <div className="footer-img flex items-center ml-12">
            <img
              src={
                "data:image/png;base64,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"
              }
              alt=""
              className="w-16 h-auto"
            />
            <div className="ml-[10rem] items-center">
              <span className="text-xl font-bold pl-2 text-slate-500">
                Follow Us
              </span>
              <div className="footer-icons flex items-center space-x-3">
                {socialLinks.map((socialLink, index) => {
                  const Icon = socialLink.icon;
                  return (
                    <Icon
                      key={`social-${index}`}
                      className="w-14 h-14 p-2 rounded-full bg-green-700 hover:bg-white hover:text-green-700 cursor-pointer"
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="infos text-gray-400">
            <span>ScoopWhoop Media Pvt.Ltd.</span>
          </div>
        </div>
        <div className="mx-[20rem] grid w-full py-5 sm:py-0 grid-cols-2 ">
          {links.map((col, index) => {
            return (
              <ul className={`col col-${index + 1}`} key={`col-${index}`}>
                {col.map((link, index) => {
                  return (
                    <li
                      key={`link-${col}-${index}`}
                      className={`text-gray-400 hover:text-blue-600 cursor-pointer ${
                        link.key === "header-1" || link.key === "header-2"
                          ? "text-2xl text-white"
                          : ""
                      }`}
                    >
                      {link.label}
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
