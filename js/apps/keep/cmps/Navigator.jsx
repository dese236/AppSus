
const { NavLink, Route } = ReactRouterDOM;

export class Navigator extends React.PureComponent {
    render() {
        return (
            <section className="navigator">
                <NavLink to="/keep" onClick={(e)=> this.props.setPage('notes')} >
                    <div className=" nav-icon keep-icon" onClick={this.goToEdit}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.41 4.94l-1.35-1.35c-.78-.78-2.05-.78-2.83 0L13.4 6.41 3 16.82V21h4.18l10.46-10.46 2.77-2.77c.79-.78.79-2.05 0-2.83zm-14 14.12L5 19v-1.36l9.82-9.82 1.41 1.41-9.82 9.83z"></path></svg>
                    </div>
                </NavLink>
                <NavLink to="/keep/trash" onClick={ (e)=> this.props.setPage('trash')} >

                    <div className="nav-icon trash-icon" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path><path d="M9 8h2v9H9zm4 0h2v9h-2z"></path></svg>

                    </div>

                </NavLink>
            </section >
        )

    }
}