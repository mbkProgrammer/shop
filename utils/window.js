// eslint-disable-next-line import/no-mutable-exports
let WINDOW;
if (process.browser) {
  WINDOW = window;
} else {
  WINDOW = {
    document: {
      location: {

      },
    },
    localStorage: {

    },
  };
}

export default WINDOW;
