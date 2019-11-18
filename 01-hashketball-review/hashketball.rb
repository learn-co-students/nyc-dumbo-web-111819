require 'pry'

def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        {
          name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        },
        {
          name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        },
        {
          name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        },
        {
          name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        },
        {
          name:  "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      ]
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        {
          name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        },
        {
          name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        },
        {
          name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        },
        {
          name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        },
        {
          name: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        }
      ]
    }
  }
end

def all_players
  game_hash[:home][:players] + game_hash[:away][:players]
end

def find_player_by_name(player_name)
  all_players.find do |player_hash|
    player_hash[:name] == player_name
  end
end

def num_points_scored(player_name)
  # identify home team and away team
  # all_players_array = game_hash[:home][:players] + game_hash[:away][:players]
  # iterate through the list of players
  # use the player name
  # find the player with the matching name
  # found_player = find_player_by_name(player_name)

  # return the points
  find_player_by_name(player_name)[:points]
end

def shoe_size(player_name)
  find_player_by_name(player_name)[:shoe]
end


# # EXERCISE:
instructors = [
  {name: 'Ian', hometown: 'upstate ny', energy_level: 8},
  {name: 'Sylwia', hometown: 'Zielona Gora', energy_level: 10000},
  {name: 'Mazen', hometown: 'Bahrain', energy_level: 1}
]
#
# # Define a method called get_names that takes an array of instructors
# # and returns just their names.
def get_names(instructors)

end

# # Define a method called excited_instructors that takes an array of instructors
# # and returns all the instructors with an energy level higher than 5
def excited_instructors(instructors)

end

# # Define a method called get_instructor_by_hometown that takes an array of instructors AND a string of a hometown
# # and returns just the one instructor whose hometown matches
def get_instructor_by_hometown(instructors, hometown)

end