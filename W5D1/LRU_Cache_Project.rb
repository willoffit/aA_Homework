class LRUCache
  def initialize(max_length)
    @max_length = max_length
    @cache = {}
  end

  def count
    cache.size
  end

  def add(el)
    cache.delete(el) if cache.include?(el)
    cache << el
    cache.shift if count > max_length
    return
  end

  def show
    cache
  end

  private

  attr_accessor :cache, :max_length
end

