import { useState } from "react";
const Inquiry = ({ house, inquirySubmit }: { house: any; inquirySubmit: Function; }) => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    remarks: "",
  });
  const onChange = (e: any) => {
    setContactInfo({ ...contactInfo, [e.target.id]: e.target.value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    inquirySubmit();
    console.log(e, house);
  };

  return (
    <form className="mt-2" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="Name">Name:</label>
        <input
          type="text"
          className="form-control"
          onChange={onChange}
          id="name"
          value={contactInfo.name}
          placeholder="Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="E-Mail">E-Mail Address:</label>
        <input
          type="email"
          className="form-control"
          onChange={onChange}
          id="email"
          value={contactInfo.email}
          placeholder="E-Mail"
        />
      </div>
      <div className="form-group">
        <label htmlFor="Remarks">Remarks</label>
        <input
          type="text"
          className="form-control"
          onChange={onChange}
          id="remarks"
          value={contactInfo.remarks}
          placeholder="remarks"
        />
        <button
          className="btn btn-primary mt-2"
          disabled={!contactInfo.name || !contactInfo.email}
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default Inquiry;
