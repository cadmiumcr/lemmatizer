crystal_doc_search_index_callback({"repository_name":"github.com/rmarronnier/lemmatizer","body":"# Cadmium::Lemmatizer\n\n![](https://github.com/cadmiumcr/lemmatizer/workflows/lemmatizer/badge.svg)\n\nWIP. For now, until Cadmium::POS_Tagger is ready, this lemmatizer returns an array of possible lemmas for a string input.\nEnglish data is included, but other languages are available at cadmiumcr/languages.\n\n## Installation\n\n1. Add the dependency to your `shard.yml`:\n\n   ```yaml\n   dependencies:\n     cadmium_lemmatizer:\n       github: cadmiumcr/lemmatizer\n   ```\n\n2. Run `shards install`\n\n## Usage\n\n```crystal\nrequire \"cadmium_lemmatizer\"\n\nCadmium::Lemmatizer.new.lemmatize(\"zoomed\") # => [\"zoom\"]\n\n```\n\n## Contributing\n\n1. Fork it (<https://github.com/cadmiumcr/lemmatizer/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## Contributors\n\n- [Rémy Marronnier](https://github.com/rmarronnier) - creator and maintainer\n","program":{"html_id":"github.com/rmarronnier/lemmatizer/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"github.com/rmarronnier/lemmatizer","program":true,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"github.com/rmarronnier/lemmatizer/Cadmium","path":"Cadmium.html","kind":"module","full_name":"Cadmium","name":"Cadmium","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"cadmium/lemmatizer/lemmatizer.cr","line_number":3,"url":"https://github.com/rmarronnier/lemmatizer/blob/146a9fc4ee9b9e9b78242a82c0420709327f4bb2/src/cadmium/lemmatizer/lemmatizer.cr"},{"filename":"cadmium/lemmatizer/token.cr","line_number":1,"url":"https://github.com/rmarronnier/lemmatizer/blob/146a9fc4ee9b9e9b78242a82c0420709327f4bb2/src/cadmium/lemmatizer/token.cr"}],"repository_name":"github.com/rmarronnier/lemmatizer","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"github.com/rmarronnier/lemmatizer/Cadmium/LemmaData","path":"Cadmium/LemmaData.html","kind":"struct","full_name":"Cadmium::LemmaData","name":"LemmaData","abstract":false,"superclass":{"html_id":"github.com/rmarronnier/lemmatizer/Struct","kind":"struct","full_name":"Struct","name":"Struct"},"ancestors":[{"html_id":"github.com/rmarronnier/lemmatizer/Struct","kind":"struct","full_name":"Struct","name":"Struct"},{"html_id":"github.com/rmarronnier/lemmatizer/Value","kind":"struct","full_name":"Value","name":"Value"},{"html_id":"github.com/rmarronnier/lemmatizer/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"cadmium/lemmatizer/lemmatizer.cr","line_number":4,"url":"https://github.com/rmarronnier/lemmatizer/blob/146a9fc4ee9b9e9b78242a82c0420709327f4bb2/src/cadmium/lemmatizer/lemmatizer.cr"}],"repository_name":"github.com/rmarronnier/lemmatizer","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/rmarronnier/lemmatizer/Cadmium","kind":"module","full_name":"Cadmium","name":"Cadmium"},"doc":null,"summary":null,"class_methods":[],"constructors":[{"id":"new(language=&quot;en&quot;,data_path=&quot;/home/remy/dev/cadmiumcr/lemmatizer/src/cadmium/lemmatizer/data/&quot;)-class-method","html_id":"new(language=&amp;quot;en&amp;quot;,data_path=&amp;quot;/home/remy/dev/cadmiumcr/lemmatizer/src/cadmium/lemmatizer/data/&amp;quot;)-class-method","name":"new","doc":null,"summary":null,"abstract":false,"args":[{"name":"language","doc":null,"default_value":"\"en\"","external_name":"language","restriction":""},{"name":"data_path","doc":null,"default_value":"\"/home/remy/dev/cadmiumcr/lemmatizer/src/cadmium/lemmatizer/data/\"","external_name":"data_path","restriction":""}],"args_string":"(language = <span class=\"s\">&quot;en&quot;</span>, data_path = <span class=\"s\">&quot;/home/remy/dev/cadmiumcr/lemmatizer/src/cadmium/lemmatizer/data/&quot;</span>)","source_link":"https://github.com/rmarronnier/lemmatizer/blob/146a9fc4ee9b9e9b78242a82c0420709327f4bb2/src/cadmium/lemmatizer/lemmatizer.cr#L11","def":{"name":"new","args":[{"name":"language","doc":null,"default_value":"\"en\"","external_name":"language","restriction":""},{"name":"data_path","doc":null,"default_value":"\"/home/remy/dev/cadmiumcr/lemmatizer/src/cadmium/lemmatizer/data/\"","external_name":"data_path","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"_ = allocate\n_.initialize(language, data_path)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"id":"exceptions:Hash(String,Hash(String,Array(String)))?-instance-method","html_id":"exceptions:Hash(String,Hash(String,Array(String)))?-instance-method","name":"exceptions","doc":null,"summary":null,"abstract":false,"args":[],"args_string":" : Hash(String, Hash(String, Array(String)))?","source_link":"https://github.com/rmarronnier/lemmatizer/blob/146a9fc4ee9b9e9b78242a82c0420709327f4bb2/src/cadmium/lemmatizer/lemmatizer.cr#L11","def":{"name":"exceptions","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Hash(String, Hash(String, Array(String))) | ::Nil","visibility":"Public","body":"@exceptions"}},{"id":"exceptions=(exceptions:Hash(String,Hash(String,Array(String)))?)-instance-method","html_id":"exceptions=(exceptions:Hash(String,Hash(String,Array(String)))?)-instance-method","name":"exceptions=","doc":null,"summary":null,"abstract":false,"args":[{"name":"exceptions","doc":null,"default_value":"","external_name":"exceptions","restriction":"Hash(String, Hash(String, Array(String))) | ::Nil"}],"args_string":"(exceptions : Hash(String, Hash(String, Array(String)))?)","source_link":"https://github.com/rmarronnier/lemmatizer/blob/146a9fc4ee9b9e9b78242a82c0420709327f4bb2/src/cadmium/lemmatizer/lemmatizer.cr#L15","def":{"name":"exceptions=","args":[{"name":"exceptions","doc":null,"default_value":"","external_name":"exceptions","restriction":"Hash(String, Hash(String, Array(String))) | ::Nil"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@exceptions = exceptions"}},{"id":"index:Hash(String,Array(String))?-instance-method","html_id":"index:Hash(String,Array(String))?-instance-method","name":"index","doc":null,"summary":null,"abstract":false,"args":[],"args_string":" : Hash(String, Array(String))?","source_link":"https://github.com/rmarronnier/lemmatizer/blob/146a9fc4ee9b9e9b78242a82c0420709327f4bb2/src/cadmium/lemmatizer/lemmatizer.cr#L10","def":{"name":"index","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Hash(String, Array(String)) | ::Nil","visibility":"Public","body":"@index"}},{"id":"index=(index:Hash(String,Array(String))?)-instance-method","html_id":"index=(index:Hash(String,Array(String))?)-instance-method","name":"index=","doc":null,"summary":null,"abstract":false,"args":[{"name":"index","doc":null,"default_value":"","external_name":"index","restriction":"Hash(String, Array(String)) | ::Nil"}],"args_string":"(index : Hash(String, Array(String))?)","source_link":"https://github.com/rmarronnier/lemmatizer/blob/146a9fc4ee9b9e9b78242a82c0420709327f4bb2/src/cadmium/lemmatizer/lemmatizer.cr#L14","def":{"name":"index=","args":[{"name":"index","doc":null,"default_value":"","external_name":"index","restriction":"Hash(String, Array(String)) | ::Nil"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@index = index"}},{"id":"language:String-instance-method","html_id":"language:String-instance-method","name":"language","doc":null,"summary":null,"abstract":false,"args":[],"args_string":" : String","source_link":"https://github.com/rmarronnier/lemmatizer/blob/146a9fc4ee9b9e9b78242a82c0420709327f4bb2/src/cadmium/lemmatizer/lemmatizer.cr#L7","def":{"name":"language","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"String","visibility":"Public","body":"@language"}},{"id":"language=(language:String)-instance-method","html_id":"language=(language:String)-instance-method","name":"language=","doc":null,"summary":null,"abstract":false,"args":[{"name":"language","doc":null,"default_value":"","external_name":"language","restriction":"String"}],"args_string":"(language : String)","source_link":"https://github.com/rmarronnier/lemmatizer/blob/146a9fc4ee9b9e9b78242a82c0420709327f4bb2/src/cadmium/lemmatizer/lemmatizer.cr#L11","def":{"name":"language=","args":[{"name":"language","doc":null,"default_value":"","external_name":"language","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@language = language"}},{"id":"lookup:Hash(String,String)?-instance-method","html_id":"lookup:Hash(String,String)?-instance-method","name":"lookup","doc":"Make it a Symbol","summary":"<p>Make it a Symbol</p>","abstract":false,"args":[],"args_string":" : Hash(String, String)?","source_link":"https://github.com/rmarronnier/lemmatizer/blob/146a9fc4ee9b9e9b78242a82c0420709327f4bb2/src/cadmium/lemmatizer/lemmatizer.cr#L8","def":{"name":"lookup","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Hash(String, String) | ::Nil","visibility":"Public","body":"@lookup"}},{"id":"lookup=(lookup:Hash(String,String)?)-instance-method","html_id":"lookup=(lookup:Hash(String,String)?)-instance-method","name":"lookup=","doc":"Make it a Symbol","summary":"<p>Make it a Symbol</p>","abstract":false,"args":[{"name":"lookup","doc":null,"default_value":"","external_name":"lookup","restriction":"Hash(String, String) | ::Nil"}],"args_string":"(lookup : Hash(String, String)?)","source_link":"https://github.com/rmarronnier/lemmatizer/blob/146a9fc4ee9b9e9b78242a82c0420709327f4bb2/src/cadmium/lemmatizer/lemmatizer.cr#L12","def":{"name":"lookup=","args":[{"name":"lookup","doc":null,"default_value":"","external_name":"lookup","restriction":"Hash(String, String) | ::Nil"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@lookup = lookup"}},{"id":"rules:Hash(String,Array(Array(String)))?-instance-method","html_id":"rules:Hash(String,Array(Array(String)))?-instance-method","name":"rules","doc":null,"summary":null,"abstract":false,"args":[],"args_string":" : Hash(String, Array(Array(String)))?","source_link":"https://github.com/rmarronnier/lemmatizer/blob/146a9fc4ee9b9e9b78242a82c0420709327f4bb2/src/cadmium/lemmatizer/lemmatizer.cr#L9","def":{"name":"rules","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Hash(String, Array(Array(String))) | ::Nil","visibility":"Public","body":"@rules"}},{"id":"rules=(rules:Hash(String,Array(Array(String)))?)-instance-method","html_id":"rules=(rules:Hash(String,Array(Array(String)))?)-instance-method","name":"rules=","doc":null,"summary":null,"abstract":false,"args":[{"name":"rules","doc":null,"default_value":"","external_name":"rules","restriction":"Hash(String, Array(Array(String))) | ::Nil"}],"args_string":"(rules : Hash(String, Array(Array(String)))?)","source_link":"https://github.com/rmarronnier/lemmatizer/blob/146a9fc4ee9b9e9b78242a82c0420709327f4bb2/src/cadmium/lemmatizer/lemmatizer.cr#L13","def":{"name":"rules=","args":[{"name":"rules","doc":null,"default_value":"","external_name":"rules","restriction":"Hash(String, Array(Array(String))) | ::Nil"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@rules = rules"}}],"macros":[],"types":[]},{"html_id":"github.com/rmarronnier/lemmatizer/Cadmium/Lemmatizer","path":"Cadmium/Lemmatizer.html","kind":"class","full_name":"Cadmium::Lemmatizer","name":"Lemmatizer","abstract":false,"superclass":{"html_id":"github.com/rmarronnier/lemmatizer/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"github.com/rmarronnier/lemmatizer/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"github.com/rmarronnier/lemmatizer/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"cadmium/lemmatizer/lemmatizer.cr","line_number":21,"url":"https://github.com/rmarronnier/lemmatizer/blob/146a9fc4ee9b9e9b78242a82c0420709327f4bb2/src/cadmium/lemmatizer/lemmatizer.cr"}],"repository_name":"github.com/rmarronnier/lemmatizer","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/rmarronnier/lemmatizer/Cadmium","kind":"module","full_name":"Cadmium","name":"Cadmium"},"doc":"Cadmium::Lemmatizer returns an Array of possible lemmas strings according to provided LemmaData at its initialization.","summary":"<p>Cadmium::Lemmatizer returns an Array of possible lemmas strings according to provided LemmaData at its initialization.</p>","class_methods":[],"constructors":[{"id":"new(data=LemmaData.new)-class-method","html_id":"new(data=LemmaData.new)-class-method","name":"new","doc":"By default english LemmaData is provided.You can find data for several languages in the cadmiumcr/languages repo.","summary":"<p>By default english LemmaData is provided.You can find data for several languages in the cadmiumcr/languages repo.</p>","abstract":false,"args":[{"name":"data","doc":null,"default_value":"LemmaData.new","external_name":"data","restriction":""}],"args_string":"(data = <span class=\"t\">LemmaData</span>.<span class=\"k\">new</span>)","source_link":"https://github.com/rmarronnier/lemmatizer/blob/146a9fc4ee9b9e9b78242a82c0420709327f4bb2/src/cadmium/lemmatizer/lemmatizer.cr#L25","def":{"name":"new","args":[{"name":"data","doc":null,"default_value":"LemmaData.new","external_name":"data","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"_ = allocate\n_.initialize(data)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"id":"lemmatize(token:String|Token,index=@data.index,lookup=@data.lookup,exceptions=@data.exceptions,rules=@data.rules)-instance-method","html_id":"lemmatize(token:String|Token,index=@data.index,lookup=@data.lookup,exceptions=@data.exceptions,rules=@data.rules)-instance-method","name":"lemmatize","doc":"Returns an Array of possible lemmas strings","summary":"<p>Returns an Array of possible lemmas strings</p>","abstract":false,"args":[{"name":"token","doc":null,"default_value":"","external_name":"token","restriction":"String | Token"},{"name":"index","doc":null,"default_value":"@data.index","external_name":"index","restriction":""},{"name":"lookup","doc":null,"default_value":"@data.lookup","external_name":"lookup","restriction":""},{"name":"exceptions","doc":null,"default_value":"@data.exceptions","external_name":"exceptions","restriction":""},{"name":"rules","doc":null,"default_value":"@data.rules","external_name":"rules","restriction":""}],"args_string":"(token : String | Token, index = @data.index, lookup = @data.lookup, exceptions = @data.exceptions, rules = @data.rules)","source_link":"https://github.com/rmarronnier/lemmatizer/blob/146a9fc4ee9b9e9b78242a82c0420709327f4bb2/src/cadmium/lemmatizer/lemmatizer.cr#L30","def":{"name":"lemmatize","args":[{"name":"token","doc":null,"default_value":"","external_name":"token","restriction":"String | Token"},{"name":"index","doc":null,"default_value":"@data.index","external_name":"index","restriction":""},{"name":"lookup","doc":null,"default_value":"@data.lookup","external_name":"lookup","restriction":""},{"name":"exceptions","doc":null,"default_value":"@data.exceptions","external_name":"exceptions","restriction":""},{"name":"rules","doc":null,"default_value":"@data.rules","external_name":"rules","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if token.is_a?(String) || rules.nil?\n  if lookup.nil?\n    return [token]\n  end\n  return [(lookup.fetch(token.capitalize, token)).downcase]\nend\nif token.is_a?(Token)\n  raw_string = token.verbatim.downcase.not_nil!\n  if token.univ_pos.nil? || (token.univ_pos == \"PROPN\")\n    return [raw_string]\n  end\n  if token.is_base_form?\n    return [raw_string]\n  end\n  index = index.fetch(token.univ_pos, nil)\n  rules = rules.fetch(token.univ_pos, nil)\n  exceptions = exceptions.fetch(token.univ_pos, nil)\nend\nforms = [] of String\noov_forms = [] of String\nrules[token.univ_pos].each do |original_modified|\n  if raw_string.not_nil!.ends_with?(original_modified[0])\n    form = (raw_string.not_nil!.chop(original_modified[0])) + original_modified[1]\n    if index.includes?(form)\n      forms << form\n    else\n      oov_forms << form\n    end\n  end\n  if exceptions.nil?\n  else\n    forms.insert(0, exceptions[raw_string])\n  end\n  if forms.empty?\n    forms = oov_forms\n  end\n  if forms.empty?\n    forms << raw_string\n  end\nend\nforms.flatten.compact\n"}}],"macros":[],"types":[]},{"html_id":"github.com/rmarronnier/lemmatizer/Cadmium/Token","path":"Cadmium/Token.html","kind":"struct","full_name":"Cadmium::Token","name":"Token","abstract":false,"superclass":{"html_id":"github.com/rmarronnier/lemmatizer/Struct","kind":"struct","full_name":"Struct","name":"Struct"},"ancestors":[{"html_id":"github.com/rmarronnier/lemmatizer/Struct","kind":"struct","full_name":"Struct","name":"Struct"},{"html_id":"github.com/rmarronnier/lemmatizer/Value","kind":"struct","full_name":"Value","name":"Value"},{"html_id":"github.com/rmarronnier/lemmatizer/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"cadmium/lemmatizer/token.cr","line_number":2,"url":"https://github.com/rmarronnier/lemmatizer/blob/146a9fc4ee9b9e9b78242a82c0420709327f4bb2/src/cadmium/lemmatizer/token.cr"}],"repository_name":"github.com/rmarronnier/lemmatizer","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/rmarronnier/lemmatizer/Cadmium","kind":"module","full_name":"Cadmium","name":"Cadmium"},"doc":null,"summary":null,"class_methods":[{"id":"is_base_form?:Bool-class-method","html_id":"is_base_form?:Bool-class-method","name":"is_base_form?","doc":null,"summary":null,"abstract":false,"args":[],"args_string":" : Bool","source_link":"https://github.com/rmarronnier/lemmatizer/blob/146a9fc4ee9b9e9b78242a82c0420709327f4bb2/src/cadmium/lemmatizer/token.cr#L7","def":{"name":"is_base_form?","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Bool","visibility":"Public","body":"if self.morphology.nil?\n  return false\nend\nothers = self.morphology.keys.map do |key|\n  !([\"Number\", \"POS\", \"VerbForm\", \"Tense\"].includes?(key))\nend\nif (self.univ_pos == \"noun\") && (self.morphology[\"number\"] == \"sing\")\n  return true\nend\nif (self.univ_pos == \"verb\") && (self.morphology[\"verbform\"] == \"inf\")\n  return true\nend\nif (self.univ_pos == \"verb\") && ((((self.morphology[\"verbform\"] == \"fin\") && (self.morphology[\"tense\"] == \"pres\")) && self.morphology[\"number\"].nil?) && others.empty?)\n  return true\nend\nif (self.univ_pos == \"adj\") && (self.morphology[\"degree\"] == \"pos\")\n  return true\nend\nif self.morphology.values.includes?([\"VerbForm_inf\", \"VerbForm_none\", \"Number_sing\", \"Degree_pos\"])\n  return true\nend\nfalse\n"}}],"constructors":[{"id":"new-class-method","html_id":"new-class-method","name":"new","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","source_link":"https://github.com/rmarronnier/lemmatizer/blob/146a9fc4ee9b9e9b78242a82c0420709327f4bb2/src/cadmium/lemmatizer/token.cr#L2","def":{"name":"new","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"x = allocate\nif x.responds_to?(:finalize)\n  ::GC.add_finalizer(x)\nend\nx\n"}}],"instance_methods":[{"id":"morphology:Hash(String,String)-instance-method","html_id":"morphology:Hash(String,String)-instance-method","name":"morphology","doc":null,"summary":null,"abstract":false,"args":[],"args_string":" : Hash(String, String)","source_link":"https://github.com/rmarronnier/lemmatizer/blob/146a9fc4ee9b9e9b78242a82c0420709327f4bb2/src/cadmium/lemmatizer/token.cr#L7","def":{"name":"morphology","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Hash(String, String)","visibility":"Public","body":"@morphology"}},{"id":"morphology=(morphology:Hash(String,String))-instance-method","html_id":"morphology=(morphology:Hash(String,String))-instance-method","name":"morphology=","doc":null,"summary":null,"abstract":false,"args":[{"name":"morphology","doc":null,"default_value":"","external_name":"morphology","restriction":"Hash(String, String)"}],"args_string":"(morphology : Hash(String, String))","source_link":"https://github.com/rmarronnier/lemmatizer/blob/146a9fc4ee9b9e9b78242a82c0420709327f4bb2/src/cadmium/lemmatizer/token.cr#L11","def":{"name":"morphology=","args":[{"name":"morphology","doc":null,"default_value":"","external_name":"morphology","restriction":"Hash(String, String)"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@morphology = morphology"}},{"id":"univ_pos:String-instance-method","html_id":"univ_pos:String-instance-method","name":"univ_pos","doc":null,"summary":null,"abstract":false,"args":[],"args_string":" : String","source_link":"https://github.com/rmarronnier/lemmatizer/blob/146a9fc4ee9b9e9b78242a82c0420709327f4bb2/src/cadmium/lemmatizer/token.cr#L6","def":{"name":"univ_pos","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"String","visibility":"Public","body":"@univ_pos"}},{"id":"univ_pos=(univ_pos:String)-instance-method","html_id":"univ_pos=(univ_pos:String)-instance-method","name":"univ_pos=","doc":null,"summary":null,"abstract":false,"args":[{"name":"univ_pos","doc":null,"default_value":"","external_name":"univ_pos","restriction":"String"}],"args_string":"(univ_pos : String)","source_link":"https://github.com/rmarronnier/lemmatizer/blob/146a9fc4ee9b9e9b78242a82c0420709327f4bb2/src/cadmium/lemmatizer/token.cr#L10","def":{"name":"univ_pos=","args":[{"name":"univ_pos","doc":null,"default_value":"","external_name":"univ_pos","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@univ_pos = univ_pos"}},{"id":"verbatim:String-instance-method","html_id":"verbatim:String-instance-method","name":"verbatim","doc":null,"summary":null,"abstract":false,"args":[],"args_string":" : String","source_link":"https://github.com/rmarronnier/lemmatizer/blob/146a9fc4ee9b9e9b78242a82c0420709327f4bb2/src/cadmium/lemmatizer/token.cr#L5","def":{"name":"verbatim","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"String","visibility":"Public","body":"@verbatim"}},{"id":"verbatim=(verbatim:String)-instance-method","html_id":"verbatim=(verbatim:String)-instance-method","name":"verbatim=","doc":null,"summary":null,"abstract":false,"args":[{"name":"verbatim","doc":null,"default_value":"","external_name":"verbatim","restriction":"String"}],"args_string":"(verbatim : String)","source_link":"https://github.com/rmarronnier/lemmatizer/blob/146a9fc4ee9b9e9b78242a82c0420709327f4bb2/src/cadmium/lemmatizer/token.cr#L9","def":{"name":"verbatim=","args":[{"name":"verbatim","doc":null,"default_value":"","external_name":"verbatim","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@verbatim = verbatim"}}],"macros":[],"types":[]}]}]}})