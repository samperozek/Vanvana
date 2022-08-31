Dealer.destroy_all
User.destroy_all
Van.destroy_all

puts "🏕 Seeding dealers..."
dealer1 = Dealer.create(name: 'Crazy Vans R Us')
dealer2 = Dealer.create(name: 'Lizzie')
dealer3 = Dealer.create(name: 'Tom')
dealer4 = Dealer.create(name: 'Morgan')
dealer5 = Dealer.create(name: 'Danny')
dealer6 = Dealer.create(name: 'Peter')
dealer7 = Dealer.create(name: 'Amanda')
dealer8 = Dealer.create(name: 'Nick')

puts "🏕 Seeding users..."
user1 = User.create(username: 'Archery', password: "123")
user2 = User.create(username: 'Swimming', password: "123")
user3 = User.create(username: 'Photography', password: "123")
user4 = User.create(username: 'Arts & Crafts', password: "123")
user5 = User.create(username: 'Kayaking', password: "123")
user6 = User.create(username: 'Fencing', password: "123")
user7 = User.create(username: 'Canoeing', password: "123")
user8 = User.create(username: 'Windsurfing', password: "123")

puts "🏕 Seeding vans..."
Van.create(dealer_id: dealer1.id, user_id: user2.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer1.id, user_id: user1.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer1.id, user_id: user4.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer2.id, user_id: user2.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer2.id, user_id: user1.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer4.id, user_id: user8.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer5.id, user_id: user7.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer3.id, user_id: user4.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer1.id, user_id: user2.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer1.id, user_id: user1.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer1.id, user_id: user4.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer2.id, user_id: user2.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer2.id, user_id: user1.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer4.id, user_id: user8.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer5.id, user_id: user7.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer3.id, user_id: user4.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer1.id, user_id: user2.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer1.id, user_id: user1.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer1.id, user_id: user4.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer2.id, user_id: user2.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer2.id, user_id: user1.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer4.id, user_id: user8.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer5.id, user_id: user7.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer3.id, user_id: user4.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer1.id, user_id: user2.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer1.id, user_id: user1.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer1.id, user_id: user4.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer2.id, user_id: user2.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer2.id, user_id: user1.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer4.id, user_id: user8.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer5.id, user_id: user7.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")
Van.create(dealer_id: dealer3.id, user_id: user4.id, year: 2018, make: "GMC", model: "Savana", price: 28999, imageURL: "https://lowgravityascents.com/wp-content/uploads/2014/09/Van.jpg")

puts "✅ Done seeding!"