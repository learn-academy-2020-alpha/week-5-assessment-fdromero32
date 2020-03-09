# ASSESSMENT 5: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own there is always something more to learn.   

1. Rails follows an MVC pattern. What does that mean?

  Your answer: MVC pattern stands for Model, View, and Controller. It is the Rails fraimwork for how the app works and how information is sent from the web broswser to the user. 

  Researched answer: MVC is a pattern for the architecture of a software application. It separates an application into the following components: Models for handling data and business logic, controllers for handling the user interface and application, and views for handling graphical user interface objects and presentation. Rails promotes the concept that models, views, and controllers should be kept separate by storing the code for each element as separate files in separate directories.

2. What is a gem?

  Your answer: A gem is a Ruby on Rails dependenacy and is used when installing a Rails app. 

  Researched answer: A gem is a software package which contains a packaged Ruby application or library. Gems can be used to extend or modify functionality in Ruby applications. Commonly they’re used to distribute reusable functionality that is shared with other Rubyists for use in their applications and libraries. Some gems provide command line utilities to help automate tasks and speed up your work.

  Source: https://guides.rubygems.org/

3. Why is it important to have validations in your application?

  Your answer: validation ensures that every section of your data is filled out and that every aspect is unique. 

  Researched answer: Data validation is vital to ensure the data is clean, correct and useful. By having properly filled data, you ensure that the data going into the database is also correct and useful for future use. 

4. Describe a possible relationship between a model called Person and a model called Computer. Based on your description, which model would hold the foreign key?

  Your answer: Based on the model method, I would say that the Person hold the foreign key. Based on the LEARN environment, there is one Computer for many Person(s). We could set up a Computer model and Person model, the Computer would have the has_many: property and set up to Person and Computer would belong_to the Person. New instances of a person using a computer would be danny.computer.create and would have the foreign key. 

  Researched answer: RA above. 


5. What is object-relational mapping?

  Your answer: Honestly, not sure, had to google this one. 

  Researched answer: Object-Relational Mapping (ORM) is a technique that lets you query and manipulate data from a database using an object-oriented paradigm. When talking about ORM, most people are referring to a library that implements the Object-Relational Mapping technique, hence the phrase "an ORM". An ORM library is a completely ordinary library written in your language of choice that encapsulates the code needed to manipulate the data, so you don't use SQL anymore; you interact directly with an object in the same language you're using.

  Source: https://stackoverflow.com/questions/1279613/what-is-an-orm-how-does-it-work-and-how-should-i-use-one


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes
- json
- API
- Endpoints
- Strong params
