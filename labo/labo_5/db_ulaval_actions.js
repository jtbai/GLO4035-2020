use ulaval
actions = db.actions

actions.insert([

    {
     "client":"Erin O'Toole",
     "date":ISODate("2016-01-01T08:00:00.000Z"),
     "total" : 1000,
     "transaction":[
        {"symbole":"XBT", "quantite":2.30170786723749, "montant":1000},
      ]
    },
    {
        "client":"Erin O'Toole",
        "date":ISODate("2017-01-01T08:00:00.000Z"),
        "total" : 10000,
        "transaction":[
           {"symbole":"XBT", "quantite":8.85057572995123, "montant":10000},
        ]
    },
    {
        "client":"Erin O'Toole",
        "date":ISODate("2017-12-26T08:00:00.000Z"),
        "raison": "gros boni corporatif #YOLO",
        "total" : 100000,
        "transaction":[
           {"symbole":"XBT", "quantite":5.16982887866412, "montant":100000},
        ]
    },{
        "client":"Jagmeet Singh",
        "date":ISODate("2016-01-01T08:00:00.000Z"),
        "raison": "achete tout le monde egal",
        "total" : 1000,
        "transaction":[
            {"symbole":"XBT", "quantite":1.1508539336, "montant":500},
            {"symbole":"ETH", "quantite":574.7126436782, "montant":500},
        ]
    },{
        "client":"Jagmeet Singh",
        "date":ISODate("2017-01-01T08:00:00.000Z"),
        "raison": "achete tout le monde egal",
        "total" : 10000,
        "transaction":[
            {"symbole":"XBT", "quantite":4.425287865, "montant":5000},
            {"symbole":"ETH", "quantite":687.757909216, "montant":5000},
        ]	

    },{
        "client":"Jagmeet Singh",
        "date":ISODate("2017-01-01T08:00:00.000Z"),
        "raison": "retour d'impot",
        "total" : 5000,
        "transaction":[	

            {"symbole":"XBT", "quantite":1.1377962252, "montant":2500},
            {"symbole":"ETH", "quantite":11.2607540201, "montant":2500},
        ]
    },
    {
        "client":"Justin Trudeau",
        "date":ISODate("2016-01-01T08:00:00.000Z"),
        "total" : 1000,
        "raison": "mise en place d'un plan long terme qui ne faut pas devier",
        "transaction":[
           {"symbole":"XBT", "quantite":2.30170786723749, "montant":1000},
         ]
       },{
        "client":"Justin Trudeau",
        "date":ISODate("2017-01-01T08:00:00.000Z"),
        "total" : 10000,
        "raison": "Continuation du plan long terme",
        "transaction":[
           {"symbole":"XBT", "quantite":8.85057573, "montant":10000},
         ]
       },{
        "client":"Justin Trudeau",
        "date":ISODate("2018-01-01T08:00:00.000Z"),
        "total" : 10300,
        "raison": "Continuation du plan long terme",
        "transaction":[
           {"symbole":"XBT", "quantite":0.6987451758, "montant":10300},
         ]
       }
])