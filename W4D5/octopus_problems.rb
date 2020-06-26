def sluggish(fish)
  longest = ""

  (0...fish.length).each do |i|
    (0...fish.length).each do |j|
      if fish[i].length > fish[j].length && fish[i].length > longest.length
        longest = fish[i]
      end
    end
  end

  longest
end

def dominant(fish)
  return fish if fish.length < 2

  mid = fish.length / 2

  left, right = fish.take(mid), fish.drop(mid)
  left_sorted, right_sorted = dominant(left), dominant(right)

  merge(left_sorted, right_sorted)
end

def merge(left, right)
  merged = []

  until left.empty? || right.empty?
    if left.first.length >= right.first.length
      merged << right.shift
    else
      merged << left.shift
    end
  end
  
  merged + left + right
end

def clever(fish)
  longest = ""

  (0...fish.length).each do |i|
      if fish[i].length > longest.length
        longest = fish[i]
      end
  end

  longest
end

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

def constant_dance(tile, tiles)
  tiles.index(tile)
end

