const { Link } = ReactRouterDOM;

export function Home() {
  
  return (
    <section className="home">
      {/* <AppHeader /> */}
      <div className="hero">
        <div className="call-to-action">
          {" "}
          <a href="#features">Get Started </a>
        </div>
        <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80" />
      </div>
      <div className="featuers-appsus">
        <div>Appsus Featuers</div>
      </div>
      <div id="features" className="img-for-features">
    
          <Link to="/keep">
            <img src="../../css/img/keep.jpg" />
          </Link>
  
        <Link to="/mail">
          <img src="../../css/img/mail-homepage.jpg" />
        </Link>
        <Link to="/book">
          <img src="../../css/img/book-homepage.jpg" />
        </Link>
      </div>
      <progresbar now="60" />
    </section>
  );
}
