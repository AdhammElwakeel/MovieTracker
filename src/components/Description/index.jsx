import "./Description.css";

const Description = ({ text }) => {
  return (
    <>
      <div className="description">
        <h6>Description</h6>
        <p>{text || "No description available"}</p>
      </div>
    </>
  );
};
export default Description;
