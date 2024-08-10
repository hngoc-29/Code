
import './Navbar.css';

function App() {
  return (
    <div class = 'navbar'>
      <div class = 'logo'>
        <div class = 'icon-1 hidden'><i class="fa-solid fa-bars"></i></div>
        <div class = 'icon-2 open-menu'><i class="fa-solid fa-x"></i>
        <nav>
          <ul>
            <li><a href = '#'><i class="fa-solid fa-house"></i>Home</a></li>
            <li><a href = '#'><i class="fa-solid fa-star"></i>Important</a></li>
            <li><a href = '#'><i class="fa-solid fa-school"></i>My Class</a></li>
            <li><a href = '#'><i class="fa-solid fa-gamepad"></i>Game</a></li>
            <li><a href = 'https://facebook.com/ngoc29FPG'><i class="fa-brands fa-facebook"></i>Facebook</a></li>
          </ul>
        </nav>
        </div>
      </div>
    </div>
    
    )
      
}

export default App;
