require "json"

module Cadmium
  module LemmatizerData
    DATA_DIR = "#{__DIR__}/data/"

    @@lemmatizer_lookup : Hash(String, String) = Hash(String, String).from_json({{ read_file("#{DATA_DIR.id}en/lemmatizer/lemma_lookup.json") }})
    @@lemmatizer_index : Hash(String, Array(String)) = Hash(String, Array(String)).from_json({{ read_file("#{DATA_DIR.id}en/lemmatizer/lemma_index.json") }})
    @@lemmatizer_rules : Hash(String, Array(Array(String))) = Hash(String, Array(Array(String))).from_json({{ read_file("#{DATA_DIR.id}en/lemmatizer/lemma_rules.json") }})                  # Will become NameTuple when Crystal 0.31 is out
    @@lemmatizer_exceptions : Hash(String, Hash(String, Array(String))) = Hash(String, Hash(String, Array(String))).from_json({{ read_file("#{DATA_DIR.id}en/lemmatizer/lemma_exc.json") }}) # Will become NameTuple when Crystal 0.31 is out

    macro lemmatizer_data(*languages)
        {% for language, index in languages %}
            def self.lemmatizer_data_{{language}} : Array(String)
                {{ read_file("#{DATA_DIR.id}#{language}.txt") }}
            end
        {% end %}
    end
  end

  class Lemmatizer
    include Cadmium::LemmatizerData
    @lookup_table : Hash(String, String) = @@lemmatizer_lookup
    @rules : Hash(String, Array(Array(String))) = @@lemmatizer_rules
    @index : Hash(String, Array(String)) = @@lemmatizer_index
    @exceptions : Hash(String, Hash(String, Array(String))) = @@lemmatizer_exceptions

    #   def self.get_lemmas

    #   lemmas = lemmatize(
    #         string,
    #         self.index.get(univ_pos, {}),
    #         self.exc.get(univ_pos, {}),
    #         self.rules.get(univ_pos, []),
    #     )
    #     return lemmas
    # end

    def lemmatize(token : String | Token, index = @index, lookup = @lookup_table, exceptions = @exceptions, rules = @rules) # : Array(String)
      return [lookup[token.capitalize]] if token.is_a?(String) || @rules.nil?

      raw_string = token.verbatim.downcase.not_nil! if token.is_a?(Token)
      return [raw_string] if token.univ_pos.nil? || token.univ_pos == "PROPN"
      return [raw_string] if token.is_base_form?
      forms = [] of String
      oov_forms = [] of String           # Out Of Vocabulary
      rules.each do |original, modified| # Change rules to Hash(original => modified)
        if raw_string.not_nil!.ends_with?(original)
          form = raw_string.not_nil!.chop(original) + modified
          if index.includes?(form)
            forms << form
          else
            oov_forms << form
          end
        end
        forms.compact!

        # for form in exceptions.get(string, []):
        #     if form not in forms:
        #         forms.insert(0, form)
        # if not forms:
        #     forms.extend(oov_forms)
        # if not forms:
        #     forms.append(orig)
        # return forms

      end
      forms
    end
  end
end
