import { useParams } from "react-router-dom";
const SeriesDetails = () => {
  const { id } = useParams();
  console.log(id);

  return <></>;
};
export default SeriesDetails;
