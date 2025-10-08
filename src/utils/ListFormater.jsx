import { FaCheckCircle } from "react-icons/fa";

export const SectionTitle = ({ title }) => (
  <h4 className="mt-4 mb-2 text-dark fw-semibold border-bottom pb-2">
    {title}
  </h4>
);

export const ListItem = ({ text }) => (
  <li className="mb-2 d-flex align-items-start">
    <FaCheckCircle className="text-success me-2 mt-1" />
    <span>{text}</span>
  </li>
);