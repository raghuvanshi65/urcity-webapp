import React , {useState , useEffect , useContext} from 'react'; 
import 'axios';
import axios from 'axios';
import { GeolocationContext } from '../Contexts/GeolocationContextProvider';
import {VictoryChart , VictoryLine , VictoryTheme, VictoryVoronoiContainer} from 'victory';
import '../Style/MinorTemp.css';

function MinorTemp() {
    const { coordinates , weather } = useContext(GeolocationContext);
    const [graphData , setGraphData ] = useState([]);


    useEffect(()=>
    { 
      const blockData = [];
      weather.forecast.forecastday[0].hour.forEach((h)=>
      { 
        const time = h.time.split(" ");
        const obj = 
          {
            x : time[1] , 
            y : h.temp_c ,
          }
          blockData.push(obj);
      })

      setGraphData(blockData);
      console.log(graphData);
      
    },[])

    return (
      <div className="MinorTemp">  
        <VictoryChart
      theme={VictoryTheme.material}
      width = {1000}
      height = {250}
      containerComponent={<VictoryVoronoiContainer/>}
    >
      <VictoryLine
        style={{
          data: { stroke: "#c43a31" },
          parent: { border: "1px solid #ccc"}
        }}
        data={graphData}
        animate={{
          duration: 1000,
          onLoad: { duration: 1000 }
        }}
      />
    </VictoryChart>
      </div>
    )
}

export default MinorTemp
