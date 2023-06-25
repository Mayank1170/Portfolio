import './App.css';
import About from './components/About';
// import FollowMe from './components/FollowMe';
import HamburgerMEnu from './components/HamburgerMEnu';

function App() {
  return (
    <div className="">
      <div className="absolute top-80 left-[900px] w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute top-80 right-[550px] w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
      <div className="absolute top-40 right-[700px] w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

      <HamburgerMEnu/>
      <About />
    </div>
  )
}

export default App;
