rianna = Teacher.create(name: "Rianna", subject: "Biology")

cell = Classroom.create(name: "Cells", teacher: rianna)
Assignment.create(name: "Cellular Structure", classroom: cell)

trees = rianna.classrooms.create(name: "Trees")
trees.assignments.create(name: "Tree Anatomy")


jonathan = Teacher.create(name: "Jonathan", subject: "Philosophy")
life = Classroom.create(name: "Life 101", teacher: jonathan)

Assignment.create(name: "What even", classroom: life)
life.assignments.create(name: "Yikes")
