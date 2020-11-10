from elasticsearch import Elasticsearch
ELASTICSERACH_HOST = "localhost"
ELASTICSEARCH_PORT = 9200


NOM_INDEX_COMMERCE= "commerce"
elastic_search_client = Elasticsearch(ELASTICSERACH_HOST,port=ELASTICSEARCH_PORT)


settings = {} // pipeline de preprocessing
mappings = {}  // tout les définitions de champs


if elastic_search_client.indices.exists(index=NOM_INDEX_COMMERCE):
    elastic_search_client.indices.delete(index=NOM_INDEX_COMMERCE)
elastic_search_client.indices.create(index=NOM_INDEX_COMMERCE, body={"settings":settings, "mappings":mapping})