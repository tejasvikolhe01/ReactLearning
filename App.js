const elements = React.createElement(
    'div',
    {
        id:"parent",
        xyz:"abc"
    },
    [React.createElement("div", {
        id:"child1"
    }, [React.createElement("h1", {}, "Hi, I am h1 heading"),
        React.createElement("h2", {}, "Hi, I am h2 heading")
    ]),
    React.createElement("div", {
        id:"child2"
    } ,
        [React.createElement("h1", {}, "Hi, I am h1 heading"),
            React.createElement("h2", {}, "Hi, I am h2 heading")
        ]  
    )
]
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(elements);