import React from "react";
import "./PricingTable.css";

const PricingTable = () => {
  return (
    <div className="pricing-container">
      <div className="head">
        <h2>Compare our plans and find the right one for you</h2>
        <p>
          StreamVibe offers three different plans to fit your needs: Basic,
          Standard, and Premium. Compare the features of each plan and choose
          the one that's right for you.
        </p>
      </div>

      <table className="pricing-table">
        <thead>
          <tr>
            <th>Features</th>
            <th>Basic</th>
            <th>
              Standard <span className="popular">Popular</span>
            </th>
            <th>Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Price</td>
            <td>$9.99/Month</td>
            <td>$12.99/Month</td>
            <td>$14.99/Month</td>
          </tr>
          <tr>
            <td>Content</td>
            <td>
              Access to a wide selection of movies and shows, including some new
              releases.
            </td>
            <td>
              Access to a wider selection of movies and shows, including most
              new releases and exclusive content.
            </td>
            <td>
              Access to a widest selection of movies and shows, including all
              new releases and Offline Viewing.
            </td>
          </tr>
          <tr>
            <td>Devices</td>
            <td>Watch on one device simultaneously</td>
            <td>Watch on two devices simultaneously</td>
            <td>Watch on four devices simultaneously</td>
          </tr>
          <tr>
            <td>Free Trial</td>
            <td>7 Days</td>
            <td>7 Days</td>
            <td>7 Days</td>
          </tr>
          <tr>
            <td>Cancel Anytime</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>HDR</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Dolby Atmos</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Ad-Free</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Offline Viewing</td>
            <td>No</td>
            <td>Yes, for select titles.</td>
            <td>Yes, for all titles.</td>
          </tr>
          <tr>
            <td>Family Sharing</td>
            <td>No</td>
            <td>Yes, up to 5 family members.</td>
            <td>Yes, up to 6 family members.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
