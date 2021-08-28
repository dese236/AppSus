const { Link } = ReactRouterDOM;

export function Home() {
  return (
    <section className="home">
      {/* <AppHeader /> */}
      <div className="hero">
        <div className="call-to-action">
          {" "}
          <div className="home-header">Organize it all with Appsus</div>
        </div>
        {/*<img src="../../css/img/bac-img.svg" />*/}
        {/*<img src="../../css/img/bac-img.jpg" />*/}

        {/*<img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80" />*/}
        <img src="https://todoist.com/_next/static/images/header@2x_b52d8f7c7bf19d6c702569d1072ed6a2.webp" />
      </div>
      <div className="featuers-appsus">
        <div>Appsus Featuers</div>
      </div>
      <div id="featuresId" className="img-for-features">
        <Link to="/keep">
          <img src="../../css/img/idea-home.png" />
        </Link>

        <Link to="/mail">
          <img src="../../css/img/mail-homepage.jpg" />
        </Link>
        <Link to="/book">
          <img src="../../css/img/book-homepage.jpg" />
        </Link>
      </div>
    </section>
  );
}
