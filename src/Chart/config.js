module.exports= {
    keys: [
        "progress",
        "goal",
    ],
    margin: {
        "top": 20,
        "right": 30,
        "bottom": 90,
        "left": 60
    },
    defs: [
        {
            "id": "dots",
            "type": "patternDots",
            "background": "#324211",
            "color": "#fff",
            "size": 0,
            "padding": 1,
            "stagger": true
        },
        {
            "id": "lines",
            "type": "patternLines",
            "background": "#738c11",
            "color": "#547326",
            "rotation": -45,
            "lineWidth": 0,
            "spacing": 10
        }
    ],
    fill: [
        {
            "match": {
                "id": "progress"
            },
            "id": "dots"
        },
        {
            "match": {
                "id": "goal"
            },
            "id": "lines"
        }
    ],
    axisBottom: {
        "tickSize": 5,
        "tickPadding": 5,
        "tickRotation": 0,
        "legend": "type of self-care",
        "legendPosition": "middle",
        "legendOffset": 40
    },
    axisLeft: {
        "tickSize": 5,
        "tickPadding": 5,
        "tickRotation": 0,
        "legend": "# of times per week",
        "legendPosition": "middle",
        "legendOffset": -40
    },
    legends: [
        {
            "dataFrom": "keys",
            "anchor": "bottom",
            "direction": "row",
            "justify": false,
            "translateX": 0,
            "translateY": 80,
            "itemsSpacing": 2,
            "itemWidth": 100,
            "itemHeight": 20,
            "itemDirection": "left-to-right",
            "itemOpacity": 0.85,
            "symbolSize": 20,
            "effects": [
                {
                    "on": "hover",
                    "style": {
                        "itemOpacity": 1
                    }
                }
            ]
        }
    ]
}