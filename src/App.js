import { useEffect, useState } from "react";
import { api, appid } from "./api";
import Card from "./components/Card";
import Search from "./components/Search";
import Clock from "react-clock";
import 'react-clock/dist/Clock.css';


function App() {

  const [data, setData] = useState({})


    const [value, setValue] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => setValue(new Date()), 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
 
  const fetchData = async (city) => {
    
    const res = await api.get(`/weather?q=${city}&appid=${appid}&units=metric`)
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
    setData(res.data)
  }

  useEffect(() => {
    fetchData('Yangon')
  }, [])



  return (
   <>
    <div className="w-full d-flex justify-content-center align-items-center vh-100 bg-white">
       <div className="shadow-lg bg-light p-4 border rounded d-flex flex-column " style={{
        'minWidth' : '500px'
       }}> 
        <Search fetchData={fetchData} />
        <Clock value={value} className="mx-auto mt-3" />
        <Card  data={data} />
       </div>
    </div>
   </>
  );
}

export default App;
