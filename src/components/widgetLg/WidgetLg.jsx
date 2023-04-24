import "./widgetLg.css"

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Name</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImg" src="https://cdn.pixabay.com/photo/2023/01/24/10/02/woman-7740613_1280.jpg" alt=""></img>
            <span className="">Eric Carol</span>
          </td>
          <td className="widgetLgDate">21 Jan 2021</td>
          <td className="widgetLgAmount">$231.44</td>
          <td className="widgetLgStatus"><Button type="Approved" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImg" src="https://cdn.pixabay.com/photo/2023/01/24/10/02/woman-7740613_1280.jpg" alt=""></img>
            <span className="">Eric Carol</span>
          </td>
          <td className="widgetLgDate">21 Jan 2021</td>
          <td className="widgetLgAmount">$231.44</td>
          <td className="widgetLgStatus"><Button type="Declined" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImg" src="https://cdn.pixabay.com/photo/2023/01/24/10/02/woman-7740613_1280.jpg" alt=""></img>
            <span className="">Eric Carol</span>
          </td>
          <td className="widgetLgDate">21 Jan 2022 </td>
          <td className="widgetLgAmount">$231.44</td>
          <td className="widgetLgStatus"><Button type="Pending" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImg" src="https://cdn.pixabay.com/photo/2023/01/24/10/02/woman-7740613_1280.jpg" alt=""></img>
            <span className="">Eric Carol</span>
          </td>
          <td className="widgetLgDate">21 Jan 2021</td>
          <td className="widgetLgAmount">$231.44</td>
          <td className="widgetLgStatus"><Button type="Approved" /></td>
        </tr>
      </table>
    </div>
  )
}