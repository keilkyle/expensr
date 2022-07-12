require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username:"Bob", email:"bob@bob.com", password:"snacks")
User.create(username:"Maryli", email:"maryli@bob.com", password:"butta")
User.create(username:"Jane", email:"jane@bob.com", password:"tacopants")

Expense.create(user_id: 1, description: Faker::Food.dish, date: Faker::Date.backward(days: 14), amount: rand(0.1..3.5))
Expense.create(user_id: 2, description: Faker::Food.dish, date: Faker::Date.backward(days: 14), amount: rand(0.1..3.5))
Expense.create(user_id: 3, description: Faker::Food.dish, date: Faker::Date.backward(days: 14), amount: rand(0.1..3.5))
Expense.create(user_id: 2, description: Faker::Food.dish, date: Faker::Date.backward(days: 14), amount: rand(0.1..3.5))
Expense.create(user_id: 1, description: Faker::Computer.platform, date: Faker::Date.backward(days: 14), amount: rand(0.1..3.5))
Expense.create(user_id: 2, description: Faker::Computer.platform, date: Faker::Date.backward(days: 14), amount: rand(0.1..3.5))
Expense.create(user_id: 1, description: Faker::Food.dish, date: Faker::Date.backward(days: 14), amount: rand(0.1..3.5))

Tag.create(name:"Food")
Tag.create(name:"Not Food")

Expensetag.create(expense_id: 1, tag_id: 1)
Expensetag.create(expense_id: 2, tag_id: 1)
Expensetag.create(expense_id: 3, tag_id: 1)
Expensetag.create(expense_id: 4, tag_id: 1)
Expensetag.create(expense_id: 5, tag_id: 2)
Expensetag.create(expense_id: 6, tag_id: 2)


