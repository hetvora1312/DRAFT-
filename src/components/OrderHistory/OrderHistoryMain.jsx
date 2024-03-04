import {React} from "react";
import "./assets/css/OrderHistoryMain.css";

// icon
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ImportExportIcon from '@mui/icons-material/ImportExport';
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function OrderHistoryMain() {

  return (
    <>
      <div className="orderHistoryMainDiv">
        <div>
          <h1 className="orderHistoryMainHeading">
            <span>
              <KeyboardArrowUpIcon />
            </span>{" "}
            Orders
          </h1>
        </div>

        <div className="orderHistoryMainSearch">

          <div className="searchBox">
            <input
              type="search"
              placeholder="&nbsp;&nbsp;&nbsp;Search Orders"
              
            />
            <FontAwesomeIcon className="searchIcon" icon={faSearch} />
          </div>

          <div className="Newest">
            <ImportExportIcon />
            <p>Newest</p>
          </div>


          <div className="Destiny">
            <FormatLineSpacingIcon />
            <p>Destiny</p>
          </div>

        </div>

        <div className="orderHistoryMainSection">
            <div className="orderHistoryMainLeftSection">
                <p className="leftSectionTitle">Orders Completed</p>
                <div className="leftSectionContent"><span className="leftSectionCont1"  >|</span> <span>0</span></div>
                <hr />
                <p className="leftSectionTitle">Open</p>
                <div className="leftSectionContent"><span className="leftSectionCont2"  >|</span> <span>0</span></div>

                <hr />
                <p className="leftSectionTitle">Items Backordered</p>
                <div className="leftSectionContent"><span className="leftSectionCont3"  >|</span> <span>0</span></div>

                <hr />
                <p className="leftSectionTitle">Cancelled</p>
                <div className="leftSectionContent"><span className="leftSectionCont4"  >|</span> <span>0</span></div>

            </div>
            <div className="orderHistoryMainRightSection">
                <p className="RightSectionTitle">You have no recent orders at this time.</p>
                <button className="FindButton">Find Products</button>
            </div>
        </div>

      </div>
    </>
  );
}

export default OrderHistoryMain;
