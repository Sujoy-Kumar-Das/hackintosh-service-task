import facebookIcon from "@/assets/facebook.png";
import instraIcon from "@/assets/instra.png";
import linkedinIcon from "@/assets/linkedin.png";
import locationIcon from "@/assets/location.png";
import messageIcon from "@/assets/message.png";
import phoneIcon from "@/assets/phone.png";
import twitterIcon from "@/assets/twiter.png";

export const footerSocialLink = [
  facebookIcon,
  linkedinIcon,
  twitterIcon,
  instraIcon,
];

export const services = ["Plumbing", "Drainage", "Bathrooms", "Commercial"];

export const address = [
  {
    id: crypto.randomUUID(),
    title: "1 Sail Street, London, SE11 6NQ",
    icon: locationIcon,
  },
  {
    id: crypto.randomUUID(),
    title: "enquiries@PlumbingPros.com",
    icon: messageIcon,
  },
  {
    id: crypto.randomUUID(),
    title: "020 4527 6474",
    icon: phoneIcon,
  },
];

export const footerColumns = [
  {
    title: "Our Services",
  },
  {
    title: "Useful Links",
    items: [
      "Contact Us",
      "Updates",
      "About Us",
      "Rates",
      "Locations",
      "Sitemap",
    ],
  },
  {
    title: "Customer Services",
    items: ["FAQs", "Support", "Terms & Conditions", "Privacy Policy"],
  },
];
