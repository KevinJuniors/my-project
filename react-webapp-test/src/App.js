import './App.css';
import KaKaoMap from "./KaKaoMap";

// function App() {
//   const [visible, setVisible] = useState(true);

//   const [markerPositions, setMarkerPositions] = useState([]);
//   const addMarker = [
//     [37.210882447027295, 127.05636948138495],
//     [37.20965541922913, 127.06042099142158],
//     [37.20827993311837, 127.06388112493345],
//     [37.20883508902243, 127.06173192015113]
//   ];

//   const [mapSize, setMapSize] = useState([600, 400]);

//   return (
//     <div className="App">
//       <button onClick={() => setVisible(!visible)}>
//         Toggle(Mount/Unmount)
//       </button>
//     </div>
//   );
// }

export default function App() {
  const [visible, setVisible] = useState(true);

  const [markerPositions, setMarkerPositions] = useState([]);
  const addMarker = [
    [37.210882447027295, 127.05636948138495],
    [37.20965541922913, 127.06042099142158],
    [37.20827993311837, 127.06388112493345],
    [37.20883508902243, 127.06173192015113]
  ];

  const [mapSize, setMapSize] = useState([600, 400]);

  return (
    <div className="App">
      <section>
        <button onClick={() => setVisible(!visible)}>
          Toggle(Mount/Unmount)
        </button>
      </section>
    </div>
  );
}

export default App;