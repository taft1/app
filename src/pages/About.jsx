function About () {
  const info = (
    <div className="sm:px-16 px-6 sm:py-12 py-4 sm:mx-16 mx-6 sm:my-16 my-6">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">CONTACT US</h2>
      <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">Call us toll-free at 888.450.5060
Text us at 888.450.5060
Monday - Friday, 8 a.m. - 6 p.m. Pacific Time
Saturday - Sunday, 9 a.m. - 5 p.m. Pacific Time
help@tactics.com</p>
<h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">International Customers</h2>
<p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">Call us at +1.541.349.0087
Monday - Friday, 8 a.m. - 6 p.m. Pacific Time
Saturday - Sunday, 9 a.m. - 5 p.m. Pacific Time</p>
    </div>
    );

    return (
      <div>
        <hr/>
        {info}
      </div>
    )
 }

export default About;