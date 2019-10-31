require "json"
require "cadmium_pos_tagger"

module Cadmium
  struct LemmaData
    property language : Symbol
    property lookup : Hash(String, String)?
    property rules : Hash(String, Array(Array(String)))?
    property index : Hash(String, Array(String))?
    property exceptions : Hash(String, Hash(String, Array(String)))?

    def initialize(language = :en, data_path = "#{__DIR__}/data/")
      @language = language
      @lookup = Hash(String, String).from_json(File.read(data_path + @language.to_s + "/lemma_lookup.json")) if File.file?(data_path + @language.to_s + "/lemma_lookup.json")
      @rules = Hash(String, Array(Array(String))).from_json(File.read(data_path + @language.to_s + "/lemma_rules.json")) if File.file?(data_path + @language.to_s + "/lemma_rules.json")
      @index = Hash(String, Array(String)).from_json(File.read(data_path + @language.to_s + "/lemma_index.json")) if File.file?(data_path + @language.to_s + "/lemma_index.json")
      @exceptions = Hash(String, Hash(String, Array(String))).from_json(File.read(data_path + @language.to_s + "/lemma_exc.json")) if File.file?(data_path + @language.to_s + "/lemma_exceptions.json")
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
    # ameba:disable Metrics/CyclomaticComplexity
    def lemmatize(token : Token, index = @data.index, lookup = @data.lookup, exceptions = @data.exceptions, rules = @data.rules)
      if (rules.nil? || token.univ_pos.nil? || token.univ_pos == :PROPN || token.is_base_form? || index.nil?)
        return [token.verbatim] if lookup.nil?
        return [lookup.fetch(token.verbatim, token.verbatim)]
      end
        raw_string = token.verbatim.downcase
        raw_string = "" if raw_string.nil?
        index = index.not_nil!.fetch(token.univ_pos.not_nil!, nil)
        rules = rules.not_nil!.fetch(token.univ_pos.not_nil!, nil)
        return [raw_string] if rules.nil? || index.nil?
        #exceptions = exceptions.not_nil!.fetch(token.univ_pos, nil)
      forms = [] of String
      oov_forms = [] of String # Out Of Vocabulary
      rules.not_nil!.each do |original_modified|
        if raw_string.not_nil!.ends_with?(original_modified[0])
          form = raw_string.not_nil!.rchop(original_modified[0]).to_s + original_modified[1].to_s
          if index.not_nil!.includes?(form)
            forms << form
          else
            oov_forms << form
          end
        end
        #forms.insert(0, exceptions[raw_string]) unless exceptions.nil?
        forms = oov_forms if forms.empty?
        forms << raw_string.not_nil! if forms.empty?
      end
      forms.flatten.compact
    end
  end
end
