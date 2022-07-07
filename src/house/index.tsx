import "./house.css";
import NumberFormat from "react-number-format";
import { useNavigate, useParams } from "react-router-dom";
import emailIcon from "./email.png";
import { useState, useEffect } from "react";
import Inquiry from "./Inquiry";
const House = ({ house }: { house: any }) => {
  const [inquiryShow, setInquiryShow] = useState(false);
  const [isSearchResult, setIsSearchResult] = useState(false);
  const { country } = useParams();
  const history = useNavigate();
  const handleInquiryClick = () => {
    setInquiryShow(!inquiryShow);
  };
  useEffect(() => {
    setIsSearchResult(country !== undefined);
  }, [country]);
  const handleBackClick = (param: any) => () => {
    if (param === "Results") {
      history(`/SearchResults/${house.country}`);
    } else {
      history(`/`);
    }
  };
  return (
    <>
      <div>
        <div className="row mt-4">
          <h5 className="col-md-12">{house.country}</h5>
        </div>
        <div className="row">
          <h3 className="col-md-4">{house.address}</h3>
          <p className="col-md-4 price">
            <NumberFormat
              value={house.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"£"}
            />
          </p>
          <div className="col-md-4">
            <img
              src={emailIcon}
              height="50"
              width="50"
              alt="E-Mail"
              onClick={handleInquiryClick}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <img
              width="200px"
              style={{ width: 300 }}
              height="200px"
              src={process.env.PUBLIC_URL + "/images/" + house.photo + ".png"}
              alt="Home"
            />
          </div>
          <div className="col-md-4">
            <p>{house.description}</p>
          </div>
          <div className="col-md-4">
            {inquiryShow && (
              <Inquiry house={house} inquirySubmit={handleInquiryClick} />
            )}
          </div>
        </div>
      </div>
      <div className="row">
        {isSearchResult && (
          <>
            <div className="col-md-5">
              <button
                className="btn btn-primary mt-2"
                onClick={handleBackClick("Home")}
              >
                Back Home
              </button>
            </div>
            <div className="col-md-5">
              <button
                className="btn btn-primary mt-2"
                onClick={handleBackClick("Results")}
                style={{ float: "right" }}
              >
                Back to Results
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default House;
