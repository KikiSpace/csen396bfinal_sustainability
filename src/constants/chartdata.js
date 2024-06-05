export const lineChartData = {
    labels: ["1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015" ,"2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
        {
            label: "Percentage of Facilities That Reported Decreased Production Waste Compared to the Previous Year",
            data: [0.398904463,
                0.401477833,
                0.35896467,
                0.929750317,
                0.328434647,
                0.275307474,
                0.250119104,
                0.372340426,
                0.361929151,
                0.383825944,
                0.458778626,
                0.41584951,
                0.381265407,
                0.351875533,
                0.415758592,
                0.434179646,
                0.388381927,
                0.437660219,
                0.47310757,
                0.340096373,
                0.308322663,
                0.324816595,
                0.310552764,
                0.372573733,
                0.340414508,
                0.3783285,
                0.317447917,
                0.311330561,
                0.39273493,
                0.626841244,
                0.392877173,
                0.451327434],
            borderColor: "rgb(75, 192, 192)",
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
    chemical: "Ammonia",
    labels: ["OTHER", "BODY_WEIGHT", "CARDIOVASCULAR", "DERMAL", "DEVELOPMENTAL", "ENDOCRINE", "GASTROINTESTINAL", "HEMATOLOGICAL", "HEPATIC", "IMMUNOLOGICAL", "METABOLIC", "MUSCULOSKELETAL", "NEUROLOGICAL", "OCULAR", "OTHER_SYSTEMIC", "RENAL", "REPRODUCTIVE", "RESPIRATORY", "NO_HEALTH_EFFECTS", "ACUTE", "INTERMEDIATE", "CHRONIC"],
    datasets: [{
      label: 'Ammonia',
      data: [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
  },
  {
    chemical: "Ethylene Glycol",
    labels: ["OTHER", "BODY_WEIGHT", "CARDIOVASCULAR", "DERMAL", "DEVELOPMENTAL", "ENDOCRINE", "GASTROINTESTINAL", "HEMATOLOGICAL", "HEPATIC", "IMMUNOLOGICAL", "METABOLIC", "MUSCULOSKELETAL", "NEUROLOGICAL", "OCULAR", "OTHER_SYSTEMIC", "RENAL", "REPRODUCTIVE", "RESPIRATORY", "NO_HEALTH_EFFECTS", "ACUTE", "INTERMEDIATE", "CHRONIC"],
    datasets: [{
        label: 'Ethylbenzene',
        data: [1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
        label: 'Ethylene Glycol',
        data: [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }, {
        label: 'Ethylene O1ide',
        data: [1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }, {
        label: 'Ethylene Thiourea',
        data: [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      }]
  },
  {
    chemical: "Nitric Acid",
    labels: ["OTHER", "BODY_WEIGHT", "CARDIOVASCULAR", "DERMAL", "DEVELOPMENTAL", "ENDOCRINE", "GASTROINTESTINAL", "HEMATOLOGICAL", "HEPATIC", "IMMUNOLOGICAL", "METABOLIC", "MUSCULOSKELETAL", "NEUROLOGICAL", "OCULAR", "OTHER_SYSTEMIC", "RENAL", "REPRODUCTIVE", "RESPIRATORY", "NO_HEALTH_EFFECTS", "ACUTE", "INTERMEDIATE", "CHRONIC"],
    datasets: [{
        label: 'Nitrate Compounds',
        data: [1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
        label: 'Nitric Acid',
        data: [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }, {
        label: 'Nitrobenzene',
        data: [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  },
  {
    chemical: "Lead",
    labels: ["OTHER", "BODY_WEIGHT", "CARDIOVASCULAR", "DERMAL", "DEVELOPMENTAL", "ENDOCRINE", "GASTROINTESTINAL", "HEMATOLOGICAL", "HEPATIC", "IMMUNOLOGICAL", "METABOLIC", "MUSCULOSKELETAL", "NEUROLOGICAL", "OCULAR", "OTHER_SYSTEMIC", "RENAL", "REPRODUCTIVE", "RESPIRATORY", "NO_HEALTH_EFFECTS", "ACUTE", "INTERMEDIATE", "CHRONIC"],
    datasets: [{
        label: 'Lead Compounds',
        data: [1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
  },
  {
    chemical: "Toleune",
    labels: ["OTHER", "BODY_WEIGHT", "CARDIOVASCULAR", "DERMAL", "DEVELOPMENTAL", "ENDOCRINE", "GASTROINTESTINAL", "HEMATOLOGICAL", "HEPATIC", "IMMUNOLOGICAL", "METABOLIC", "MUSCULOSKELETAL", "NEUROLOGICAL", "OCULAR", "OTHER_SYSTEMIC", "RENAL", "REPRODUCTIVE", "RESPIRATORY", "NO_HEALTH_EFFECTS", "ACUTE", "INTERMEDIATE", "CHRONIC"],
    datasets: [{
        label: 'Toluene',
        data: [1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
        label: 'Toluene Diisocyanate (Mi1ed Isomers)',
        data: [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }, {
        label: 'Toluene-2,4-diisocyanate)',
        data: [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }, {
        label: 'Toluene-2,6-diisocyanate',
        data: [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  },
  {
    chemical: "Methanol",
    labels: ["OTHER", "BODY_WEIGHT", "CARDIOVASCULAR", "DERMAL", "DEVELOPMENTAL", "ENDOCRINE", "GASTROINTESTINAL", "HEMATOLOGICAL", "HEPATIC", "IMMUNOLOGICAL", "METABOLIC", "MUSCULOSKELETAL", "NEUROLOGICAL", "OCULAR", "OTHER_SYSTEMIC", "RENAL", "REPRODUCTIVE", "RESPIRATORY", "NO_HEALTH_EFFECTS", "ACUTE", "INTERMEDIATE", "CHRONIC"],
    datasets: [{
        label: 'Methanol',
        data: [1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
        label: 'Methazole',
        data: [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }, {
        label: 'Methiocarb',
        data: [1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }, {
        label: 'Metho1one',
        data: [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  }
];