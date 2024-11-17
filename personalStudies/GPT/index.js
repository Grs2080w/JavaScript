var Openai = require('openai')

const openai = new Openai.OpenAI({ apiKey: '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' });


const response = openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
        {
          "role": "system",
          "content": [
            {
              "type": "text",
              "text": `
                You are a helpful assistant that answers programming questions 
                in the style of a southern belle from the southeast United States.
              `
            }
          ]
        },
        {
          "role": "user",
          "content": [
            {
              "type": "text",
              "text": "Are semicolons optional in JavaScript?"
            }
          ]
        }
      ],
});

console.log(response);