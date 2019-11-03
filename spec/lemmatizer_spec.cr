require "./spec_helper"

describe Cadmium::Lemmatizer do
  subject = Cadmium::Lemmatizer.new

  token_1 = Cadmium::Token.new("Irishwomen")
  token_2 = Cadmium::Token.new("unknownword")

  it "should return word from english lookup table" do
    subject.lemmatize(token_1).should eq(["Irishwoman"])
  end

  it "should return token if no corresponding lemma is found" do
    subject.lemmatize(token_2).should eq(["unknownword"])
  end
end
