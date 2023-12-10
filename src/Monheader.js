function Monheader(){
    return (
        <nav className="navbar">
        <div className="logo">UberEAT</div>
        <ul className="nav-links">
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">Explorer</a>
          </li>
          <li>
            <a href="#">Commander</a>
          </li>
          <li>
            <a href="#">Offres</a>
          </li>
        </ul>
        <div className="user-profile">
          <img src="user-icon.png" alt="User Icon" />
          <span>Utilisateur</span>
        </div>
      </nav>
    );
}
export default Monheader;