import OpenAI from "openai";
import {APIKEY} from "./apikey"

const TESTIO_ASSISTANT_ID="asst_eXxqYIpaAYLWZeT2qjlOUfaa"

// Access the environment variables
const apiKey = APIKEY
if (!apiKey) {
  console.error("One or more required environment variables are not defined in .env.");
  process.exit(1);
}
console.log("APIKEY")
console.log("APIKEY=", apiKey)

const openai = new OpenAI({
  organization: 'org-DWgMa1X4aYCNDaSVn9zEGDFz',
});
console.log(openai)
export async function logAssistant() {
    const myAssistant = await openai.beta.assistants.retrieve(TESTIO_ASSISTANT_ID)
    console.log(myAssistant)
}
