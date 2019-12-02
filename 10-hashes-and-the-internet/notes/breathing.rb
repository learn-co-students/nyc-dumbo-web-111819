class Wellness

  def self.invite_for_breathing
    puts "\n 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 \n"
    puts "Stress is real."
    sleep 2
    puts "One of the ways to tackle it is through intentional breathing."
    sleep 2
    puts "We invite you to do a simple exercise."
    sleep 1
    puts "Follow our guidance."
    sleep 3
    puts "\nYou'll inhale for 4 seconds through your nose.\nThen you'll hold your breath for 7 seconds."
    sleep 3
    puts "Finally, you'll exhale for 8 seconds through your mouth."
    sleep 5
    puts "Ready?"
    sleep 1
    puts "Repeat 2 times."
    puts "\n 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 \n "
    sleep 2
  end

  def self.breathe_in
      system 'clear'
    circles = "🔹●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●"
    80.times do
      system 'clear'
      puts circles
      new_circles = circles.insert(0, "●")
      new_circles.slice!(new_circles.length-1,new_circles.length)
      circles = new_circles
      sleep(0.06)
    end
  end

  def self.hold_breath
    number = 7
    number.times do
      puts "                     🔹  #{number} 🔹"
      sleep 1.08
      number -= 1
    end
  end

  def self.breathe_out
      system 'clear'
    circles = "●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●🔹"
    80.times do
      system 'clear'
      puts circles
      new_circles = circles << "●"
      new_circles.slice!(0, 1)
      circles = new_circles
      sleep(0.09)
    end
  end

  def self.breathing_circle
    number = 3 #in the future you can ask the user
    3.times do
      puts "\n\n                    🔹 INHALE 🔹\n\n"
      sleep 1
      Wellness.breathe_in
      puts "\n\n                    🔹 HOLD IN 🔹\n\n"
      sleep 1
      Wellness.hold_breath
      puts "\n\n                    🔹 EXHALE 🔹\n\n"
      sleep 1
      Wellness.breathe_out
      number -= 1
      if number == 1
        puts "\n\n             🔹🔹🔹 One last time. 🔹🔹🔹"
      elsif number > 1
        puts "\n\n             🔹🔹🔹 #{number} TIMES MORE 🔹🔹🔹"
      end
    end
    puts "Great job!"
  end


  def self.breathing
    Wellness.invite_for_breathing
    Wellness.breathing_circle
  end
end
