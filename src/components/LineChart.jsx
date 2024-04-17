
import { Line } from "react-chartjs-2";

const LineChart = ({time, data,text }) => {
    const chartData={
        labels: time,
        datasets: [
            {
                label: "users gained",
                data: data,
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#FFFFFF",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ],
    }

    const options={
          plugins: {
            title: {
              display: true,
              text: text
            },
            legend: {
              display: false
            }
          }
    }
    return (
        <div className="line">
            <Line
                data={chartData}
                options={options}
            />
        </div>
    )
}

export default LineChart