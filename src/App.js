import './App.css';
import About from './components/About';
// import FollowMe from './components/FollowMe';
import HamburgerMEnu from './components/HamburgerMEnu';

function App() {
  return (
    <div className="">
      {/* <div className="flex items-center top-[500px] right-24 justify-center">
        <span className="inline-block p-2 border  border-gray-500 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </span> */}
        <div class="flex top-4 right-8 flex-col h-screen justify-center items-end absolute">
  <span className="inline-block p-2 border-4 border-gray-500 rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
    </svg>
  </span>
</div>


      <div className="absolute top-80 left-[900px] w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute top-80 right-[550px] w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
      <div className="absolute top-40 right-[700px] w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

      <HamburgerMEnu />
      <About />
    </div >
  )
}

export default App;
