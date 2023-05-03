import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <ul>
      <li>
        <Link to="/rendering">Rendering</Link>
      </li>
      <li>
        <Link to="/context">Context</Link>
      </li>
      <li>
        <Link to="/context-selector">ContextSelector</Link>
      </li>
    </ul>
  );
}
