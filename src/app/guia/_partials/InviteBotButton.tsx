import { FaDiscord } from "react-icons/fa";

export const InviteBotButton = () => {
  return (
    <a
      href="https://discord.com/oauth2/authorize?client_id=1327367559246512128&permissions=133120&integration_type=0&scope=bot"
      target="_blank"
      rel="noreferrer"
      className="cursor-pointer flex flex-row items-center justify-center gap-2 bg-gray-700 text-primary py-4 px-6 rounded-full"
    >
      <FaDiscord color="var(--primary-color)" size={30} />
      <h1 className="text-lg">Convidar Bot</h1>
    </a>
  );
};
