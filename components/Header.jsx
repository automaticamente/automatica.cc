import Nav from './Nav.jsx';

export default ({ children, main }) => (
  <header className={main ? 'main' : ''}>
    <Nav main={main} />
    {children}

    <style jsx>{`
      header {
        margin-top: 5rem;
        padding: 0 1rem;
      }

      header.main {
        min-height: 24rem;
      }
    `}</style>
  </header>
);
