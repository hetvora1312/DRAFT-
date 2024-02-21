import { React, useState } from "react";
import "./assets/css/ProfilePageMain.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const accItems = [
  { id:"con1" ,  title: " Default Address", content: "1st div" },
  { id:"con2" , title: " Default Payment Method", content: "2nd div" },
  { id:"con3" , title: " Default Shipping Account", content: "3rd div" },
];

const restrictItems = [
    { id:"res1" , title: " Billing Restrictions", content: "1st div" },
  ];

const communicationItems = [
    { id:"comm1" ,  title: " Email", content: "1st div" },
  ]; 

function ProfilePageMain() {
  const [activeIndices, setActiveIndices] = useState({
    acc: null,
    restrict: null,
    communication: null
  });

  const onItemClick = (index, category) => {
    setActiveIndices(prevState => ({
      ...prevState,
      [category]: prevState[category] === index ? null : index
    }));
  };

  return (
    <>
      <div className="profilePageMainDiv">
        <div className="profilePageMainHeadingDiv">
          <h2 className="profilePageMainHeading">Profile</h2>
        </div>

        <div className="profilePageDetail">
          <div className="profilePageDetailContent">
            <b>NAME</b>
            <div>
              <b>EMAIL</b>
              <p>hitendrakat@gmail.com</p>
            </div>
            <a href="/personal">Edit Personal Information</a>
          </div>
          <div className="profilePageDetailContent">
            <b>PHONE NUMBER</b>
            <div>
              <b>USERNAME</b>
              <p>hitendrakat@gmail.com</p>
            </div>
            <a href="/changepass">Change Password</a>
          </div>
        </div>

        <div className="profilePagePreferenceDiv">
          <div className="profilePagePreferenceHeadingDiv">
            <h2 className="profilePagePreferenceHeading">Preferences</h2>
          </div>

          {/* CHECKOUT */}
          <div className="profilePagePreferenceCheckout">
            <div className="profilePagecheckoutDiv">
              <h3 className="profilePagecheckoutHeading">Checkout</h3>
            </div>

            <p>
              Manage your shipping and billing preferences to make checkout
              easier{" "}
            </p>

            <div className="profilePageCheckoutAccordian">
              {accItems.map((item, index) => (
                <div key={item.id} className="accordianDiv">
                  <div
                    className={`accordion-title ${
                      activeIndices.acc === index ? "active" : ""
                    }`}
                    onClick={() => onItemClick(index, 'acc')}
                  >
                    {activeIndices.acc === index ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                    {item.title}
                  </div>
                  <div
                    className={`accordion-content ${
                      activeIndices.acc === index ? "active" : ""
                    }`}
                  >
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Restriction */}
          <div className="profilePagePreferenceCheckout">
            <div className="profilePagecheckoutDiv">
              <h3 className="profilePagecheckoutHeading">Restriction</h3>
            </div>

            <p>
              Manage your shopping and shipping experience.{" "}
            </p>

            <div className="profilePageCheckoutAccordian">
              {restrictItems.map((item, index) => (
                <div key={item.id} className="accordianDiv">
                  <div
                    className={`accordion-title ${
                      activeIndices.restrict === index ? "active" : ""
                    }`}
                    onClick={() => onItemClick(index, 'restrict')}
                  >
                    {activeIndices.restrict === index ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                    {item.title}
                  </div>
                  <div
                    className={`accordion-content ${
                      activeIndices.restrict === index ? "active" : ""
                    }`}
                  >
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Communication */}
          <div className="profilePagePreferenceCheckout">
            <div className="profilePagecheckoutDiv">
              <h3 className="profilePagecheckoutHeading">Communication</h3>
            </div>

            <p>
              Manage your communications from marketing email subscriptions to alerts.{" "}
            </p>

            <div className="profilePageCheckoutAccordian">
              {communicationItems.map((item, index) => (
                <div key={item.id} className="accordianDiv">
                  <div
                    className={`accordion-title ${
                      activeIndices.communication === index ? "active" : ""
                    }`}
                    onClick={() => onItemClick(index, 'communication')}
                  >
                    {activeIndices.communication === index ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                    {item.title}
                  </div>
                  <div
                    className={`accordion-content ${
                      activeIndices.communication === index ? "active" : ""
                    }`}
                  >
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default ProfilePageMain;
