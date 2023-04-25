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
                <Link href="#top" scroll={false}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#aboutMe" scroll={false}>
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#portfolio" scroll={false}>
                  Portfolio
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="#reviews" scroll={false}>
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="#faq" scroll={false}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" scroll={false}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <ContactButton />
        </div>
      </div>
    </header>
  );
}
