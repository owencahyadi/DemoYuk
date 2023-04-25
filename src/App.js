import './App.css';
import pasta from './img/pasta.jpg';
import dimsum from './img/dimsum.jpg';
import naspad from './img/naspad.jpeg';
import Navbar from './component/Navbar';
import Card from './component/Card';

const makanan = [
  {
    nama: 'Pasta',
    harga: 50000
  },
  {
    nama: 'Dimsum',
    harga: 20000
  },
  {
    nama: 'Nasi Padang',
    harga: 10000
  },
];

const totalBayar = makanan.reduce((totalHarga, food) => totalHarga+food.harga ,0);

function App() {
  return (
    <div className="container">
      <div className="navbar">
        <Navbar />
      </div>
      <Card 
        imgUrl={pasta}
        title="Pasta"
        desc="consectetur adipiscing elit. Ut viverra mauris nec rhoncus viverra. Donec tristique efficitur sem, vitae tincidunt purus rutrum tempor. Nunc tincidunt hendrerit ex, eu ornare eros malesuada ut."
      />
      <Card 
        imgUrl={dimsum}
        title="Dimsum"
        desc="Donec id felis porttitor, ornare ex accumsan, tincidunt massa. In vel volutpat mi, in tristique lectus. Sed eu tortor sit amet neque ultricies facilisis. Ut aliquet elit quis est interdum semper."
      />
      <Card 
        imgUrl={naspad}
        title="Nasi Padang"
        desc="Phasellus fringilla id dolor vel mollis. Pellentesque ac enim suscipit, ultricies dui non, viverra urna. Fusce ut ligula sed turpis tristique ullamcorper id eget erat. Donec fermentum molestie quam."
      />

      <div className="menu">
        <h2>Daftar Harga</h2>
        <ul>
          {makanan.map((food) => 
            <li>{food.nama} - Harga Rp.{food.harga}</li>
          )}
        </ul>

        <h2>Daftar Harga Makanan yang lebih dari Rp.10.000</h2>
        <ul>
          {makanan
          .filter((food) => food.harga > 10000)
          .map((food) => 
            <li>{food.nama} - Harga Rp.{food.harga}</li>
          )}
        </ul>

        <h3>Total Harga: Rp.{totalBayar}</h3>
      </div>
    </div>
  );
}

export default App;
