const fortuneCookies = [
  "Conquer your fears or the will not be nnice",
  "Rivers need Springs",
  "Do not fear what you do not know, unless what you do not know is fear",
  "You will have a surprise, maybe even a pleasant one",
  "Keep it simple",
];

exports.getFortune = () => {
  const idx = Math.floor(Math.random() * fortuneCookies.length);
  return fortuneCookies[idx];
};
