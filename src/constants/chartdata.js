export const lineChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            label: "Steps by Xinqi",
            data: [3000, 4000, 5000, 6000, 7000, 8000, 9000],
            borderColor: "rgb(75, 192, 192)",
        },
        {
            label: "Steps by Jazz",
            data: [2000, 7000, 4000, 1000, 7700, 8000, 5000],
            borderColor: "violet",
        }

    ]
}

export const barChartData = {
    labels: ["Benson Center","facilities", "Graham", "Learning Commons", "Malley", "Swig", "University Villas", "Vari Hall and Lucas Hall"],
    datasets: [
        {
            label: "Total Weight of Waste (lbs)",
            data: [1230, 239, 233, 98, 677, 313, 310, 380],
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: "rgba(255, 99, 132, 1)",
            borderwidth: 1
        }
    ]
}

export const radarChartData = {
    labels: ["Benson Center","facilities", "Graham", "Learning Commons", "Malley", "Swig", "University Villas", "Vari Hall and Lucas Hall"],
    datasets: [
        {
            label: "Total Weight of Waste (lbs)",
            data: [1230, 239, 233, 98, 677, 313, 310, 380],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderwidth: 1
        }
    ]
}