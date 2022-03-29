use sports
show dbs

db.cricket.insertMany(players)
db.football.insertMany(players)
db.TT.insertMany(players)

db.TT.renameCollection('tennis')

