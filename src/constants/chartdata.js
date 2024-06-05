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

export const barChartData = [
    {
        id: 0,
        chemical: "Ammonia",
        labels: ["Beverages","Chemical Wholesalers","Chemicals","Computers and Electronic Products","Electrical Equipment","Food","Hazardous Waste","Nonmetallic Mineral Product","Paper","Petroleum Bulk Terminals","Primary Metals","Wood Products"],
        datasets: [
            {
                label: "Ammonia Sources",
                data: [158419.65,
                    244239,
                    1084124.5,
                    587305.78,
                    766382,
                    1461410.8,
                    83151.60315,
                    278989.4326,
                    549324,
                    37734782,
                    50631.8,
                    59228],
                backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                borderColor: "rgba(255, 99, 132, 1)",
                borderwidth: 1
            }
        ]
    },
    {
        id: 1,
        chemical: "Nitric Acid",
        labels: ["Beverages",
            "Chemical Wholesalers",
            "Chemicals",
            "Computers and Electronic Products",
            "Electrical Equipment",
            "Fabricated Metals",
            "Food",
            "Hazardous Waste",
            "Primary Metals",
            "Transportation Equipment"],
        datasets: [
            {
                label: "Nitric Acid Sources",
                data: [200784.5107,
                    735.082,
                    265740.2,
                    387898.495,
                    830111,
                    1026838.753,
                    15670703.84,
                    172497,
                    400988.1,
                    730012.94],
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderwidth: 1
            }
        ]
    },
    {
        id: 2,
        chemical: "Ethylene Glycol",
        labels: ["Chemicals",
            "Fabricated Metals",
            "Hazardous Waste",
            "Other",
            "Petroleum",
            "Transportation Equipment"],
        datasets: [
            {
                label: "Ethylene Glycol Sources",
                data: [263256.8733,
                    36947.34,
                    5906734.311,
                    1620379,
                    14098074.61,
                    224309.3],
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderwidth: 1
            }
        ]
    },
    {
        id: 3,
        chemical: "Lead Compounds",
        labels: ["Chemicals",
            "Computers and Electronic Products",
            "Electrical Equipment",
            "Fabricated Metals",
            "Metal Mining",
            "Nonmetallic Mineral Product",
            "Petroleum",
            "Petroleum Bulk Terminals",
            "Primary Metals",
            "Transportation Equipment"],
        datasets: [
            {
                label: "Lead Compounds Sources",
                data: [2186.98,
                    9477.581,
                    728720.27,
                    10025.25628,
                    72341.7,
                    8803.014829,
                    4950.9939,
                    1999.26888,
                    3900.91,
                    2047.885246],
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderwidth: 1
            }
        ]
    },
    {
        id: 4,
        chemical: "Toleune",
        labels: ["Chemical Wholesalers",
            "Chemicals",
            "Computers and Electronic Products",
            "Fabricated Metals",
            "Hazardous Waste",
            "Miscellaneous Manufacturing",
            "Other",
            "Petroleum",
            "Petroleum Bulk Terminals",
            "Plastics and Rubber",
            "Primary Metals",
            "Textiles",
            "Transportation Equipment"],
        datasets: [
            {
                label: "Toleune Sources",
                data: [25759.5024,
                    913551.894,
                    145497.031,
                    95008,
                    2122340.72,
                    31196,
                    7242.847096,
                    598335.822,
                    472349.172,
                    786754.915,
                    225968,
                    190484.57,
                    14368.34],
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderwidth: 1
            }
        ]
    },
    {
        id: 5,
        chemical: "Methanol",
        labels: ["Chemical Wholesalers",
            "Chemicals",
            "Computers and Electronic Products",
            "Fabricated Metals",
            "Hazardous Waste",
            "Miscellaneous Manufacturing",
            "Petroleum",
            "Transportation Equipment"],
        datasets: [
            {
                label: "Methanol Sources",
                data: [22361.15,
                    15262646.29,
                    277446.41,
                    60096,
                    3048424.708,
                    59435.76,
                    1558159],
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderwidth: 1
            }
        ]
    }
]

export const radarChartData = [
    {
        id: 0,
        chemical: "Ammonia",
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
    },
    {
        id: 1,
        chemical: "Ethylene Glycol",
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
    },
    {
        id: 2,
        chemical: "Nitric Acid",
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
    },
    {
        id: 3,
        chemical: "Methanol",
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
    },
    {
        id: 4,
        chemical: "Ammonia",
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
    },
    {
        id: 5,
        chemical: "Ammonia",
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
]