import LandingPage from './components/landing';
import SimpleCard from './components/cards';


export default function App() {
  return (
    <div className="App">
      <LandingPage />
      <div className="flex justify-center items-center p-4 gap-5">
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
      </div>
      <footer
      className="bg-neutral-200 text-center dark:bg-gray-800 lg:text-left">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        © 2024 Derechos Reservados:
        <a
          className="text-neutral-800 dark:text-neutral-400"
          href="#"
        > Irene Victoria</a>
      </div>
    </footer>

    </div>
  )
}
