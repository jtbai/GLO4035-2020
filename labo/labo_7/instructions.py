from elasticsearch import Elasticsearch
ELASTICSERACH_HOST = "localhost"
ELASTICSEARCH_PORT = 9200

elastic_search_client = Elasticsearch(ELASTICSERACH_HOST,port=ELASTICSEARCH_PORT)
NOM_INDEX_COMMERCE = "commerce"
NOM_DOCTYPE_COMMERCE = "doc"

NOM_INDEX_QUEBEC = "quebec"
NOM_DOCTYPE_QUEBEC = "doc"


def extract_hit_list(elastic_search_results, name_field):
    if 'hits' in elastic_search_results and 'hits' in elastic_search_results['hits']:
        return [hit['_source'][name_field] for hit in elastic_search_results['hits']['hits']]



### Question 1 : Trouvez tous les commerces qui servent de la bière!
beer_query = {"query":{"match": {"description": "biere"}}}
beer_place = elastic_search_client.search(index=NOM_INDEX_COMMERCE, doc_type=NOM_DOCTYPE_COMMERCE, body=beer_query)

print(extract_hit_list(beer_place, 'nom'))
#Rep: ['Le Pub', 'Café Au Temps Perdu', '3 Brasseurs']



### Question 2: Trouvez tous les commerces à l'intérieur d'une boite délimitée par les coins de place ste-foy
box_place_stefoy = {"top_left": {"lat": 46.775088, "lon": -71.281777}, "bottom_right": {"lat": 46.772119, "lon": -71.276016}}
bounding_box_query = {"query":{"geo_bounding_box": {"emplacement": box_place_stefoy}}}
documents_within_bounding_box = elastic_search_client.search(index=NOM_INDEX_COMMERCE, doc_type=NOM_DOCTYPE_COMMERCE, body=bounding_box_query)

print(extract_hit_list(documents_within_bounding_box, 'nom'))
#Rep: ['La Maison Simons', '3 Brasseurs']



### Question 3: Trouvez tous les commerces à l'intérieur du polygone précis de place ste-fot
place_stefoy = {"points": [{"lat": 46.773464, "lon": -71.282646}, {"lat": 46.775903, "lon": -71.278108}, {"lat": 46.773890, "lon": -71.275876}, {"lat": 46.771575, "lon": -71.280328}]}
polygon_query = {"query": {"geo_polygon": {"emplacement":place_stefoy}}}
documents_within_polygon = elastic_search_client.search(index=NOM_INDEX_COMMERCE, doc_type=NOM_DOCTYPE_COMMERCE, body=polygon_query)

print(extract_hit_list(documents_within_polygon, 'nom'))
#Rep: ['La Maison Simons', '3 Brasseurs']


### Question 4: Trouvez les restaurants à l'intérieur d'une zone de 1 km du pouliot (point PLT). Il doit être une "microbrasserie" et un "pub":
PLT = {"lat": 46.778298, "lon": -71.274298}
distance_query = {"query":{"geo_distance": {"distance": "1km", "emplacement": PLT}}}
updated_distance_query = {"query":{
            "bool": {
                "must": [
                    {"term": {"type": "restaurant"}},
                    {"term": {"type": "microbrasserie"}},
                    {"term": {"type": "pub"}}],
            "filter":{"geo_distance": {"distance": "1km", "emplacement": PLT}}
        },
    }
}
restaurant_documents_within_distance = elastic_search_client.search(index=NOM_INDEX_COMMERCE, doc_type=NOM_DOCTYPE_COMMERCE, body=updated_distance_query)

print(extract_hit_list(restaurant_documents_within_distance, 'nom'))
#Rep : ['Le Pub', '3 Brasseurs', 'Saveur Campus ']


### Question 5: Trouvez les restaurants à un KM du plt mais avec une fonction spéciale de triage
plt_string = "46.778298,-71.274298"
query_with_distance_weigth = {"query": {
    "function_score": {
        "query": {
            "bool": {
                "must": [{"term": {"type": "restaurant"}}],
                "should": [{"term": {"type": "pub"}}, {"term": {"type":"microbrasserie"}}],
                "filter": [{"geo_distance":{"distance": "1km", "emplacement": PLT}}]
        }},
        "script_score": {"script": "_score  / doc['emplacement'].arcDistance("+plt_string+")"}}
}}

document_score_with_distance = elastic_search_client.search(index=NOM_INDEX_COMMERCE, doc_type=NOM_DOCTYPE_COMMERCE, body=query_with_distance_weigth)

print(extract_hit_list(document_score_with_distance, 'nom'))
# Rep ['Le Pub', '3 Brasseurs', 'Saveur Campus ']


#### Question 6: Trouvez tous les commerces à l'intérieur de forme "Université Laval"
query_commerce_in_ulaval = {"query": {
        "bool": {
            "must" : [{"match_all" : {}}],
            "filter": [{"geo_shape": {
            "emplacement_shape": {
                "indexed_shape": {
                    "index": NOM_INDEX_QUEBEC,
                    "type": NOM_DOCTYPE_QUEBEC,
                    "id": 0,
                    "path": "emplacement"
                },"relation":"within"}
            }}]
        }
    }
}
commerce_in_ulaval = elastic_search_client.search(index=NOM_INDEX_COMMERCE, doc_type=NOM_DOCTYPE_COMMERCE, body=query_commerce_in_ulaval)

print(extract_hit_list(commerce_in_ulaval, 'nom'))
# Rép: ['Le fou alies', 'Saveur Campus ', 'Le Pub']
