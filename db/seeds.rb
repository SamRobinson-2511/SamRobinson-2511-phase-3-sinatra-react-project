puts "clearing database"

Collector.destroy_all
Record.destroy_all
Store.destroy_all

puts "🌱 Seeding spices..."
puts "seeding stores"

store1 = Store.create(name: "Ameoba Music", address: "123 Main Street", city: "San Francisco", state: "CA")
store2 = Store.create(name: "Dusty Groove", address: "123 Main Street", city: "Chicago", state: "IL")
store3 = Store.create(name: "Luna Music", address: "123 Main Street", city: "Indianapolis", state: "IN")

puts "stores seeded"

puts "seed collectors"

collector1 = Collector.create(first_name: "Sam", last_name: "Robinson", user_name: "UbuLaCroix")
collector2 = Collector.create(first_name: "Tom", last_name: "Brownlee", user_name: "ColorBrown")
collector3 = Collector.create(first_name: "Jack", last_name: "O'Lantern", user_name: "Heady")
# Seed your database here

puts "collectors seeded"

puts "seed records"

record1 = Record.create(
    artist_name: "FourTet", 
    artist_first_name: "Kieren",
    artist_last_name: "Hebden", 
    album_name: "A Joy" , 
    label: "Domino", 
    release_date: "2005", 
    cat_num: "dno 074", 
    collector_id: collector1.id , 
    store_id: store1.id
)

record2 = Record.create(artist_name: "Lefty Frizell", 
    artist_first_name: "Lefty",
    artist_last_name: "Frizzell", 
    album_name: "The Legend Lives On" , 
    label: "Columbia", 
    release_date: "1983", 
    cat_num: "FC 38938", 
    collector_id: collector2.id , 
    store_id: store2.id
)

record3 = Record.create(artist_name: "Lego Feet", 
artist_first_name: "",
artist_last_name: "", 
album_name: "S/T" , 
label: "SKA", 
release_date: "1995", 
cat_num: "SKA001LP", 
collector_id: collector3.id , 
store_id: store3.id
)

puts "records seeded"

puts "seed collections"

collection1 = Collection.create(collector_id: collector1.id)
collection2 = Collection.create(collector_id: collector2.id)
collection3 = Collection.create(collector_id: collector3.id)

puts "collections seeded"

    
puts "✅ Done seeding!"
