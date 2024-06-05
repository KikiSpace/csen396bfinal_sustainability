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

export const barChartData1_Ammonia = {
    labels: ["Chemicals","Computers/Electronic Products","Electrical Equipment","Food","Nonmetallic Mineral","Paper","Petroleum Bulk Terminals"],
    datasets: [
        {
            label: "Source of Toxic Release (lbs)",
            data: [
                1084124.5,
                587305.78,
                766382,
                1461410.8,
                278989.4326,
                549324,
                37734782,
                ],
            backgroundColor: ["aqua"],
            borderColor: "rgba(255, 99, 132, 1)",
            borderwidth: 1
        }
    ]
}

export const barChartData2_Nitric_Acid = {
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
            label:"Source of Toxic Release (lbs)",
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
            backgroundColor: ["aqua"],
            borderColor: "rgba(255, 99, 132, 1)",
            borderwidth: 1
        }
    ]
}

export const barChartData3_Ethylene_Glycol = {
    labels: ["Chemicals",
    "Fabricated Metals",
    "Hazardous Waste",
    "Other",
    "Petroleum",
    "Transportation Equipment"],
    datasets: [
        {
            label:"Source of Toxic Release (lbs)",
            data: [263256.8733,
                36947.34,
                5906734.311,
                1620379,
                14098074.61,
                224309.3],
            backgroundColor: ["aqua"],
            borderColor: "rgba(255, 99, 132, 1)",
            borderwidth: 1
        }
    ]
}

export const barChartData4_Lead_Compounds = {
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
            label:"Source of Toxic Release (lbs)",
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
            backgroundColor: ["aqua"],
            borderColor: "rgba(255, 99, 132, 1)",
            borderwidth: 1
        }
    ]
}

export const barChartData5_Toleune = {
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
            label:"Source of Toxic Release (lbs)",
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
            backgroundColor: ["aqua"],
            borderColor: "rgba(255, 99, 132, 1)",
            borderwidth: 1
        }
    ]
}

export const barChartData6_Methanol = {
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
            label:"Source of Toxic Release (lbs)",
            data: [22361.15,
                15262646.29,
                277446.41,
                60096,
                3048424.708,
                59435.76,
                1558159],
            backgroundColor: ["aqua"],
            borderColor: "rgba(255, 99, 132, 1)",
            borderwidth: 1
        }
    ]
}



export const radarChartData1_Ammonia = {
    labels: ["OTHER", "BODY_WEIGHT", "CARDIOVASCULAR", "DERMAL", "DEVELOPMENTAL", "ENDOCRINE", "GASTROINTESTINAL", "HEMATOLOGICAL", "HEPATIC", "IMMUNOLOGICAL", "METABOLIC", "MUSCULOSKELETAL", "NEUROLOGICAL", "OCULAR", "OTHER_SYSTEMIC", "RENAL", "REPRODUCTIVE", "RESPIRATORY", "NO_HEALTH_EFFECTS", "ACUTE", "INTERMEDIATE", "CHRONIC"],
    datasets: [
        {
            label: "Ammonia",
            data: [5,1,2,1,2,1,2,1,2,1,2,1,2,5,5,1,2,5,1,5,2,5],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "aqua",
            borderwidth: 1
        }
    ]
}


export const radarChartData2_Ethylene_Glycol = {
    labels: ["OTHER", "BODY_WEIGHT", "CARDIOVASCULAR", "DERMAL", "DEVELOPMENTAL", "ENDOCRINE", "GASTROINTESTINAL", "HEMATOLOGICAL", "HEPATIC", "IMMUNOLOGICAL", "METABOLIC", "MUSCULOSKELETAL", "NEUROLOGICAL", "OCULAR", "OTHER_SYSTEMIC", "RENAL", "REPRODUCTIVE", "RESPIRATORY", "NO_HEALTH_EFFECTS", "ACUTE", "INTERMEDIATE", "CHRONIC"],
    datasets: [
        {
            label: "Ethylbenzene",
            data: [5,1,1,2,2,1,5,1,5,1,1,2,5,1,2,5,1,2,1,5,5,5],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "aqua",
            borderwidth: 1
        },
        {
            label: 'Ethylene Glycol',
            data: [5,1,2,1,5,2,1,2,1,2,1,2,1,2,1,5,2,5,1,5,5,5],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "pink",
            borderwidth: 1
        },
        {
            label: 'Ethylene O1ide',
            data: [5,1,2,1,2,1,2,1,2,1,2,1,5,2,1,5,2,1,2,1,5,5],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "yellow",
            borderwidth: 1
        },
        {
            label: 'Ethylene Thiourea',
            data: [5,1,2,1,2,5,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,5],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "blue",
            borderwidth: 1
        },

    ]
}

export const radarChartData3_Nitric_Acid = {
    labels: ["OTHER", "BODY_WEIGHT", "CARDIOVASCULAR", "DERMAL", "DEVELOPMENTAL", "ENDOCRINE", "GASTROINTESTINAL", "HEMATOLOGICAL", "HEPATIC", "IMMUNOLOGICAL", "METABOLIC", "MUSCULOSKELETAL", "NEUROLOGICAL", "OCULAR", "OTHER_SYSTEMIC", "RENAL", "REPRODUCTIVE", "RESPIRATORY", "NO_HEALTH_EFFECTS", "ACUTE", "INTERMEDIATE", "CHRONIC"],
    datasets: [
        {
            label: "Nitrate Compounds",
            data: [5,1,2,1,5,2,1,5,0,2,1,2,1,2,1,2,1,2,1,2,1,5],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "aqua",
            borderwidth: 1
        },
        {
            label: 'Nitric Acid',
            data: [5,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,1,5,2,1],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "pink",
            borderwidth: 1
        },
        {
            label: 'Nitrobenzene',
            data: [5,1,2,1,2,1,2,5,1,2,1,2,1,2,1,2,1,5,2,1,2,5],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "yellow",
            borderwidth: 1
        }

    ]
}

export const radarChartData4_Lead = {
    labels: ["OTHER", "BODY_WEIGHT", "CARDIOVASCULAR", "DERMAL", "DEVELOPMENTAL", "ENDOCRINE", "GASTROINTESTINAL", "HEMATOLOGICAL", "HEPATIC", "IMMUNOLOGICAL", "METABOLIC", "MUSCULOSKELETAL", "NEUROLOGICAL", "OCULAR", "OTHER_SYSTEMIC", "RENAL", "REPRODUCTIVE", "RESPIRATORY", "NO_HEALTH_EFFECTS", "ACUTE", "INTERMEDIATE", "CHRONIC"],
    datasets: [
        {
            label: "Lead Compounds",
            data: [5,1,5,1,5,1,2,5,1,2,1,2,5,1,2,5,5,1,2,1,2,1],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "aqua",
            borderwidth: 1
        }

    ]
}

export const radarChartData5_Toleune = {
    labels: ["OTHER", "BODY_WEIGHT", "CARDIOVASCULAR", "DERMAL", "DEVELOPMENTAL", "ENDOCRINE", "GASTROINTESTINAL", "HEMATOLOGICAL", "HEPATIC", "IMMUNOLOGICAL", "METABOLIC", "MUSCULOSKELETAL", "NEUROLOGICAL", "OCULAR", "OTHER_SYSTEMIC", "RENAL", "REPRODUCTIVE", "RESPIRATORY", "NO_HEALTH_EFFECTS", "ACUTE", "INTERMEDIATE", "CHRONIC"],
    datasets: [
        {
            label: 'Toluene',
            data: [5,1,2,1,2,1,2,1,2,1,2,1,5,5,1,5,2,5,1,5,5,5],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "aqua",
            borderwidth: 1
        },
        {
            label: 'Toluene Diisocyanate (Mi1ed Isomers)',
            data: [5,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,1,5,2,5],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "pink",
            borderwidth: 1
        },
        {
            label: 'Toluene-2,4-diisocyanate)',
            data: [5,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,1,5,2,5],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "yellow",
            borderwidth: 1
        },
        {
            label: 'Toluene-2,4-diisocyanate)',
            data: [5,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,1,5,2,5],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "blue",
            borderwidth: 1
        },

    ]
}


export const radarChartData6_Methanol = {
    labels: ["OTHER", "BODY_WEIGHT", "CARDIOVASCULAR", "DERMAL", "DEVELOPMENTAL", "ENDOCRINE", "GASTROINTESTINAL", "HEMATOLOGICAL", "HEPATIC", "IMMUNOLOGICAL", "METABOLIC", "MUSCULOSKELETAL", "NEUROLOGICAL", "OCULAR", "OTHER_SYSTEMIC", "RENAL", "REPRODUCTIVE", "RESPIRATORY", "NO_HEALTH_EFFECTS", "ACUTE", "INTERMEDIATE", "CHRONIC"],
    datasets: [
        {
            label: 'Methanol',
            data: [5,1,2,2,5,2,1,1,5,1,1,2,5,1,5,2,1,2,1,5,1,5],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "aqua",
            borderwidth: 1
        },
        {
            label: 'Methazole',
            data: [5,1,1,2,5,1,1,1,1,2,2,1,2,1,2,1,5,2,2,1,1,5],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "pink",
            borderwidth: 1
        },
        {
            label: 'Methiocarb',
            data: [5,1,1,2,1,2,1,2,1,1,2,5,5,1,2,2,2,1,1,2,2,5],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "yellow",
            borderwidth: 1
        },
        {
            label: 'Metho1one',
            data: [5,1,1,1,1,1,2,1,5,2,1,1,2,2,2,5,5,1,1,5,2,5],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "blue",
            borderwidth: 1
        },

    ]
}
