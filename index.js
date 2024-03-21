console.log("Hello world !!!")

const data = [
{"id":1,"first_name":"Sherman","last_name":"Gritsaev","email":"sgritsaev0@bravesites.com","gender":"Male","ip_address":"44.52.123.197"},
{"id":2,"first_name":"Jackqueline","last_name":"Hallgarth","email":"jhallgarth1@cmu.edu","gender":"Female","ip_address":"98.138.29.39"},
{"id":3,"first_name":"Babette","last_name":"Renals","email":"brenals2@youtu.be","gender":"Female","ip_address":"141.102.118.34"},
{"id":4,"first_name":"Mala","last_name":"Durkin","email":"mdurkin3@nba.com","gender":"Female","ip_address":"87.221.218.157"},
{"id":5,"first_name":"Candis","last_name":"Polglase","email":"cpolglase4@stumbleupon.com","gender":"Female","ip_address":"123.172.26.147"}
]

console.table(data, ["first_name"]) //the table method take one argument : column name 