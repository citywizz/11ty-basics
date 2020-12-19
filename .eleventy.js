
module.exports = function (eleventyConfig) {


  // copy files
  eleventyConfig.addPassthroughCopy("./src/assets/");


  // override default config
  return {
    dir: {
      input: "src",
      output: "dist",
      // path is relative to the input directory
      // "_includes" is the default value
      includes: "_includes"
    }
  };
};