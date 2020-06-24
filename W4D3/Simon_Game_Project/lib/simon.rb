class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @seq = []
    @game_over = false
  end

  def play
    take_turn until game_over
    
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence

    unless game_over
      round_success_message
      self.sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
  end

  def require_sequence

    i = 0
    while i < self.sequence_length
      puts "Here is the current sequence: #{self.seq}"
      sleep(2)
      puts "Please guess the sequence."
      print "> "
      input = gets.chomp

      if input != self.seq
        self.game_over = true
      end

      i += 1
    end

  end

  def add_random_color
    random_color = COLORS.sample
    seq << random_color
  end

  def round_success_message
    puts "Correct guess."
  end

  def game_over_message
    puts "You have lost."
  end

  def reset_game
    self.sequence_length = 1
    self.game_over = false
    self.seq = []
  end
end
