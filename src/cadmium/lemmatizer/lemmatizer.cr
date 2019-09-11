require "json"

module Cadmium
  struct LemmaData
    property language : String # Make it a Symbol
    property lookup : Hash(String, String)?
    property rules : Hash(String, Array(Array(String)))?
    property index : Hash(String, Array(String))?
    property exceptions : Hash(String, Hash(String, Array(String)))?

    def initialize(language = "en", data_path = "#{__DIR__}/data/")
      @language = language
      @lookup = Hash(String, String).from_json(File.read(data_path + language + "/lemma_lookup.json")) if File.file?(data_path + language + "/lemma_lookup.json")
      @rules = Hash(String, Array(Array(String))).from_json(File.read(data_path + language + "/lemma_rules.json")) if File.file?(data_path + language + "/lemma_rules.json")
      @index = Hash(String, Array(String)).from_json(File.read(data_path + language + "/lemma_index.json")) if File.file?(data_path + language + "/lemma_index.json")
      @exceptions = Hash(String, Hash(String, Array(String))).from_json(File.read(data_path + language + "/lemma_exc.json")) if File.file?(data_path + language + "/lemma_exceptions.json")
    end
  end

  # Cadmium::Lemmatizer returns an Array of possible lemmas strings according to provided LemmaData at its initialization.
  class Lemmatizer
    @data : LemmaData

    # By default english LemmaData is provided.You can find data for several languages in the cadmiumcr/languages repo.
    def initialize(data = LemmaData.new)
      @data = data
    end

    # Returns an Array of possible lemmas strings
    def lemmatize(token : String | Token, index = @data.index, lookup = @data.lookup, exceptions = @data.exceptions, rules = @data.rules)
      if token.is_a?(String) || rules.nil?
        return [token] if lookup.nil?
        return [lookup.fetch(token.capitalize, token).downcase] # Tokens are capitalized in lookup file.
      end
      if token.is_a?(Token)
        raw_string = token.verbatim.downcase.not_nil!
        return [raw_string] if token.univ_pos.nil? || token.univ_pos == "PROPN"
        return [raw_string] if token.is_base_form?
        index = index.fetch(token.univ_pos, nil)
        rules = rules.fetch(token.univ_pos, nil)
        exceptions = exceptions.fetch(token.univ_pos, nil)
      end
      forms = [] of String
      oov_forms = [] of String # Out Of Vocabulary
      rules[token.univ_pos].each do |original_modified|
        if raw_string.not_nil!.ends_with?(original_modified[0])
          form = raw_string.not_nil!.chop(original_modified[0]) + original_modified[1]
          if index.includes?(form)
            forms << form
          else
            oov_forms << form
          end
        end
        forms.insert(0, exceptions[raw_string]) unless exceptions.nil?
        forms = oov_forms if forms.empty?
        forms << raw_string if forms.empty?
      end
      forms.flatten.compact
    end
  end
end
