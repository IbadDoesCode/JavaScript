const nestedArr = [21,24,25,
    [11,45,21,
        [90,22,67,
            [87,65,29]
        ]
    ]
]

const flatArr = nestedArr.flat(1)

console.log(flatArr)