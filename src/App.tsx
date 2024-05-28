import { Weather } from "./pages";

function App() {
  // useEffect(() => {
  //   client.get(`/find?q=tehran&appid=${client.key}&units=metric`).then(res => {
  //     console.log(res);
  //   })
  // }, [])

  return <Weather />;
}

export default App;
