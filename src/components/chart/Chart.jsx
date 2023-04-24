import "./chart.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({title, data, datakey, grid}) {
 
  
         
  return (
    <div className='chart'>
        <div className="chartTitle"><h3>{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
        <XAxis dataKey={datakey} stroke="#5550bd" />
       <Line type="monotone" dataKey="Active User" stroke="#5550bd"/>
       <Tooltip />
      {grid && <CartesianGrid strokeDasharray="5 5" stroke="#e0dfdf"/>}


        </LineChart>

        </ResponsiveContainer>
        </div>
    </div>
  )
}
