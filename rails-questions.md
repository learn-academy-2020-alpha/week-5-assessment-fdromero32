# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?
    The command is $ rails new <app-name> -d postgresql -T.

2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - The Rails HTTP verb that is used to requeset information.
library - is the what will be typed into the browser to access the route. When programming, this portion can be anything but there is something called Restful Routes which we will learn next week which will discuss the best practice to name these. 
:id -   is the params that will be passed through the logic in the controller
book - this is the name of the controller. 
show - this is the method within the controller book. 

3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.
    1 - run the command : $ rails generate migration add_foreign_key_to_models

    2 - We will add our changes to the new migration.rb file created:
        Ex: class AddForeignKeyToModels < ActiveRecord::Migration[6.0]
                def change
                    add_column :books, :lib_id, :integer
                end
                end

    3 - Save our changes to the new migration.rb file
    4 - In terminal, run the command: $ rails db:migrate to save your changes to the database. This save should update the schme as well with the new column info. 
    5 - run: $ rails c -- This will open the rails console and you can check to see if your foreign key is added by creatinga new instance of your model. Rails will automatically generate this number. 

4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?
    The command would be: $ rails generate model Person shirt:string pants:string shoes:string.

5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?
    You would go to the new Person model.rb file and in the class write out the validations. 
    For example:

                class Person < ApplicationRecord
                    validates :shirt, :pants, :shoes, presence: true
                end
    Save the file and you should be good to go. 
