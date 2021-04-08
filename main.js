let cats = `{
    "title": "Cat Families",
    "intro": "This is a list of cats and their mother that we are breeding. If you are interested in adopting please contact us",
    "cats": [
        {
        "name": "Lindy",
        "breed": "Cymric",
        "color": "white",
        "kittens": [
            {
            "name": "Percy",
            "gender": "m"
            },
            {
            "name": "Thea",
            "gender": "f"
            },
            {
            "name": "Annis",
            "gender": "f"
            }
        ]
        },
        {
        "name": "Mina",
        "breed": "Aphrodite Giant",
        "color": "ginger",
        "kittens": [
            {
            "name": "Doris",
            "gender": "f"
            },
            {
            "name": "Pickle",
            "gender": "f"
            },
            {
            "name": "Max",
            "gender": "m"
            }
        ]
        },
        {
        "name": "Antonia",
        "breed": "Ocicat",
        "color": "leopard spotted",
        "kittens": [
            {
            "name": "Bridget",
            "gender": "f"
            },
            {
            "name": "Randolph",
            "gender": "m"
            }
        ]
        }
    ]
    }`

    let header = documentElementById("header")
    let section = documentElementById("section")
    let catsObj = JSON.parse(string)

    