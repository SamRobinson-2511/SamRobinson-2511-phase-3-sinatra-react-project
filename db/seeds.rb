puts "clearing database"

Collector.destroy_all
Record.destroy_all
Collection.destroy_all
Review.destroy_all

puts "🌱 Seeding spices..."


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
    collector_id: collector1.id
    
)

record2 = Record.create(
    artist_name: "Lefty Frizell", 
    artist_first_name: "Lefty",
    artist_last_name: "Frizzell", 
    album_name: "The Legend Lives On" , 
    label: "Columbia", 
    release_date: "1983", 
    cat_num: "FC 38938", 
    collector_id: collector2.id 
)

record3 = Record.create(
    artist_name: "Lego Feet", 
    artist_first_name: "",
    artist_last_name: "", 
    album_name: "S/T" , 
    label: "SKA", 
    release_date: "1995", 
    cat_num: "SKA001LP", 
    collector_id: collector3.id  
)

puts "records seeded"

puts "seed collections"

collection1 = Collection.create(collector_id: collector1.id)
collection2 = Collection.create(collector_id: collector2.id)
collection3 = Collection.create(collector_id: collector3.id)

puts "collections seeded"

puts "reviews seeding"

review1 = Review.create(rating: 4, comment: "lame", record_id: record1.id, collector_id: collector1.id)
review2 = Review.create(rating: 5, comment: "at it", record_id: record2.id, collector_id: collector2.id)
review3 = Review.create(rating: 3, comment: "sounds good to me!", record_id: record2.id, collector_id: collector3.id)

puts "reviews seeded"
    
puts "✅ Done seeding!"
