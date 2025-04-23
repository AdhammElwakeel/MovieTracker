import "./Subscriptions.css";

// components
import Plans from "../../components/Plans";
import PricingTable from "../../components/PricingTable";
import FreeTrial from "../../components/FreeTrial";

const Subscriptions = () => {
  return (
    <div className="subscriptionPage">
      <Plans />
      <PricingTable />
      <FreeTrial />
    </div>
  );
};
export default Subscriptions;
