import Image from "next/image";
import { BsFillBellFill } from "react-icons/bs";
import { FaSmile } from "react-icons/fa";
import { GradientCard, InviteBotButton, MainTitle } from "./_partials";
import { Card, Segment } from "./components";

export default function Guide() {
  return (
    <div>
      <div className="flex flex-row items-start gap-10">
        <MainTitle />
        <GradientCard title="Ativa as Notificações">
          <div className="gap-y-8 gap-x-4 grid grid-cols-[12%_auto]">
            <Segment
              icon={
                <Image
                  src="/icons/logo.png"
                  alt="TTPT"
                  width={120}
                  height={120}
                />
              }
            />
            <Card
              title="Convida o Bot"
              description="Antes de qualquer coisa, precisas primeiro adicionar o bot ao
                teu servidor. Carrega no botão abaixo para o fazer. Caso já
                tenhas o bot no teu servidor, podes ignorar esta etapa."
              button={<InviteBotButton />}
            />
            <Segment
              icon={
                <BsFillBellFill
                  color="var(--primary-color)"
                  size={70}
                  className="w-[120px]"
                />
              }
            />
            <Card
              title="Habilita as Notificações"
              description="Primeiro executa o comando <code>/torneios</code>. Em seguida,
                escolha de quais organizadores queres receber notificações sobre
                novos torneios."
            />
            <Segment
              icon={
                <FaSmile
                  color="var(--primary-color)"
                  size={70}
                  className="w-[120px]"
                />
              }
              lastStep
            />
            <Card
              title="E já está"
              description="Agora sempre que alguma organização escolhida por it postar um
                torneio novo, serás notificado!"
            />
          </div>
        </GradientCard>
      </div>
    </div>
  );
}
