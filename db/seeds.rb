Dealer.destroy_all
User.destroy_all
Van.destroy_all

puts "🏕 Seeding dealers..."
dealer1 = Dealer.create(name: 'Vans R Us')
dealer2 = Dealer.create(name: 'Vans for Sale')
dealer3 = Dealer.create(name: 'Vanaria')
dealer4 = Dealer.create(name: 'Morgans Vans')
dealer5 = Dealer.create(name: 'Dannys Vans')
dealer6 = Dealer.create(name: 'Peters Vans')
dealer7 = Dealer.create(name: 'Amandas Vans')
dealer8 = Dealer.create(name: 'Nicks Vans')

puts "🏕 Seeding users..."
user1 = User.create(username: 'sam', password: "123")
user2 = User.create(username: 'zev', password: "123")
user3 = User.create(username: 'kurt', password: "123")
user4 = User.create(username: 'jeremy', password: "123")
user5 = User.create(username: 'nick', password: "123")
user6 = User.create(username: 'john', password: "123")
user7 = User.create(username: 'tim', password: "123")
user8 = User.create(username: 'chris', password: "123")

puts "🏕 Seeding vans..."
Van.create(dealer_id: dealer1.id, user_id: user2.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer1.id, user_id: user3.id, year: 2017, make: "Ford", model: "Econoline", price: 200000, imageURL: "https://images.squarespace-cdn.com/content/v1/5bd61ccab10f25af1fcb352d/c6718bfe-e1a1-410c-b9e0-597eaed42289/Campervan+Conversions.jpg")
Van.create(dealer_id: dealer1.id, user_id: user4.id, year: 2014, make: "Mercedes", model: "Sprinter", price: 17524, imageURL: "https://images.squarespace-cdn.com/content/v1/5eb4777ae13ffe469f081663/b97268e7-fc15-464f-bff9-0e4b679800cb/custom_camper_van_SYNC_vans.jpg")
Van.create(dealer_id: dealer2.id, user_id: user2.id, year: 2012, make: "GMC", model: "Savana", price: 15236, imageURL: "https://cdn.vox-cdn.com/thumbor/HD8cb-5FC8mJtDXKJPUdutKPyhI=/0x0:3510x2133/1200x800/filters:focal(1475x787:2035x1347)/cdn.vox-cdn.com/uploads/chorus_image/image/61522157/lucybeaugard_37.0.jpg")
Van.create(dealer_id: dealer2.id, user_id: user2.id, year: 2021, make: "Ford", model: "Econoline", price: 15500, imageURL: "https://images.squarespace-cdn.com/content/v1/5bd61ccab10f25af1fcb352d/1657928117413-PVXTD10YZXQ98XVMB5GZ/IMG-9811.jpg")
Van.create(dealer_id: dealer4.id, user_id: user8.id, year: 2022, make: "GMC", model: "Savana", price: 75000, imageURL: "https://images.squarespace-cdn.com/content/v1/5f3437c02f2faf2cc21553a2/1608065237049-CVLWKPMHD42ITT9UCO00/Camper+Van+Conversion+Financing.jpg")
Van.create(dealer_id: dealer5.id, user_id: user7.id, year: 2011, make: "Mercedes", model: "Sprinter", price: 81200, imageURL: "https://www.motortrend.com/uploads/sites/5/2021/01/Winnebago-Solis-02.jpg")
Van.create(dealer_id: dealer3.id, user_id: user4.id, year: 2010, make: "Ford", model: "Econoline", price: 95000, imageURL: "http://cdn.shopify.com/s/files/1/0002/9389/6194/articles/Rocky_promaster_van_conversion.png?v=1655787436")
Van.create(dealer_id: dealer1.id, user_id: user2.id, year: 2002, make: "Ford", model: "Econoline", price: 21000, imageURL: "https://i0.wp.com/fieldvan.com/wp-content/themes/fieldvan/img/home/intro/adventure_updated/1.1640582728.jpg")
Van.create(dealer_id: dealer1.id, user_id: user1.id, year: 2001, make: "GMC", model: "Savana", price: 65000, imageURL: "https://images.squarespace-cdn.com/content/v1/5626d3a1e4b0fe0e8117d7ac/1617574349372-N8YY9N9H23TQZICIJ428/image-asset.jpeg?format=1000w")
Van.create(dealer_id: dealer1.id, user_id: user4.id, year: 1987, make: "Mercedes", model: "Sprinter", price: 21000, imageURL: "https://images.squarespace-cdn.com/content/v1/5eb4777ae13ffe469f081663/17f84f09-2a32-492a-b52f-717e7ebed996/SVT_DSC_6088+%281%29.jpg")
Van.create(dealer_id: dealer2.id, user_id: user2.id, year: 1991, make: "GMC", model: "Savana", price: 36000, imageURL: "https://sportsmobile.com/wp-content/uploads/2018/08/sportsmobile-transit-conversion-examples-1.jpg")
Van.create(dealer_id: dealer2.id, user_id: user1.id, year: 2021, make: "GMC", model: "Savana", price: 59888, imageURL: "https://images.squarespace-cdn.com/content/v1/5bd61ccab10f25af1fcb352d/78f4dc75-940c-4a0e-b699-7a79c24b07ea/IMG-9810.jpg")
Van.create(dealer_id: dealer4.id, user_id: user8.id, year: 2014, make: "Ford", model: "Econoline", price: 45111, imageURL: "https://mytourig.com/wp-content/uploads/2021/06/Renegade-LS-Van-Conversion-05.jpg")
Van.create(dealer_id: dealer5.id, user_id: user7.id, year: 2016, make: "GMC", model: "Savana", price: 26000, imageURL: "https://cdn.shopify.com/s/files/1/0594/7690/2053/files/IMG_3594_2_bc533b04-b17f-44e5-8502-f5e6efd5fdbd.jpg?v=1658429002&width=1500")
Van.create(dealer_id: dealer3.id, user_id: user4.id, year: 2018, make: "Ford", model: "Econoline", price: 48000, imageURL: "https://montemlife.com/wp-content/uploads/2019/06/awesome-DIY-homemade-promaster-campervan-conversion.jpg")
Van.create(dealer_id: dealer1.id, user_id: user2.id, year: 2019, make: "Ford", model: "Econoline", price: 26000, imageURL: "https://mymodernmet.com/wp/wp-content/uploads/2018/05/van-conversion-10.jpeg")
Van.create(dealer_id: dealer1.id, user_id: user1.id, year: 2015, make: "GMC", model: "Savana", price: 28999, imageURL: "https://images.squarespace-cdn.com/content/v1/5eb4777ae13ffe469f081663/1654711475536-2TYQMM16YG886A35V4WA/sync-sprinter-van-conversion+%281%29.jpg")
Van.create(dealer_id: dealer2.id, user_id: user2.id, year: 2014, make: "GMC", model: "Savana", price: 26000, imageURL: "https://cdn.shopify.com/s/files/1/1035/4067/articles/sprinter_campervan_conversion_by_grant_wilson_c9c759e1-8a01-4f10-9a6c-55763da262b7_2048x.jpg?v=1554225295")
Van.create(dealer_id: dealer2.id, user_id: user1.id, year: 2009, make: "Mercedes", model: "Sprinter", price: 36000, imageURL: "https://cdn.vox-cdn.com/thumbor/b71ZDPUnBKaUULeecFTwNDttvcg=/0x0:920x613/1200x0/filters:focal(0x0:920x613):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13145399/Mistique_Uploads5.jpg")
Van.create(dealer_id: dealer4.id, user_id: user8.id, year: 2014, make: "GMC", model: "Savana", price: 48000, imageURL: "https://www.motortrend.com/uploads/sites/11/2019/01/2019-Ford-Transit-Custom-Nugget.jpg?fit=around%7C875:492")
Van.create(dealer_id: dealer5.id, user_id: user7.id, year: 2017, make: "Ford", model: "Econoline", price: 79000, imageURL: "https://sportsmobile.com/wp-content/uploads/2017/08/standard-and-dyo-examples.jpg")
Van.create(dealer_id: dealer3.id, user_id: user4.id, year: 2018, make: "GMC", model: "Savana", price: 45000, imageURL: "https://mytourig.com/wp-content/uploads/2021/06/Renegade-LS-Van-Conversion-05.jpg")
Van.create(dealer_id: dealer1.id, user_id: user2.id, year: 2021, make: "GMC", model: "Savana", price: 78000, imageURL: "https://robbreport.com/wp-content/uploads/2021/09/beastmode02.jpg?w=1000")
Van.create(dealer_id: dealer1.id, user_id: user4.id, year: 2022, make: "Ford", model: "Econoline", price: 89000, imageURL: "https://www.motortrend.com/uploads/sites/11/2019/10/Outside-Van-01.jpg?interpolation=lanczos-none&fit=around%7C660:371?fit=around%7C875:492")
Van.create(dealer_id: dealer2.id, user_id: user2.id, year: 2018, make: "Mercedes", model: "Sprinter", price: 40000, imageURL: "https://www.motorbiscuit.com/wp-content/uploads/2021/10/Winnebago-camper.jpg?w=1024&h=767")
Van.create(dealer_id: dealer2.id, user_id: user3.id, year: 2017, make: "GMC", model: "Savana", price: 32000, imageURL: "https://www.outsideonline.com/wp-content/uploads/2019/02/12/winnebago-new-camper_s.jpg")
Van.create(dealer_id: dealer4.id, user_id: user8.id, year: 2013, make: "Ford", model: "Econoline", price: 89000, imageURL: "https://cdn-d.rvezy.com/960x640x50/rv/rv/prod/fff4254d0c4543bba1ab9924918e5934_20210517181940854.webp")
Van.create(dealer_id: dealer5.id, user_id: user7.id, year: 2012, make: "GMC", model: "Savana", price: 98000, imageURL: "https://d3adfz34ynqwkr.cloudfront.net/image/upload/w_731,h_469,c_fill,g_center,f_auto,q_auto/rvs-images/8213a0db523503da53c23425971f66b0.jpeg")
Van.create(dealer_id: dealer3.id, user_id: user4.id, year: 2011, make: "Ford", model: "Econoline", price: 65000, imageURL: "https://rvrentalssandiego.com/ism/image/slides/_u/san_diego_rv_rentals_revel9.jpg")

puts "✅ Done seeding!"