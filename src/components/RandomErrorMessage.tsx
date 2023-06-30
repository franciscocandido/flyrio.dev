import { useEffect, useState } from 'react';

export default function RandomErrorMessage(): JSX.Element {
  const [errorMessage, setErrorMessage] = useState<string>();
  const availableMessages = [
    'A força não está com você, nem com essa URL.',
    'O Expresso de Hogwarts não pode chegar até esta página.',
    'Houston, temos um problema... e essa página também.',
    'Parece que a TARDIS caiu antes de chegar a essa página.',
    'Essa página foi para uma galáxia muito, muito distante...',
    'Os Dalek exterminaram essa URL. Exterminar!',
    'Acho que nem a chave de fenda sônica pode consertar esta URL.',
    'O Laboratório de Hawkins bloqueou o acesso a essa página.',
    'Nancy e Jonathan não encontraram nenhum vestígio dessa página.',
    'O Sex Bob-omb tocou tão alto que quebrou essa página.',
    'Página exclusiva para membros do Vortex Club.',
    'Murphy atacou e a página sofreu coincidências negativas.',
    'Um Enderman teleportou essa URL para um local desconhecido.',
    'A Corporação Arasaka bloqueou o acesso. Informação restrita.',
    'Parece que essa página sumium junto com os Nomai.',
  ];

  useEffect(() => {
    setErrorMessage(
      availableMessages[Math.floor(Math.random() * availableMessages.length)]
    );
  });

  return (
    <small className="font-bold text-paragraph md:text-base">
      {errorMessage}
    </small>
  );
}
