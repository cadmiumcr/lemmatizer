module Cadmium
  class Lemmatizer
    @lookup_table : NamedTuple(String) = english_json_file
    @rules : NamedTuple(Array(Array(String))) = english_rules_file
    @index : NamedTuple(Array(String)) = english_index_file
    @exclusions : NamedTuple(Array(String)) = english_exclusions_file

    #   def self.get_lemmas

    #   lemmas = lemmatize(
    #         string,
    #         self.index.get(univ_pos, {}),
    #         self.exc.get(univ_pos, {}),
    #         self.rules.get(univ_pos, []),
    #     )
    #     return lemmas
    # end

    def self.lemmatize(token : String | Token, index = @index, lookup = @lookup_table, exceptions = @exceptions, rules = @rules) : Array(String)
      return [lookup[token]] if token.is_a?(String) || @rules.nil?
      return [token.verbatim] if token.univ_pos.nil? || token.univ_pos == "PROPN"
      return [token.verbatim] if token.is_base_form?
      token = token.verbatim.downcase
      forms = [] of String
      oov_forms = [] of String           # Out Of Vocabulary
      rules.each do |original, modified| # Change rules to Hash(original => modified)
        if token.ends_with?(original)
          form = token.chop(original) + modified
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
    end
  end
end
