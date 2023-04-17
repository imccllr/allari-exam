import '../Styles/App.scss';
import Clock from './Clock.js';
import Name from './Name.js';
import Tracker from './Tracker.js';
import Main from './Main.js';
import Slideshow from './Slideshow.js';
import Footer from './Footer.js';

function App() {
    return (
        <div className="App">
            <div className="App-block App-header">
                <Clock />
            </div>
            <div className="App-block App-navigation">
                <Name />
            </div>
            <div className="App-content">
                <div className="App-block App-content-left">
                    <Tracker />
                </div>
                <div className="App-block App-content-center">
                    <Main />
                </div>
                <div className="App-block App-content-right">
                    <Slideshow />
                </div>
            </div>
            <div className="App-block App-footer">
                <Footer />
            </div>
        </div>
    );
}

export default App;
