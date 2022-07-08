# Okay here's the idea

users
have many expenses

expenses 
belong to user
have many expense-tags
have many tags, through: expense-tags

expense-tags
belong to expense
belong to tag

tags
have many expense-tags
have many expenses, through: expense-tags

cr users
crud expenses
crud tags

routes:
- see all expenses, itemized with tags
- see all tags & total spend
- see profile page, total spend, top tags, etc.

authentication/signup flow