ulaval = {
        "type":"Polygon",
        "coordinates":[[[-71.285439, 46.782905],
                        [-71.274526, 46.773405 ],
                        [-71.260996, 46.781032 ],
                        [-71.272025, 46.788319 ],[-71.285439, 46.782905]]]
}

etudiant = {
    "type":"Point", 
    "coordinates":[]
}


// #0 Insérez les données
db.commerce.insert(dataset)


// #1 Créer l'index géospatial
db.commerce.createIndex({emplacement:"2dsphere"})


// #1 Tous les éléments qui touchent à l'université 
db.commerce.find({"emplacement":{
        $geoIntersects:{$geometry:ulaval}}}
    )

// #2 Tous les éléments contenu à l'intérieur de l'université
db.commerce.find({"emplacement":{
        $within:{$geometry:ulaval}}}
    )


// #3 tous les Restaurants à 1 km de l'étudiant
db.commerce.find({"type":"Restaurant","emplacement":{
    $nearSphere:{
        $geometry:etudiant,
        $maxDistance:1000
    }}}
)

// #4 tous les commerces (Restaurant ou Détail) à 100m du boulevard laurier
db.commerce.find({$or:[{"type":"Restaurant"}, {"type": "Détail"}]}).forEach(function closeToBlvdLaurier(doc) {
    
    is_near = db.commerce.findOne({"nom":"Boulevard Laurier","emplacement":
                                    {$nearSphere:{
                                        $geometry:doc.emplacement,
                                        $maxDistance:100
                                        }}})
    if(is_near!=null){
        print(doc.nom)
    }
})
