import Link from 'next/link';

export default ({ main }) => (
  <ul className="nav">
    {!main && (
      <li>
        <Link href="/">
          <a>🏠</a>
        </Link>
      </li>
    )}
    <li>
      <Link href="/portfolio">
        <a>Portfolio</a>
      </Link>
    </li>
    <li>
      <Link href="mailto:ola@automatica.cc">
        <a>Contacto</a>
      </Link>
    </li>
    <style jsx>
      {`
        .nav {
          display: flex;
          align-items: center;
          margin-bottom: 3rem;
          height: 1.5rem;
        }

        .nav a {
          color: #333;
          text-decoration: none;
        }

        .nav li {
          margin-right: 1rem;
          font-size: 1rem;
        }
      `}
    </style>
  </ul>
);
