AOS.init();

const dataDoEvento = new Date("sep 19, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const ContaTempo = setInterval(function () {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const diaEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60;
  const segundoEmMs = 1000;

  const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
  const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
  const horasAteOEvento = Math.floor(
    (distanciaAteOEvento % diaEmMs) / horaEmMs
  );
  const minutosAteOEvento = Math.floor(
    (distanciaAteOEvento % horaEmMs) / minutoEmMs
  );
  const segundosAteOEvento = Math.floor(
    (distanciaAteOEvento % minutoEmMs) / segundoEmMs
  );
  console.log(diasAteOEvento);
  console.log(horasAteOEvento);
  console.log(minutosAteOEvento);
  console.log(segundosAteOEvento);

  document.getElementById(
    "contador"
  ).innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

  if (distanciaAteOEvento < 0) {
    clearInterval(ContaTempo);
    document.getElementById("contador").innerHTML = "O evento já aconteceu!";
  }
}, 1000);
