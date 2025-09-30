export default function FooterUsefullLinks() {
  return (
    <div className=" flex flex-col gap-6 text-secondary-text text-sm">
      <h4 className="font-semibold whitespace-nowrap">Useful Links</h4>
      <div className=" flex  gap-10">
        <ul className=" font-normal flex flex-col gap-5">
          {" "}
          <li className=" whitespace-nowrap">Contact Us</li>
          <li className=" whitespace-nowrap">Updates</li>
          <li className=" whitespace-nowrap">About Us</li>
          <li className=" whitespace-nowrap">Rates</li>
        </ul>
        <ul className=" font-normal flex flex-col gap-5">
          <li className=" whitespace-nowrap">Customer Services</li>
          <li className=" whitespace-nowrap">Locations</li>
          <li className=" whitespace-nowrap">Updates</li>
          <li className=" whitespace-nowrap">Sitemap</li>
        </ul>
      </div>
    </div>
  );
}
