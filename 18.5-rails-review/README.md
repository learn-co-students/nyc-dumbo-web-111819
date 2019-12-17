## PROCESS FOR TODAY ##

1. Git clone, bundle install
2. While your terminal is doing the job, read the instruction.
3. ON A WHITEBOARD: draw the models, draw the associations (does it need a join model?), write what each model needs (columns), mark validations and views
4. NOW only you’re starting to code. Create models. I’d also copy/paste instructions for each model from the read me. If you feel like a task is super confusing, put it at the bottom of the list so that you get to it at the end (5/6 tasks done is better than being stuck for 40 minutes in panic)
5. Add validations and associations
6. Create migrations + db:create, db:migrate
7. Write up seed data just to check associations (I’d say, two instances of each class)
8. db:seed
9. rails console: try to access instances of different classes through associations:
  a. check whether your seeds exist (e.g. School.all or School.all.first)
  b. check whether associations work (e.g. School.all.first.students would check for all my students and School.all.first.students.first.laptop would check for the laptop of my first student — notice that students are plural because School has_many :students and laptop is singular because laptop belongs_to :student)
  c. to check validations, try to create a student with incomplete required stuff and then checks if it went to your database (e.g. School.all.last) — if it did, you check your validations
10. check which routes you’d need, go to config, write up the correct routes
11. write controllers
12. rails s
13. go have fun with your page!
