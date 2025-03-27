import cast from "../../assets/images/johnwick.jpg";
import "./Cast.css";
const CastDetails = () => {
  return (
    <>
      <div className="cast">
        <div className="cast-title">
          <h6>cast</h6>
        </div>
        <div className="cast-author">
          <img src={cast} alt="" />
          <img src={cast} alt="" />
          <img src={cast} alt="" />
          <img src={cast} alt="" />
        </div>
      </div>
    </>
  );
};
export default CastDetails;
