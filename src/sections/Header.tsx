import Link from "next/link";
import ContactButton from "../components/ContactButton";

export default function Header() {
  return (
    <header>
      <div className="wrapper-in center">
        <div className="header">
          <Link href="/" className="name-logo">
            Adnan Zahir
          </Link>
          <nav>
            <ul>
              <li>
                <Link href="#top">Home</Link>
              </li>
              <li>
                <Link href="#aboutMe">About Me</Link>
              </li>
              <li>
                <Link href="#portfolio">Portfolio</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="#reviews">Reviews</Link>
              </li>
              <li>
                <Link href="#faq">FAQ</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <ContactButton />
        </div>
      </div>
    </header>
  );
}
