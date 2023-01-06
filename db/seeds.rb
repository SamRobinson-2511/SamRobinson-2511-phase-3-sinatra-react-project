puts "clearing database"

Collector.destroy_all
Record.destroy_all
Review.destroy_all

puts "🌱 Seeding spices..."


puts "seed collectors"




collector1 = Collector.create(first_name: "Sam", last_name: "Robinson", user_name: "UbuLaCroix")
collector2 = Collector.create(first_name: "Tom", last_name: "Brownlee", user_name: "ColorBrown")
collector3 = Collector.create(first_name: "Jack", last_name: "O'Lantern", user_name: "Heady")


puts "collectors seeded"

puts "seed records"

Record.create(
    artist_name: "FourTet", 
    artist_first_name: "Kieren",
    artist_last_name: "Hebden", 
    album_name: "A Joy" , 
    label: "Domino", 
    release_date: "2005", 
    genre: "Electronic",
    cat_num: "dno 074", 
    image_url: "https://i.discogs.com/ZlOEAztH44IHGoAGebGpLuyuEJwbdTbZmQ6tkYdxc24/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MTU3/NzUtMTQ2NzUwMjE0/OS0xNjc1LmpwZWc.jpeg"
)

Record.create(
    artist_name: "Lefty Frizell", 
    artist_first_name: "Lefty",
    artist_last_name: "Frizzell", 
    album_name: "The Legend Lives On" , 
    label: "Columbia", 
    release_date: "1983", 
    genre: "Folk",
    cat_num: "FC 38938", 
    image_url: "https://i.discogs.com/WOVmV52OUyz6qMl_e95n2wqjYVtjm6FY4PYqDK6IXUM/rs:fit/g:sm/q:90/h:600/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYwMTcx/NzEtMTU0NTMwMjMx/My03OTM0LmpwZWc.jpeg"
    
)

Record.create(
    artist_name: "Lego Feet", 
    artist_first_name: "",
    artist_last_name: "", 
    album_name: "S/T" , 
    label: "SKA", 
    release_date: "1995",
    genre: "Electronic",
    cat_num: "SKA001LP", 
    image_url: "https://i.discogs.com/odVW9oKap2P_PuBp8o0TGmdMSOEwNsGAMpgIe16jIGI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3MzQ1/MzYtMTQwOTAxOTE1/Ni0zMzAwLmpwZWc.jpeg"
)

Record.create(
    artist_name: "The Louvin Brothers", 
    artist_first_name: "",
    artist_last_name: "", 
    album_name: "Satan Is Real" , 
    label: "Capitol", 
    release_date: "November 16, 1959", 
    genre: "Gospel",
    cat_num: "T-1277", 
    image_url: "https://i.discogs.com/mVifUCjLTvoTV4tEKZ1RfEhuCvw5haJ-UTI-GVwF-BM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTY2/MjgtMTUyOTc4NDEy/Ny05NDAxLmpwZWc.jpeg"
)

Record.create(
    artist_name: "Charlemagne Palestine", 
    artist_first_name: "",
    artist_last_name: "", 
    album_name: "Godbear" , 
    label: "Black Truffle", 
    release_date: "2016", 
    genre: "Minimal",
    cat_num: "BT019", 
    image_url: "https://i.discogs.com/B71l770sGPKpKvV2Nmm4xqhvDUuc3J5PA4USwJPjz9o/rs:fit/g:sm/q:90/h:589/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc5OTg2/ODctMTQ1ODUwMjU1/Ni02ODU1LmpwZWc.jpeg"
)

Record.create(
    artist_name: "Battiato", 
    artist_first_name: "Franco",
    artist_last_name: "Battiato", 
    album_name: "Sulle Corde Di Aries" , 
    label: "Bla Bla", 
    release_date: "1973", 
    genre: "Minimal",
    cat_num: "BBXL 10003", 
    image_url: "https://i.discogs.com/DmQ6AnU2HVLnUjUJ2JLV6yxiBtwCkK6zVJDpQhOkz5E/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5MzY0/Ny0xNjYxOTQ3NzQw/LTQwNjguanBlZw.jpeg"
)

Record.create(
    artist_name: "Aphex Twin", 
    artist_first_name: "Richard",
    artist_last_name: "James", 
    album_name: "Windowlicker" , 
    label: "Warp", 
    release_date: "1999", 
    genre: "Electronic",
    cat_num: "WAP 105", 
    image_url: "https://i.discogs.com/k-Y9CXlD9werdakmyYzTWeK_CRR6bRNOwqEEeySLORg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg2MzU2/OTAtMTQ5Mjg3Njk2/MS04NzE5LmpwZWc.jpeg"
)

Record.create(
    artist_name: "Lifetones", 
    artist_first_name: "",
    artist_last_name: "", 
    album_name: "For A Reason" , 
    label: "Tone of Life Records", 
    release_date: "1983", 
    genre: "Dub",
    cat_num: "LTM 001", 
    image_url: "https://i.discogs.com/06Vf3Fc6PAjPF2_qZwBg-_mJEQr2tmIL0m8yHIgMQTo/rs:fit/g:sm/q:90/h:600/w:597/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ0MDQ4/MC0xNDY3NDcwNjQy/LTUxOTEuanBlZw.jpeg"
)


Record.create(
    artist_name: "Scott Walker", 
    artist_first_name: "",
    artist_last_name: "", 
    album_name: "Scott 4" , 
    label: "Philips", 
    release_date: "1969", 
    genre: "Pop",
    cat_num: "SBL 7913", 
    image_url: "https://i.discogs.com/_UCqru2F4xwGphRNWGeLwTkGcnNlgKpQEyV79u8S-RE/rs:fit/g:sm/q:90/h:600/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc4MDg5/NS0xNDE1NDkzMDc0/LTgzMzIuanBlZw.jpeg"
)

Record.create(
    artist_name: "Massacre", 
    artist_first_name: "",
    artist_last_name: "", 
    album_name: "Killing Time" , 
    label: "Celluloid", 
    release_date: "1981", 
    genre: "Free",
    cat_num: "CEL 6597", 
    image_url: "https://i.discogs.com/Zkjo7nZt1pCVNkIa2e3AkD6Lr6b3PIT0yfFEL_T8MTo/rs:fit/g:sm/q:90/h:600/w:597/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgyMDMx/Ny0xMTYyMTQ0NDA3/LmpwZWc.jpeg"
)


puts "records seeded"

puts "reviews seeding"

10.times do
    Review.create(
        rating: rand(1..5).to_f, 
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        record_id: Record.all.sample.id, 
        collector_id: Collector.all.sample.id, 
    )
end

# review1 = Review.create(rating: 4, comment: "lame", record_id: record1.id, collector_id: collector1.id)
# review2 = Review.create(rating: 5, comment: "at it", record_id: record2.id, collector_id: collector2.id)
# review3 = Review.create(rating: 3, comment: "sounds good to me!", record_id: record2.id, collector_id: collector3.id)

puts "reviews seeded"
    
puts "✅ Done seeding!"
