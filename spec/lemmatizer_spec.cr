require "./spec_helper"

describe Cadmium::Lemmatizer do
  subject = Cadmium::Lemmatizer.new

  it "should return word from english lookup table" do
    subject.lemmatize("irishwomen").should eq(["irishwoman"])
  end

  it "should return token if no corresponding lemma is found" do
    subject.lemmatize("unknownword").should eq(["unknownword"])
  end
end
