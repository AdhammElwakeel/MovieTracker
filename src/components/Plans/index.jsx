import "./Plans.css";

// constants
import { planData } from "../../constants/planData";

const Plans = () => {
  return (
    <div className="plan-container">
      <div className="plan-heading">
        <div className="plan-title">
          <h2>Choose the plan that's right for you</h2>
          <p>
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </p>
        </div>
      </div>
      <div className="plan-content">
        {planData.plans.map((plan) => (
          <div key={plan.id} className="plan-box">
            <div className="plan-heading">
              <h2>{plan.title}</h2>
              <p>{plan.description}</p>
            </div>
            <div className="plan-price">
              <h2>
                {plan.price} <span>/{plan.interval}</span>
              </h2>
            </div>
            <div className="plan-buttons">
              <button>Start Free Trial</button>
              <button className="primary">Choose Plan</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Plans;
