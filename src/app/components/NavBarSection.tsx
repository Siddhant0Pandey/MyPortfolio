import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function NavBarSection() {
  return (
    <nav>
      <div>
        <h1>Siddhnat</h1>
      </div>
      <div className="">
        <Link href={"/"}>
          <div>
            <FontAwesomeIcon icon={faHouse} />
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default NavBarSection;
