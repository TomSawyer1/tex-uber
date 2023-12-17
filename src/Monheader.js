import Vert from "./img/vert.jpeg";

function Monheader(){
    return (
        <nav className="navbar">
        <div className="logo">UberEats</div>
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
        <div classname="header--cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><circle cx="176" cy="416" r="32" fill="currentColor"/><circle cx="400" cy="416" r="32" fill="currentColor"/><path fill="currentColor" d="M456.8 120.78a23.92 23.92 0 0 0-18.56-8.78H133.89l-6.13-34.78A16 16 0 0 0 112 64H48a16 16 0 0 0 0 32h50.58l45.66 258.78A16 16 0 0 0 160 368h256a16 16 0 0 0 0-32H173.42l-5.64-32h241.66A24.07 24.07 0 0 0 433 284.71l28.8-144a24 24 0 0 0-5-19.93Z"/></svg>
        </div>
          <img src="./img/vert.jpeg" alt="User Icon" />
          <span>Utilisateur</span>
        </div>
      </nav>
    );
}
export default Monheader;