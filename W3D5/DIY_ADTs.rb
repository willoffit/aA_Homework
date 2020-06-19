class Stack

  def initialize
    @stack = []
  end

  def push(el)
    @stack << el
  end

  def pop
    @stack.pop
  end

  def peek
    @stack.last
  end

end

class Queue

  def initialize
    @queue = []
  end

  def enqueue(el)
    @stack << el
  end

  def dequeue
    @stack.shift
  end

  def peek
    @stack.first
  end

end

class Map

  def initialize
    @map = []
  end

  def set(key, value)
    unless @map.flatten.include?(key)
      @map << [key, value]
    else
      key_idx = @map.flatten.index(key) / 2
      @map[key_idx][0], @map[key_idx][1] = key, value
    end
  end

  def get(key)
    key_idx = @map.flatten.index(key) / 2
    @map[key_idx]
  end

  def delete(key)
    key_idx = @map.flatten.index(key) / 2
    @map.delete_at(key_idx)
  end

  def show
    @map
  end

end
