# Cadmium::Lemmatizer

WIP. For now, until Cadmium::POS_Tagger is ready, this lemmatizer returns an array of possible lemmas for a string input.
English data is included, but other languages are available at cadmiumcr/languages.

## Installation

1. Add the dependency to your `shard.yml`:

   ```yaml
   dependencies:
     cadmium_lemmatizer:
       github: cadmiumcr/lemmatizer
   ```

2. Run `shards install`

## Usage

```crystal
require "cadmium_lemmatizer"

Cadmium::Lemmatizer.new.lemmatize("zoomed") # => ["zoom"]

```

## Contributing

1. Fork it (<https://github.com/cadmiumcr/lemmatizer/fork>)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Contributors

- [Rémy Marronnier](https://github.com/rmarronnier) - creator and maintainer
