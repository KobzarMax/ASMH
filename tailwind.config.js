/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      "megalarge": {'max': "1200px"},
      "large": {'max': "992px"},
      "medium": {'max': "768px"},
      "small": {'max': "480px"},
    },
    fontFamily: {
      amazon: "'Amazon Ember Display', sans-serif;",
    },
    extend: {
      colors: {
        text_color: '#424242',
        gray_border_color: '#acacac',
        scrollable_title: '#f9f9f9',
        keywords_title: '#f7f7f7',
        scrollable_title_border: '#d0d0d0',
        button_bg: '#d9dee4',
        add_button_bg: '#0073c7',
        add_text: '#009318',
        button_text: '#677782',
        table_bg: '#e8ffe3',
        pagination_button_color: '#4b5d6a',
        table_text: '#44505b',
        footer_text: '#44505b',
        scroll_text: '#4c5e6e',
      },
    },
  },
  plugins: [],
}
