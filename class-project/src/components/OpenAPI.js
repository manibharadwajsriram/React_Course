import {GoogleGenerativeAI} from '@google/generative-ai';

const Gemini_API_KEY = process.env.AIzaSyA_UGdrZTMZg4x22Xgsp0lMCiUpd7AmAAM;
const geminiGenAI = new GoogleGenerativeAI(Gemini_API_KEY);

const model = geminiGenAI.getGenerativeModel({model: "gemini-1.5-flash"})

const getGeminiAISummary = async(productName)=> {
   const prompt = `Provide a concise, helpful, and enaging summary of the ${productName} iphone. Mention key features and who it is best for`;
   try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
   } catch(error) {
    console.error('Error', error);
    return "Something Went Wrong";
   }
}

export default getGeminiAISummary;