import { sendRecommendation } from "../actions";
import ClassicButton from "../../../components/UI/buttons/ClassicButton";

export default function RecommendForm() {
  return (
    <form
      action={sendRecommendation}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-700">Game name</label>
        <input
          name="game"
          required
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"/>
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-700">Your email</label>
        <input
          name="email"
          type="email"
          required
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"/>
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-700">Game descriotion</label>
        <textarea
          name="message"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"/>
      </div>
      <div className="pt-2">
        <ClassicButton type="submit">Send</ClassicButton>
      </div>
    </form>
  );
}