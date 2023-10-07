const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/images/trainer.png" alt="logo" width="50" />
      </div>
      <ul>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Location</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <button>Login</button>
    </nav>
  );
};

export default Navigation;
