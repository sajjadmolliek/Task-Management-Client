import logo from "../../assets/logo.png";
import { FaFacebookF } from "react-icons/Fa";
import { AiFillYoutube } from "react-icons/Ai";
import { BsLinkedin, BsTwitter } from "react-icons/Bs";

const Footer = () => {

return (
  <div className="bg-[#2F0F00]">
    <div className="w-[95%] mx-auto">
      <footer className="footer  py-10 justify-around text-white">
        <nav>
          <header className="footer-title">YOUR ACCOUNT</header>
          <a className="link link-hover">Running Shoes</a>
          <a className="link link-hover">Football Shoes</a>
          <a className="link link-hover">Basketball Shoes</a>
          <a className="link link-hover">Volleyball Shoes</a>
          <a className="link link-hover">Trainee Shoes</a>
        </nav>
        <nav>
          <header className="footer-title">INFORMATION</header>
          <a className="link link-hover">Returns</a>
          <a className="link link-hover">F.A.Q</a>
          <a className="link link-hover">Shipping Policy</a>
          <a className="link link-hover">Search Terms</a>
          <a className="link link-hover">Contact Us</a>
        </nav>
        <nav>
          <header className="footer-title">HAPPY HOURS</header>
          <a className="link link-hover">Monday - Friday</a>
          <a className="link link-hover">8a.m - 10 p.m</a>
          <a className="link link-hover">Saturday & Sunday</a>
          <a className="link link-hover">10a.m - 8 p.m</a>
        </nav>
        <form className="place-items-end">
        <div className="flex justify-end">
            <img src={logo} alt="Logo" className="w-[20%]" />
          </div>
          <fieldset className="form-control w-[90%] md:w-[100%] ">
            <label className="label">
              <span className="label-text opacity-40 text-white">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16 bg-[#FFA80033]"
              />
              <button className="btn bg-[#FE834C] text-white font-bold border-0 absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </fieldset>
          <div className="flex w-[88%] md:w-[98%]  gap-6 mt-8 flex-wrap">
              <FaFacebookF className="bg-[#FE834C] p-1 text-3xl rounded-full"></FaFacebookF>
              <AiFillYoutube className="bg-[#FE834C] p-1 text-3xl rounded-full"></AiFillYoutube>
              <BsLinkedin className="bg-[#FE834C] p-1 text-3xl rounded-lg"></BsLinkedin>
              <BsTwitter className="bg-[#FE834C] p-1 text-3xl rounded-full"></BsTwitter>
          </div>
          <br />
          <aside>
            <p>
              Copyright © 2023 - All right reserved by Online Study Explore
            </p>
          </aside>
        </form>
      </footer>
    </div>
  </div>
);
};

export default Footer;
