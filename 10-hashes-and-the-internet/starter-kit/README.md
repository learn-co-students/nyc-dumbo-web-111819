## SWBATs

* [ ] Practice writing a command line application (CLI)
* [ ] Recognize the parts of the request-response lifecycle
    * [ ] Define client and describe setting up the request
    * [ ] Define server and describe how the response is formatted
    * [ ] Identify HTML as a response type
    * [ ] Identify and define JSON
* [ ] Define Application Programming Interface (API)
    * [ ] Explain the uses of an API on the internet
* [ ] Practice making requests to an API and parsing and examining the result

## Outline
- Review ActiveRecord/project setup
- Discuss user stories for our app
  - [ ] As a user, I should be able to sign up/login to the application
  - [ ] As a user, I can search the Google API and save books to my library
  - [ ] As a user, I can view a list of my saved books
- Build welcome message and user login
- Implement search using Google API
*If there's time*
- Save search results to database
- Display saved books

### Domain model
![](jokeApp.png)
User -< UserJoke >- Joke

### Process
1. Create Gemfile + run `bundle`
2. Create migrations: run `rake db:create_migration`
3. Migrate: run `rake db: migrate`
* **REMEMBER** never ever ever change anything in schema.
4. Set up associations in classes (belongs_to / has_many / has_many through:)
5. Create seed data + run `rake db: seed`
* remember: seeding does not give you any output so no news on your console == good news
6. Check if you've seeded correctly: run `rake c` and check what's the last instance of any of your class

### Dad Jokes API

- [Dad Jokes API Docs](https://icanhazdadjoke.com/api)
- [Sample API Request](https://icanhazdadjoke.com/api#fetch-a-random-dad-joke)

- **[More APIs]**(https://rapidapi.com/collection/cool-apis)
- [And even more APIs](https://medium.com/@vicbergquist/18-fun-apis-for-your-next-project-8008841c7be9)

### Fun Gems For Your Projects
- `faker` - randomly generated seed data fun
- `colorize` - colored text output in your terminal
- `lolcat` - enabling rainbow text coloring
- `rest-client` - make HTTP requests and get data from APIs
- `tty-prompt` - nice interface for prompting for user input
- `formatador` - styling output information into a neat table
- `artii` - creating text banners

### Tutorials
- [Using TTY Prompt by Brandon James](https://medium.com/@brandonj2858/benefits-of-using-tty-prompt-for-my-first-project-e5cfbc598a62)
- [Adding animations to your CLI by Sylwia Vargas](https://medium.com/better-programming/add-an-animation-or-a-giph-to-your-ruby-cli-29952e8c46ea)
- [Adding ASCII Art to your CLI by Sylwia Vargas](https://medium.com/@sylwiavargas/adding-pictures-to-your-ruby-cli-4252b89823a)
- [Using Time/Date in your CLI by Joel Mendoza](https://medium.com/@joelmendza173/ruby-date-time-for-dummies-9f45518bab64)
- [Resetting your database indexes by Sylwia Vargas]()
