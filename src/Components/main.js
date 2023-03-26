import React, { useState } from "react";
import "../Styles/main.css";
import Navbar from "./navbar";
import Image1 from "../Assests/exp.png";
import Image2 from "../Assests/exp3.png";
import Image3 from "../Assests/exp2.png";
import aicon1 from "../Assests/aicon1.png";
import aicon2 from "../Assests/aicon2.png";
import aicon3 from "../Assests/aicon3.png";
import aicon4 from "../Assests/aicon4.png";
import aicon5 from "../Assests/aicon5.png";
import aicon6 from "../Assests/aicon6.png";
import aicon7 from "../Assests/aicon7.png";
import aicon8 from "../Assests/aicon8.png";
import icon1 from "../Assests/icon1.png";
import icon2 from "../Assests/icon2.png";
import icon3 from "../Assests/icon3.png";
import icon4 from "../Assests/icon4.png";
import icon5 from "../Assests/icon5.png";
import icon6 from "../Assests/icon6.png";
import icon7 from "../Assests/icon7.png";
import brandLogo from "../Assests/brandname.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import loader from "../Assests/loading.gif";

const ImageVariant = {
  hidden: {
    // scale: 0,
    y: "100vh",
    opacity: 0,
  },
  visible: {
    // scale: 1,
    y: "-25vh",
    opacity: 0.5,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};
const ImageVariant1 = {
  hidden: {
    // scale: 0,
    y: "100vh",
    opacity: 0,
  },
  visible: {
    // scale: 1,
    y: 0,
    opacity: 0.5,
    transition: {
      delay: 0.25,
      duration: 0.5,
      ease: "easeInOut",
      // when: "beforeChildren",
      // staggerChildren: 0.4,
    },
  },
};
const ImageVariant2 = {
  hidden: {
    // scale: 0,
    y: "100vh",
    opacity: 0,
  },
  visible: {
    // scale: 1,
    y: "-5vh",
    opacity: 0.5,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      // when: "beforeChildren",
      // staggerChildren: 0.4,
    },
  },
};

const banner = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.6,
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};
const brandLinevariant = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      delay: 1.4,
      duration: 0.4,
    },
  },
};

const MainPage = () => {
  const [errorMssg, setErrorMssg] = useState(false);
  const [successMssg, setSuccessMssg] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div className="mainContainer">
      <Navbar />
      <div className="  mainContainer1" id="home">
        <motion.img
          src={Image1}
          alt=""
          className="experimentImage1"
          variants={ImageVariant2}
          initial="hidden"
          animate="visible"
        />
        <motion.img
          src={Image2}
          alt=""
          className="experimentImage"
          variants={ImageVariant1}
          initial="hidden"
          animate="visible"
        />
        <motion.img
          src={Image3}
          alt=""
          className="experimentImage2"
          variants={ImageVariant}
          initial="hidden"
          animate="visible"
        />
        <motion.div
          className="mainContainer1Heading"
          variants={banner}
          initial="initial"
          animate="animate"
        >
          World is moving fast,
          <br />
          Your <span className="brandHighlight">Brand</span> should get a
          <br />
          boost too.
        </motion.div>
        <motion.div
          className="  brandLineMainPage"
          variants={brandLinevariant}
          initial="hidden"
          animate="visible"
        >
          So, we connect Strategy with Creativity to grow your brand to the next
          level.
        </motion.div>
      </div>
      <div className="mainContainer2">
        <div className="brandParaContainer">
          <div className="brandPara">
            <div className="brandParaHeading">Our Mission</div>
            <div>
              "This is a Brand para which is going to be 3 lines big and will be
              the center purpose and goal of our company which will help the
              viewer understand whi we are and what we do. This is a Brand para
              which is going to be 3 lines big and willl of our company which
              will help the viewer understand whi we are and "
            </div>
          </div>
        </div>
      </div>
      <motion.div className="servicesContainer1" id="servicesweoffer">
        <motion.div className="servicesTitle">
          Services <br /> We <br /> offer
        </motion.div>
        <motion.div
          className="servicesEachContainer"
          transition={{ when: "beforeChildren", staggerChildren: 0.3 }}
        >
          <motion.div
            className="servicesEach"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={aicon7} alt="" className="servicesEachIcon" />
            Branding
            <div className="servicesEachLine">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, placeat. Harum, accusamus?
            </div>
          </motion.div>
          <motion.div
            className="servicesEach"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={aicon1} alt="" className="servicesEachIcon" />
            Digital Marketing
            <div className="servicesEachLine">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, placeat. Harum, accusamus?
            </div>
          </motion.div>
          <motion.div
            className="servicesEach"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={aicon5} alt="" className="servicesEachIcon" />
            IT solutions
            <div className="servicesEachLine">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, placeat. Harum, accusamus?
            </div>
          </motion.div>
          <motion.div
            className="servicesEach"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={aicon4} alt="" className="servicesEachIcon" />
            Content Designing
            <div className="servicesEachLine">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, placeat. Harum, accusamus?
            </div>
          </motion.div>
          <motion.div
            className="servicesEach"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={aicon8}
              alt=""
              className="servicesEachIcon servicesEachIcon1"
            />
            Social Media Management
            <div className="servicesEachLine">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, placeat. Harum, accusamus?
            </div>
          </motion.div>
          <motion.div
            className="servicesEach"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={aicon3} alt="" className="servicesEachIcon" />
            AI ML Solutions
            <div className="servicesEachLine">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, placeat. Harum, accusamus?
            </div>
          </motion.div>
          <motion.div
            className="servicesEach"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={aicon6}
              alt=""
              className="servicesEachIcon servicesEachIcon1"
            />
            Software Desiging
            <div className="servicesEachLine">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, placeat. Harum, accusamus?
            </div>
          </motion.div>
          <motion.div
            className="servicesEach"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={aicon2} alt="" className="servicesEachIcon" />
            Customer Relationship Management
            <div className="servicesEachLine">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, placeat. Harum, accusamus?
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className=" valuesContainer" id="whyus">
        <div className="valuesEachContainer">
          <motion.div
            className="valuesEach"
            initial={{ scale: 0.4, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <img src={icon1} alt="" />
            Customizable packages according to company
          </motion.div>
          <motion.div
            className="valuesEach"
            initial={{ scale: 0.4, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <img src={icon2} alt="" />
            24/7 Customer Support
          </motion.div>
          <motion.div
            className="valuesEach"
            initial={{ scale: 0.4, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <img src={icon3} alt="" />
            Thinking out of the box with data driven solutions
          </motion.div>
          <motion.div
            className="valuesEach"
            initial={{ scale: 0.4, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <img src={icon5} alt="" />
            Growth as well as Sustainability
          </motion.div>
          <motion.div
            className="valuesEach"
            initial={{ scale: 0.4, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <img src={icon4} alt="" />
            Modernizing conventional companies by creativity and technology
          </motion.div>
          <motion.div
            className="valuesEach"
            initial={{ scale: 0.4, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <img src={icon6} alt="" />
            Small venture and startups friendly
          </motion.div>
          <motion.div
            className="valuesEach"
            initial={{ scale: 0.4, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <img src={icon7} alt="" />A to Z tech support on the go
          </motion.div>
        </div>
        <div className="valuesTitle">
          Why <br /> Us?
        </div>
      </div>
      <div className="contactContainer" id="contactus">
        {errorMssg && (
          <div className="errorMssgBox">
            Feilds marked with * are mandatory.
          </div>
        )}
        {successMssg && (
          <div className="errorMssgBox successMssg">
            <BsCheckCircle className="successMssgIcon" /> Form Submitted
          </div>
        )}
        <div className="contactTitle">
          Get <br /> In <br /> Touch
        </div>
        <div className="contactFormContainer">
          <div className="contactFormContainerEach">
            <label htmlFor="work-textarea">Purpose*</label>
            <textarea
              name=""
              id="work-textarea"
              className="getintouchtextarea"
              placeholder="How we can help you.."
            ></textarea>
          </div>
          <div className="contactFormContainerEach">
            <label htmlFor="work-textarea">Email*</label>
            <textarea
              name=""
              id="work-textarea"
              className="getintouchtextarea"
              placeholder="Email Address"
            ></textarea>
          </div>
          <div className="contactFormContainerEach">
            <label htmlFor="work-textarea">Phone No*</label>
            <textarea
              name=""
              id="work-textarea"
              className="getintouchtextarea"
              placeholder="Phone No"
            ></textarea>
          </div>
          <div className="contactFormContainerEach">
            <label htmlFor="work-textarea">Company Name</label>
            <textarea
              name=""
              id="work-textarea"
              className="getintouchtextarea"
              placeholder="Company Name"
            ></textarea>
          </div>
          <div className="contactFormContainerEach">
            <label htmlFor="work-textarea">Additional Message</label>
            <textarea
              name=""
              id="work-textarea"
              className="getintouchtextarea getintouchtextareaAdditional"
              placeholder="Something you want to add.."
            ></textarea>
          </div>
          <div className="submitButtonContainer">
            {!loading && <div className="SubmitButton">Submit</div>}
            {loading && (
              <img className="SubmitButtonLoader" src={loader} alt="" />
            )}
          </div>
        </div>
      </div>
      <div className=" footer">
        <div className=" footer1">
          <div className="footer1firstdiv">
            <img src={brandLogo} alt="brandLogo" className=" brandLogofooter" />
            This is the footer brand para and is here to give a formal
            introduction about the brand.This is the footer brt the brand.This
            is the footer brand para and is here to give a formal introduction
            about the brand.
          </div>
          <div className="footer1seconddiv">
            <div className="footer1seconddiv1">For Any Query:</div>
            <div className="footer1seconddiv2">helpdesk@brandbuilder.com</div>
          </div>
          <div className="footer1thirddiv">
            <div className="footer1thirddivEach">
              <AiOutlineInstagram className="footer1thirddivEachIcon" />{" "}
            </div>
            <div className="footer1thirddivEach">
              <FiFacebook className="footer1thirddivEachIcon" />
            </div>
            <div className="footer1thirddivEach">
              <FaLinkedinIn className="footer1thirddivEachIcon" />
            </div>
            <div className="footer1thirddivEach">
              <FiTwitter className="footer1thirddivEachIcon" />
            </div>
          </div>
        </div>
        <div className=" footer2">
          Copyright © 2021 Brand Builder. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default MainPage;
