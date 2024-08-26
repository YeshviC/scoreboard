// App.jsx or similar
import { useState, useEffect } from "react";
import { io } from "socket.io-client";


import MatchScore from "./components/banner";

function App() {
   const [match, setMatch] = useState(
      JSON.parse(localStorage.getItem("match"))
   );

   useEffect(() => {
      const socket = io("http://localhost:8000");

      socket.on("connect", () => {
         console.log("Connected to server");
      });

      socket.on("error", (err) => {
         console.log("Socket error:", err);
      });

      socket.on("matchUpdate", (matchData) => {
         console.log("Match update:", matchData);
         localStorage.setItem("match", JSON.stringify(matchData, null, 2));
         setMatch(matchData); // Update state with new match data
      });

      return () => {
         socket.disconnect();
      };
   }, []);

   return (
      <div className="App">
         {match ? (
            <div>
               {/* Render match details */}
               {/* <pre>{JSON.stringify(match, null, 2)}</pre> */}

               <MatchScore match={match} />
            </div>
         ) : (
            <p>No match data available.</p>
         )}
      </div>
   );
}

export default App;
