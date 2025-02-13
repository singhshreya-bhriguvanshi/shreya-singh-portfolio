module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Locate the "oneOf" rule which contains rules for processing CSS files
      const oneOfRule = webpackConfig.module.rules.find((rule) => rule.oneOf);
      if (oneOfRule) {
        oneOfRule.oneOf.forEach((rule) => {
          // For any rule that tests for CSS files...
          if (rule.test && rule.test.toString().includes("css")) {
            // ...add an exclusion for the node_modules folder
            if (rule.exclude) {
              if (Array.isArray(rule.exclude)) {
                rule.exclude.push(/node_modules/);
              } else {
                rule.exclude = [rule.exclude, /node_modules/];
              }
            } else {
              rule.exclude = /node_modules/;
            }
          }
        });
      }
      return webpackConfig;
    },
  },
  style: {
    postcss: {
      plugins: [
        require('@tailwindcss/postcss'),
        require('autoprefixer'),
      ],
    },
  },
} 