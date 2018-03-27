import Nav from './Nav.jsx';

export default ({ children, main }) => (
  <header>
    <Nav main={main} />
    {children}

    <style jsx>{`
      header {
        margin-top: 5rem;
        padding: 0 1rem;
      }
    `}</style>
  </header>
);
