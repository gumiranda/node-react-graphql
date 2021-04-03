# Dialog PWA Test
# cURL da API
curl 'http://localhost:4000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:4000' --data-binary '{"query":"{\n  list(name:\"Dotson Jenning\") {\n    _id,index,picture,age,eyeColor,name,company,email,phone,greeting\n   friends {\n    name,_id,index,picture,age,eyeColor,name,company,email,phone\n  }\n  }\n}"}' --compressed
