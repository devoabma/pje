import { v4 as uuidV4 } from 'uuid'

export interface Courts {
  id: string
  name: string
  url: string
}

export interface States {
  id: string
  name: string
  sigla: string
  courts: Courts[]
}

export const dataStates: States[] = [
  {
    id: '1',
    name: 'Maranhão',
    sigla: 'MA',
    courts: [
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TJMA 1° GRAU',
        url: 'https://pje.tjma.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TJMA 2° GRAU',
        url: 'https://pje2.tjma.jus.br/pje2g/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 1° GRAU',
        url: 'https://pje1g.trf1.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 2° GRAU',
        url: 'https://pje2g.trf1.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 16 - 1º GRAU',
        url: 'https://pje.trt16.jus.br/primeirograu/authenticateSSO.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 16 - 2º GRAU',
        url: 'https://pje.trt16.jus.br/segundograu/authenticateSSO.seam',
      },
    ],
  },
  {
    id: '2',
    name: 'Acre',
    sigla: 'AC',
    courts: [
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 1° GRAU',
        url: 'https://pje1g.trf1.jus.br/pje-web/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 2° GRAU',
        url: 'https://pje2g.trf1.jus.br/pje-web/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 14 - 1º GRAU',
        url: 'https://pje.trt14.jus.br/primeirograu/authenticateSSO.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 14 - 2º GRAU',
        url: 'https://pje.trt14.jus.br/segundograu/authenticateSSO.seam',
      },
    ],
  },
  {
    id: '3',
    name: 'Alagoas',
    sigla: 'AL',
    courts: [
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TRF 5ª Região - 1° GRAU',
        url: 'https://pje.jfal.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 5ª Região - 2° GRAU',
        url: 'https://pje.trf5.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 5ª Região - JEF',
        url: 'https://pje1g.trf5.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 5ª Região - TR',
        url: 'https://pje2g.trf5.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 19ª Região - 1° GRAU',
        url: 'https://pje.trt19.jus.br/primeirograu/authenticateSSO.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 19ª Região - 2° GRAU',
        url: 'https://pje.trt19.jus.br/segundograu/authenticateSSO.seam',
      },
    ],
  },
  {
    id: '4',
    name: 'Amazonas',
    sigla: 'AM',
    courts: [
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 1° GRAU',
        url: 'https://pje1g.trf1.jus.br/pje-web/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 2° GRAU',
        url: 'https://pje2g.trf1.jus.br/pje-web/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 11ª Região - 1° GRAU',
        url: 'https://pje.trt11.jus.br/primeirograu/authenticateSSO.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 11ª Região - 2° GRAU',
        url: 'https://pje.trt11.jus.br/segundograu/authenticateSSO.seam',
      },
    ],
  },
  {
    id: '5',
    name: 'Amapá',
    sigla: 'AP',
    courts: [
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TJAP 1º GRAU',
        url: 'https://pje.tjap.jus.br/1g/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TJAP 2º GRAU',
        url: 'https://pje.tjap.jus.br/2g/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 1° GRAU',
        url: 'https://pje1g.trf1.jus.br/pje-web/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 2° GRAU',
        url: 'https://pje2g.trf1.jus.br/pje-web/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 8ª Região - 1° GRAU',
        url: 'https://pje.trt8.jus.br/primeirograu/authenticateSSO.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 8ª Região - 2° GRAU',
        url: 'https://pje.trt8.jus.br/segundograu/authenticateSSO.seam',
      },
    ],
  },
  {
    id: '6',
    name: 'Bahia',
    sigla: 'BA',
    courts: [
      {
        id: uuidV4(),
        name: 'TJBA 1° GRAU',
        url: 'https://pje.tjba.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TJBA 2° GRAU',
        url: 'https://pje2g.tjba.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 1° GRAU',
        url: 'https://pje1g.trf1.jus.br/pje-web/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 2° GRAU',
        url: 'https://pje2g.trf1.jus.br/pje-web/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 5ª Região - 1° GRAU',
        url: 'https://pje.trt5.jus.br/primeiroGRAU/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 5ª Região - 2° GRAU',
        url: 'https://pje.trt5.jus.br/segundoGRAU/login.seam',
      },
    ],
  },
  {
    id: '7',
    name: 'Ceará',
    sigla: 'CE',
    courts: [
      {
        id: uuidV4(),
        name: 'TJCE 1° GRAU',
        url: 'https://pje.tjce.jus.br/pje1GRAU/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TJCE 2° GRAU',
        url: 'https://pje.tjce.jus.br/pje2GRAU/login.seam',
      },
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TRF 5ª Região - 1° GRAU',
        url: 'https://pje.jfal.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 5ª Região - 2° GRAU',
        url: 'https://pje.trf5.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 5ª Região - JEF',
        url: 'https://pje1g.trf5.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 5ª Região - TR',
        url: 'https://pje2g.trf5.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 7 - 1° GRAU',
        url: 'https://pje.trt7.jus.br/primeiroGRAU/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 7 - 2° GRAU',
        url: 'https://pje.trt7.jus.br/segundoGRAU/login.seam',
      },
    ],
  },
  {
    id: '8',
    name: 'Distrito Federal',
    sigla: 'DF',
    courts: [
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TST',
        url: 'https://pje.tst.jus.br/tst/login.seam',
      },
      {
        id: uuidV4(),
        name: 'CNJ',
        url: 'https://www.cnj.jus.br/pjecnj/login.seam',
      },
      {
        id: uuidV4(),
        name: 'CJF (TNU)',
        url: 'https://www2.cjf.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TJDFT 1° GRAU',
        url: 'https://pje.tjdft.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TJDFT 2° GRAU',
        url: 'https://pje2i.tjdft.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 1° GRAU',
        url: 'https://pje1g.trf1.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 2° GRAU',
        url: 'https://pje2g.trf1.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 10 - 1° GRAU',
        url: 'https://pje.trt10.jus.br/primeiroGRAU/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 10 - 2° GRAU',
        url: 'https://pje.trt10.jus.br/segundoGRAU/login.seam',
      },
    ],
  },
  {
    id: '9',
    name: 'Espírito Santo',
    sigla: 'ES',
    courts: [
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TJES 1° GRAU',
        url: 'https://pje.tjes.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TJES - TURMA RECURSAL',
        url: 'https://pje.tjes.jus.br/pje2g/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 17 - 1° GRAU',
        url: 'https://pje.trt17.jus.br/primeiroGRAU/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 17 - 2° GRAU',
        url: 'https://pje.trt17.jus.br/segundoGRAU/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 2° GRAU',
        url: 'https://pje2g.trf1.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 16 - 1º GRAU',
        url: 'https://pje.trt16.jus.br/primeiroGRAU/authenticateSSO.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 16 - 2º GRAU',
        url: 'https://pje.trt16.jus.br/segundoGRAU/authenticateSSO.seam',
      },
    ],
  },
  {
    id: '10',
    name: 'Goiás',
    sigla: 'GO',
    courts: [
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 1° GRAU',
        url: 'https://pje1g.trf1.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 2° GRAU',
        url: 'https://pje2g.trf1.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 18 - 1º GRAU',
        url: 'https://pje.trt18.jus.br/primeiroGRAU/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 18 - 2º GRAU',
        url: 'https://pje.trt18.jus.br/segundoGRAU/login.seam',
      },
    ],
  },
  {
    id: '11',
    name: 'Mato Grosso',
    sigla: 'MT',
    courts: [
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TJMT 1° GRAU',
        url: 'https://pje.tjmt.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TJMT 2° GRAU',
        url: 'https://pje2.tjmt.jus.br/pje2/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 1° GRAU',
        url: 'https://pje1g.trf1.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 2° GRAU',
        url: 'https://pje2g.trf1.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 23 - 1º GRAU',
        url: 'https://pje.trt23.jus.br/primeirograu/authenticateSSO.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 23 - 2º GRAU',
        url: 'https://pje.trt23.jus.br/segundograu/authenticateSSO.seam',
      },
    ],
  },
  {
    id: '12',
    name: 'Mato Grosso do Sul',
    sigla: 'MS',
    courts: [
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TRF 3ª Região - 1° GRAU',
        url: 'https://pje1g.trf3.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 3ª Região - 2° GRAU',
        url: 'https://pje2g.trf3.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 24 - 1º GRAU',
        url: 'https://pje.trt24.jus.br/primeirograu/authenticateSSO.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 24 - 2º GRAU',
        url: 'https://pje.trt24.jus.br/segundograu/authenticateSSO.seam',
      },
    ],
  },
  {
    id: '13',
    name: 'Minas Gerais',
    sigla: 'MG',
    courts: [
      {
        id: uuidV4(),
        name: 'TJMG 1° GRAU',
        url: 'https://pje.tjmg.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TJMG RECURSAL',
        url: 'https://pjerecursal.tjmg.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 1° GRAU',
        url: 'https://pje1g.trf1.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 2° GRAU',
        url: 'https://pje2g.trf1.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 3 - 1º GRAU',
        url: 'https://pje.trt3.jus.br/primeirograu/authenticateSSO.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 3 - 2º GRAU',
        url: 'https://pje.trt3.jus.br/segundograu/authenticateSSO.seam',
      },
    ],
  },
  {
    id: '14',
    name: 'Pará',
    sigla: 'PA',
    courts: [
      {
        id: uuidV4(),
        name: 'TJPA 1° GRAU',
        url: 'https://pje.tjpa.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TJPA 2° GRAU',
        url: 'https://pje.tjpa.jus.br/pje-2g/login.seam',
      },
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 1° GRAU',
        url: 'https://pje1g.trf1.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 2° GRAU',
        url: 'https://pje2g.trf1.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 8 - 1º GRAU',
        url: 'https://pje.trt8.jus.br/primeirograu/authenticateSSO.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 8 - 2º GRAU',
        url: 'https://pje.trt8.jus.br/segundograu/authenticateSSO.seam',
      },
    ],
  },
  {
    id: '15',
    name: 'Paraíba',
    sigla: 'PB',
    courts: [
      {
        id: uuidV4(),
        name: 'TJPB - CORREGEDORIA',
        url: 'https://pje.tjpb.jus.br/pje-corregedoria/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TJPB 1° GRAU',
        url: 'https://pje.tjpb.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TJPB 2° GRAU',
        url: 'https://pjesg.tjpb.jus.br/pje2g/login.seam',
      },
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TRF 5ª Região - 1° GRAU',
        url: 'https://pje.jfal.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 5ª Região - 2° GRAU',
        url: 'https://pje.trf5.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 13 - 1º GRAU',
        url: 'https://pje.trt13.jus.br/primeirograu/authenticateSSO.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 13 - 2º GRAU',
        url: 'https://pje.trt13.jus.br/segundograu/authenticateSSO.seam',
      },
    ],
  },
  {
    id: '16',
    name: 'Paraná',
    sigla: 'PR',
    courts: [
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TRT 9 - 1º GRAU',
        url: 'https://pje.trt9.jus.br/primeirograu/authenticateSSO.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 9 - 2º GRAU',
        url: 'https://pje.trt9.jus.br/segundograu/authenticateSSO.seam',
      },
    ],
  },
  {
    id: '17',
    name: 'Pernambuco',
    sigla: 'PE',
    courts: [
      {
        id: uuidV4(),
        name: 'TJPE - CORREGEDORIA',
        url: 'https://corregedoria.pje.jus.br/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TJPE 1° GRAU',
        url: 'https://pje.cloud.tjpe.jus.br/1g/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TJPE 2° GRAU',
        url: 'https://pje.cloud.tjpe.jus.br/2g/login.seam',
      },
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TRF 5ª Região - 1° GRAU',
        url: 'https://pje.jfal.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 5ª Região - 2° GRAU',
        url: 'https://pje.trf5.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 5ª Região - JEF',
        url: 'https://pje1g.trf5.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 5ª Região - TR',
        url: 'https://pje2g.trf5.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 6 - 1º GRAU',
        url: 'https://pje.trt6.jus.br/primeirograu/authenticateSSO.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 6 - 2º GRAU',
        url: 'https://pje.trt6.jus.br/segundograu/authenticateSSO.seam',
      },
    ],
  },
  {
    id: '18',
    name: 'Piauí',
    sigla: 'PI',
    courts: [
      {
        id: uuidV4(),
        name: 'TJPI 1° GRAU',
        url: 'https://pje.tjpi.jus.br/1g/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TJPI 2° GRAU',
        url: 'https://pje.tjpi.jus.br/2g/login.seam',
      },
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 1° GRAU',
        url: 'https://pje1g.trf1.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 2° GRAU',
        url: 'https://pje2g.trf1.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 22 - 1º GRAU',
        url: 'https://pje.trt22.jus.br/primeirograu/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 22 - 2º GRAU',
        url: 'https://pje.trt22.jus.br/segundograu/login.seam',
      },
    ],
  },
  {
    id: '19',
    name: 'Rio de Janeiro',
    sigla: 'RJ',
    courts: [
      {
        id: uuidV4(),
        name: 'TJRJ 1° GRAU',
        url: 'https://tjrj.pje.jus.br/1g/login.seam',
      },
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TRT 1 - 1º GRAU',
        url: 'https://pje.trt1.jus.br/primeirograu/authenticateSSO.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 1 - 2º GRAU',
        url: 'https://pje.trt1.jus.br/segundograu/authenticateSSO.seam',
      },
    ],
  },
  {
    id: '20',
    name: 'Rio Grande do Norte',
    sigla: 'RN',
    courts: [
      {
        id: uuidV4(),
        name: 'TJRN 1° GRAU',
        url: 'https://pje1g.tjrn.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TJRN 2° GRAU',
        url: 'https://pje2gconsulta.tjrn.jus.br/consultapublica/ConsultaPublica/listView.seam',
      },
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TRF 5ª Região - 1° GRAU',
        url: 'https://pje.jfal.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 5ª Região - 2° GRAU',
        url: 'https://pje.trf5.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 5ª Região - JEF',
        url: 'https://pje1g.trf5.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 5ª Região - TR',
        url: 'https://pje2g.trf5.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 21 - 1º GRAU',
        url: 'https://pje.trt21.jus.br/primeirograu/authenticateSSO.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 21 - 2º GRAU',
        url: 'https://pje.trt21.jus.br/segundograu/authenticateSSO.seam',
      },
    ],
  },
  {
    id: '21',
    name: 'Rio Grande do Sul',
    sigla: 'RS',
    courts: [
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TRT 4 - 1º GRAU',
        url: 'https://pje.trt4.jus.br/primeirograu/authenticateSSO.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 4 - 2º GRAU',
        url: 'https://pje.trt4.jus.br/primeirograu/authenticateSSO.seam',
      },
    ],
  },
  {
    id: '22',
    name: 'Rondônia',
    sigla: 'RO',
    courts: [
      {
        id: uuidV4(),
        name: 'TJRO 1° GRAU',
        url: 'https://pjepg.tjro.jus.br/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TJRO 2° GRAU',
        url: 'https://pjesg.tjro.jus.br/login.seam',
      },
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 1° GRAU',
        url: 'https://pje1g.trf1.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 2° GRAU',
        url: 'https://pje2g.trf1.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 14 - 1º GRAU',
        url: 'https://pje.trt14.jus.br/primeirograu/authenticateSSO.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 14 - 2º GRAU',
        url: 'https://pje.trt14.jus.br/segundograu/authenticateSSO.seam',
      },
    ],
  },
  {
    id: '23',
    name: 'Roraima',
    sigla: 'RR',
    courts: [
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 1° GRAU',
        url: 'https://pje1g.trf1.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 2° GRAU',
        url: 'https://pje2g.trf1.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 11 - 1º GRAU',
        url: 'https://pje.trt11.jus.br/primeirograu/authenticateSSO.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 11 - 2º GRAU',
        url: 'https://pje.trt11.jus.br/segundograu/authenticateSSO.seam',
      },
    ],
  },
  {
    id: '24',
    name: 'Santa Catarina',
    sigla: 'SC',
    courts: [
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TRT 12 - 1º GRAU',
        url: 'https://pje.trt12.jus.br/primeirograu/authenticateSSO.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 12 - 2º GRAU',
        url: 'https://pje.trt12.jus.br/segundograu/authenticateSSO.seam',
      },
    ],
  },
  {
    id: '25',
    name: 'São Paulo',
    sigla: 'SP',
    courts: [
      {
        id: uuidV4(),
        name: 'TJ MILITAR 1° GRAU',
        url: 'https://pje.tjmsp.jus.br/pje-web/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TJ MILITAR 2° GRAU',
        url: 'https://pje2GRAU.tjmsp.jus.br/pje-web/login.seam',
      },
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TRF 3° Região - 1º GRAU',
        url: 'https://pje1g.trf3.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 3° Região - 2º GRAU',
        url: 'https://pje2g.trf3.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 2 - 1º GRAU',
        url: 'https://pje.trt2.jus.br/primeirograu/authenticateSSO.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 2 - 2º GRAU',
        url: 'https://pje.trt2.jus.br/segundograu/authenticateSSO.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 15 - 1º GRAU',
        url: 'https://pje.trt15.jus.br/primeirograu/authenticateSSO.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 15 - 2º GRAU',
        url: 'https://pje.trt15.jus.br/segundograu/authenticateSSO.seam',
      },
      {
        id: uuidV4(),
        name: 'ESAJ',
        url: 'https://esaj.tjsp.jus.br/esaj/portal.do?servico=740000',
      },
    ],
  },
  {
    id: '26',
    name: 'Sergipe',
    sigla: 'SG',
    courts: [
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TRF 5ª Região - 1° GRAU',
        url: 'https://pje.jfal.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 5ª Região - 2° GRAU',
        url: 'https://pje.trf5.jus.br/pje/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 20 - 2º GRAU',
        url: 'https://pje.trt20.jus.br/primeirograu/authenticateSSO.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 20 - 2º GRAU',
        url: 'https://pje.trt20.jus.br/segundograu/authenticateSSO.seam',
      },
    ],
  },
  {
    id: '27',
    name: 'Tocantins',
    sigla: 'TO',
    courts: [
      {
        id: uuidV4(),
        name: 'Justiça Eleitoral',
        url: 'https://www.tse.jus.br/servicos-judiciais/processos/pje',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 1° GRAU',
        url: 'https://pje1g.trf1.jus.br/pje-web/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRF 1ª Região - 2° GRAU',
        url: 'https://pje2g.trf1.jus.br/pje-web/login.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 10 - 2º GRAU',
        url: 'https://pje.trt10.jus.br/primeirograu/authenticateSSO.seam',
      },
      {
        id: uuidV4(),
        name: 'TRT 10 - 2º GRAU',
        url: 'https://pje.trt10.jus.br/segundograu/authenticateSSO.seam',
      },
    ],
  },
]
