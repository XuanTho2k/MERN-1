import React from "react";

const BillingDetails = () => {
  return (
    <form
      className="max-w-[1440px]  ml-[270px] mt-[80px] mb-[100px]"
      action=""
    >
      <div className="flex flex-row gap-[80px]">
        <div className="flex flex-col gap-[20px]">
          <h3 className="text-[36px] mb-[20px]">
            Billing Details
          </h3>
          <div className="flex flex-row gap-[20px]">
            <div>
              <label htmlFor="fname">First Name</label>
              <input
                className="w-full mt-[20px] border border-[#9f9f9f] p-3 rounded-xl"
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
            </div>
            <div>
              <label htmlFor="lname">Last Name</label>
              <input
                className="w-full mt-[20px] border border-[#9f9f9f] p-3 rounded-xl"
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your name.."
              />
            </div>
          </div>
          <div>
            <label htmlFor="companyname">
              Company Name (Optional)
            </label>

            <input
              className="w-full mt-[20px] border border-[#9f9f9f] p-3 rounded-xl"
              type="text"
              id="companyname"
              name="companyname"
            />
          </div>
          <div>
            <label htmlFor="country">
              Country / Region
            </label>
            <input
              className="w-full mt-[20px] border border-[#9f9f9f] p-3 rounded-xl"
              type="text"
              id="country"
              name="country"
            />
          </div>
          <div>
            <label htmlFor="address">Street address</label>
            <input
              className="w-full mt-[20px] border border-[#9f9f9f] p-3 rounded-xl"
              type="text"
              id="address"
              name="address"
            />
          </div>
          <div>
            <label htmlFor="town">Town / City</label>
            <input
              className="w-full mt-[20px] border border-[#9f9f9f] p-3 rounded-xl"
              type="text"
              id="town"
              name="town"
            />
          </div>
          <div>
            <label htmlFor="province">Province</label>
            <input
              className="w-full mt-[20px] border border-[#9f9f9f] p-3 rounded-xl"
              type="text"
              id="province"
              name="province"
              placeholder="Your province.."
            />
          </div>
          <div>
            <label htmlFor="zipcode">Zip Code</label>
            <input
              className="w-full mt-[20px] border border-[#9f9f9f] p-3 rounded-xl"
              type="text"
              id="zipcode"
              name="zipcode"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              className="w-full mt-[20px] border border-[#9f9f9f] p-3 rounded-xl"
              type="text"
              id="phone"
              name="phone"
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              className="w-full mt-[20px] border border-[#9f9f9f] p-3 rounded-xl"
              type="text"
              id="email"
              name="email"
            />
          </div>
          <div>
            <input
              className="w-full mt-[20px] border border-[#9f9f9f] p-3 rounded-xl"
              type="text"
              id="additional"
              name="additional"
              placeholder="Additional information about your order"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between border-b-2 w-[533px] pb-[20px] border-red mt-[40px] ">
            <div className="flex flex-col gap-[20px]">
              <span className="text-[24px]">Product</span>
              <span className="text-[#9f9f9f]">
                Iphone{" "}
                <span className="text-black">x 1</span>
              </span>
              <span>Subtotal</span>
              <span>Total</span>
            </div>
            <div className="flex flex-col gap-[20px] ">
              <span className="text-[24px]">Subtotal</span>
              <span>25.000.000d</span>
              <span>25.000.000d</span>
              <span className="text-[24px] text-[#B88E2F]">
                25.000.000d
              </span>
            </div>
          </div>
          <div className="w-[528px] mt-[20px]">
            <input
              type="radio"
              className="rounded-xl mr-[10px]"
              id="bank"
              name="bank"
            />
            <label htmlFor="bank">
              Direct Bank Transfer
            </label>
            <br />
            <span className="text-[#9f9f9f]">
              Make your payment directly into our bank
              account. Please use your Order ID as the
              payment reference. Your order will not be
              shipped until the funds have cleared in our
              account.
            </span>
          </div>
          <div className="w-[528px] mt-[20px]">
            <input
              type="radio"
              className="rounded-xl mr-[10px]"
              id="cash"
              name="cash"
            />
            <label htmlFor="cash">Cash On Delivery</label>
            <br />
            <span className="text-[#9f9f9f]">
              Your personal data will be used to support
              your experience throughout this website, to
              manage access to your account, and for other
              purposes described in our privacy policy.
            </span>
          </div>

          <button className="border text-[20px] px-10 py-2 border-black rounded-xl hover:bg-[#B88E2F] hover:text-white duration-300 ml-[100px] w-[318px] mt-[40px]">
            Place order
          </button>
        </div>
      </div>
    </form>
  );
};

export default BillingDetails;
