import "./Subscriptions.css";
import Plans from "../../components/Plans";
import FreeTrial from "../../components/FreeTrial";
const Subscriptions = () => {
  return (
    <>
      <div className="subscriptionPage">
        <Plans />
        <FreeTrial />
      </div>
    </>
  );
};
export default Subscriptions;
