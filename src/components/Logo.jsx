import { Link } from "react-router-dom";
import mononeimg from "../assets/mononemotlobImage.jpg";

export default function Logo({ size = "md", to = "/" }) {
  const sizeClass = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  }[size];

  return (
    <Link to={to} className="inline-flex items-center gap-2">
      <img src={mononeimg} alt="Monone Matlab Logo" className={`${sizeClass} object-contain`} />
    </Link>
  );
}