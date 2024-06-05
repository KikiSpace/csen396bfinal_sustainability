export const lineChartData = {
    labels: ["1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015" ,"2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
        {
            label: "ammonia",
            data: [41004164, 54796236, 69071322, 71995391, 59960433, 56902369, 33682775, 44745861, 33477813, 33731171, 157383416, 162383243, 184223640, 189149858, 191087946, 48015178, 46333380, 37219452, 35734302, 35805691, 35293970, 36228720, 35638645, 33472669, 34811946, 33732188, 32215887, 37229800, 39528955, 37472026, 37354208, 43059859],
            borderColor: "violet",
        },
        {
            label: "lead compounds",
            data: [68474536, 19619914, 21751260, 24664174, 23007340, 27688158, 29698440, 30332534, 29319926, 39224375, 49849550, 52559505, 52467895, 55677532, 61499172, 79936291, 84016763, 60765719, 53165526, 59084396, 63979311, 72404438, 197750599, 80450636, 31873960, 26882572, 33192442, 24050222, 25826130, 18928475, 22099618, 18963991],
            borderColor: "violet",
        },
        {
            label: "toleune",
            data: [27158362, 27300343, 28086654, 28347131, 26113164, 23401667, 23659462, 20089885, 23186482, 11999258, 9809762, 9122492, 7351874, 5110124, 6461053, 9240935, 5539941, 4412294, 4112601, 4506365, 4958575, 4855067, 5940939, 4413426, 4538515, 6228185, 5472749, 5149228, 5225123, 5226226, 8565920, 5628857],   
            borderColor: "violet",
        },
        {
            label: "total waste",
             data: [157681621,125004313,115540552,892967358,920826226,965041267,777049610,623665847,398180634,357388707,400327901,508874672,484630559,528810828,503056790,513121769,504129227,520668131,393884116,389747236,325904326,297125381,316394468,319392658,320481341,463380375,356344480,335240252,294034865,283159470,296115992,288515910,242060529, 262715644,289583541],
            borderColor: "rgb(75, 192, 192)",
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
