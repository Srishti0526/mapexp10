import logo from './logo.svg';
import './App.css';
import pic1 from './img/5.jpg';
import pic2 from './img/2.jpg';
import pic3 from './img/3.jpg';
import pic4 from './img/4.jpg';
import pic5 from './img/9.jpg';
import pic6 from './img/10.jpg';
import pic7 from './img/11.jpg';
import pic8 from './img/12.jpg';
import pic9 from './img/8.jpg';
import pic10 from './img/6.jpg';
import pic11 from './img/13.jpg';
import pic12 from './img/14.jpg';

function App() {
  return ( 
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
      <div class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="nav-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>                        
                    </button>
                    <a class="navbar-brand" href="index.html">Lifestyle Store</a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="//"><span class="glyphicon glyphicon-shopping-cart"></span> Cart</a></li>
                        <li><a href="//"><span class="glyphicon glyphicon-user"></span> Settings</a></li>
                        <li><a href="//"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
            </div> 
        </div>
        <br></br><br></br><br></br><br></br>
        <div class="container">
            <div class="jumbotron">
                <h1>Welcome to our Lifestyle Store!</h1>
                <p>We have the best cameras, watches and shirts for you. No need to hunt around, we have all in one place</p>
            </div>
            <div class="row text-center">
                <div class="col-md-3 col-sm-6">
                    <div class="thumbnail">
                        <img src={pic1} alt="Cannon EOS"/>
                        <p><h2>Cannon EOS</h2>Price: Rs.36000.00</p>
                        <button class="btn btn-primary">Add to cart</button>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="thumbnail">
                        <img src={pic2} alt="Sony DSLR"/>
                        <p><h2>Sony DSLR</h2>Price: Rs.40000.00</p>
                        <button class="btn btn-primary">Add to cart</button>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="thumbnail">
                        <img src={pic3} alt="Sony DSLR"/>
                        <p><h2>Sony DSLR</h2>Price: Rs.50000.00</p>
                        <button class="btn btn-primary">Add to cart</button>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="thumbnail">
                        <img src={pic4} alt="Sony DSLR"/>
                        <p><h2>Olympus DSLR</h2>Price: Rs.80000.00</p>
                        <button class="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-md-3 col-sm-6">
                    <div class="thumbnail">
                        <img src={pic5} alt="Titan Model #301"/>
                        <p><h2>Titan Model #301</h2>Price: Rs.13000.00</p>
                        <button class="btn btn-primary">Add to cart</button>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="thumbnail">
                        <img src={pic6} alt="Titan Model #201"/>
                        <p><h2>Titan Model #201</h2>Price: Rs.3000.00</p>
                        <button class="btn btn-primary">Add to cart</button>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="thumbnail">
                        <img src={pic7} alt="HMT Milan"/>
                        <p><h2>HMT Milan</h2>Price: Rs.8000.00</p>
                        <button class="btn btn-primary">Add to cart</button>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="thumbnail">
                        <img src={pic8} alt="Faber Luba #111"/>
                        <p><h2>Faber Luba #111</h2>Price: Rs.18000.00</p>
                        <button class="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-md-3 col-sm-6">
                    <div class="thumbnail">
                        <img src={pic9} alt="H&W"/>
                        <p><h2>H&W</h2>Price: Rs.800.00</p>
                        <button class="btn btn-primary">Add to cart</button>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="thumbnail">
                        <img src={pic10} alt="Luis Phil"/>
                        <p><h2>Luis Phil</h2>Price: Rs.1000.00</p>
                        <button class="btn btn-primary">Add to cart</button>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="thumbnail">
                        <img src={pic11} alt="John Zok"/>
                        <p><h2>John Zok</h2>Price: Rs.1500.00</p>
                        <button class="btn btn-primary">Add to cart</button>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="thumbnail">
                        <img src={pic12} alt="Jhalsani"/>
                        <p><h2>Jhalsani</h2>Price: Rs.1300.00</p>
                        <button class="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
        
        <footer>
            <div class="container">
                <center>Copyright © Lifestyle Store. All Rights  Reserved” ​and ​“Contact Us: +91 90000 00000</center>
            </div>
        </footer>


    </div>
  );
}

export default App;
