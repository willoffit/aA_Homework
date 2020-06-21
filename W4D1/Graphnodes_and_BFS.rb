require "Set"

class GraphNode

  attr_accessor :neighbors, :value

  def initialize(value)
    @value = value
    @neighbors = []
  end
end

a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.neighbors = [b, c, e]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]

def bfs(starting_node, target_value)
  queue = [starting_node]
  visited = Set.new

  until queue.empty?
    queue.last.neighbors.each do |node|
      queue.unshift(node) unless visited.include?(node)
    end

    test_node = queue.pop
    if test_node.value == target_value
      visited.add(test_node)
      return test_node
    else
      visited.add(test_node)
    end
  end

  return nil
end

p bfs(a, "f")
