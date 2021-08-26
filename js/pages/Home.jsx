const { Link } = ReactRouterDOM

export function Home() {
  return (
    <section className="home">
      {/* <AppHeader /> */}
      <div className="hero">
        <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"/>
      </div>
      <h1>Welcome</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque et nihil quis ducimus cum, ex, quo odit voluptatem enim aspernatur perspiciatis illum ipsum voluptas accusantium, tempore delectus neque cupiditate qui!</p>
    </section>
  )
}