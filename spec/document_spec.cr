require "./spec_helper"

describe Cadmium::Document do
  subject = Cadmium::Document.new("Her co-star Emma Watson, the precocious daughter of two divorced lawyers, was nine when she was famously picked from a line-up in her school gym to audition for the role of Hermione Granger. If Watson was strange then, her life in the 20 years since has arguably been stranger still. An English graduate from Brown University. A United Nations goodwill ambassador fighting for gender equality. An activist and model who happens to have banked tens of millions of pounds in her day job as a Hollywood actress, Watson seems an earnest believer in the ability to use her fame for good. Her 2014 HeForShe campaign with the UN reportedly inspired Malala Yousafzai to identify as a feminist. Environmental activism and the launch of the online book club Our Shared Shelf followed, alongside a smattering of relatively unmemorable film roles despite her working with Sofia Coppola (2013’s The Bling Ring) and Darren Aronofsky in (2014’s Noah); Watson dropped out of Emma Stone’s Oscar-winning role in La La Land to play Belle in Beauty and the Beast.")

  it "should fill the token lemma values of a document" do
    subject.lemmatize.sentences[0].tokens[10].lemma.should eq("divorce")
  end
end
