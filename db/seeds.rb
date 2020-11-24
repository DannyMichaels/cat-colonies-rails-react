# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.destroy_all
Colony.destroy_all
@cat1 = Cat.create(name: "Alfie", breed: "Tabby", age: 3)
@cat2 = Cat.create(name: "Chaplin", breed: "DSH", age: 6)
@cat3 = Cat.create(name: "Grey", breed: "DSH", age: 2)
@cat4 = Cat.create(name: "Jinx", breed: "DLH", age: 1)
@cat5 = Cat.create(name: "Midnight", breed: "DSH", age: 15)
@cat6 = Cat.create(name: "Rascal", breed: "DSH", age: 12)
p "There are #{Cat.count} cats created successfully"
@colony1 = Colony.create(name: "Greenpoint kitty kastle", borough: "Brooklyn")
@colony2 = Colony.create(name: "Animal Haven", borough: "New York")
@colony3 = Colony.create(name: "Adpot a kitten", borough: "Brooklyn")
@colony4 = Colony.create(name: "Meow meow", borough: "Queens")
@colony5 = Colony.create(name: "Jamean's Pet Haven", borough: "Brooklyn")
@colony6 = Colony.create(name: "ABC Kitten", borough: "SI")
p "There are #{Colony.count} colonies created successfully"
@colony1.cats.push(@cat1);
@colony1.cats.push(@cat2);
@colony2.cats.push(@cat3);
@colony4.cats.push(@cat4);