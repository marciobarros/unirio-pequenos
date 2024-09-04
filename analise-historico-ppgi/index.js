const PdfReader = require('pdfreader').PdfReader

/*
 * Caracteristicas das disciplinas do Doutorado
 */
const disciplinasDoutorado = [
   { codigo: "09P9D01", codigoAntigo: "-------", tipo: "Obrigatoria",            creditos: 4, nome: "Fundamentos de Sistemas de Informação" },
   { codigo: "09P9D02", codigoAntigo: "-------", tipo: "Obrigatoria",            creditos: 4, nome: "Análise e Projeto de Algoritmos" },
   { codigo: "09P9D11", codigoAntigo: "-------", tipo: "Obrigatoria",            creditos: 4, nome: "Metodologia Científica" },
   { codigo: "09P9D88", codigoAntigo: "-------", tipo: "Eletiva Instrumentacao", creditos: 2, nome: "Estágio de Docência I" },
   { codigo: "???????", codigoAntigo: "-------", tipo: "Eletiva Instrumentacao", creditos: 2, nome: "Estágio de Docência II" },
   { codigo: "09P9D12", codigoAntigo: "-------", tipo: "Eletiva Instrumentacao", creditos: 4, nome: "Metodologia Científica II" },
   { codigo: "09P9D14", codigoAntigo: "-------", tipo: "Eletiva Instrumentacao", creditos: 4, nome: "Docência em Sistemas de Informação" },
   { codigo: "09P9D15", codigoAntigo: "-------", tipo: "Eletiva Instrumentacao", creditos: 4, nome: "Estudos Dirigidos à Inovação" },
   { codigo: "???????", codigoAntigo: "-------", tipo: "Eletiva Instrumentacao", creditos: 4, nome: "Métodos Qualitativos de Pesquisa" },
   { codigo: "???????", codigoAntigo: "-------", tipo: "Eletiva Instrumentacao", creditos: 4, nome: "Métodos Quantitativos de Pesquisa" },
   { codigo: "09P9D03", codigoAntigo: "-------", tipo: "Eletiva",                creditos: 2, nome: "Estudos Dirigidos I" },
   { codigo: "09P9D04", codigoAntigo: "-------", tipo: "Eletiva",                creditos: 2, nome: "Estudos Dirigidos II" },
   { codigo: "09P9D83", codigoAntigo: "09P9D53", tipo: "Eletiva",                creditos: 2, nome: "Estudos Dirigidos III" },
   { codigo: "09P9D54", codigoAntigo: "-------", tipo: "Eletiva",                creditos: 1, nome: "Estudos Dirigidos IV" },
   { codigo: "09P9D90", codigoAntigo: "-------", tipo: "Eletiva",                creditos: 0, nome: "Pesquisa para Tese I" },
   { codigo: "09P9D05", codigoAntigo: "-------", tipo: "Eletiva",                creditos: 0, nome: "Pesquisa para Tese - Doutorado I" },
   { codigo: "09P9D06", codigoAntigo: "-------", tipo: "Eletiva",                creditos: 0, nome: "Pesquisa para Tese - Doutorado II" },
   { codigo: "09P9D07", codigoAntigo: "-------", tipo: "Eletiva",                creditos: 0, nome: "Pesquisa para Tese - Doutorado III" },
   { codigo: "09P9D08", codigoAntigo: "-------", tipo: "Eletiva",                creditos: 0, nome: "Pesquisa para Tese - Doutorado IV" },
   { codigo: "09P9D57", codigoAntigo: "-------", tipo: "Optativa NB",            creditos: 4, nome: "Tratamento, Análise e Aprendizado Estatístico de Dados" },
   { codigo: "09P9D68", codigoAntigo: "-------", tipo: "Optativa NB",            creditos: 4, nome: "Engenharia de Software" },
   { codigo: "09P9D17", codigoAntigo: "-------", tipo: "Optativa NB",            creditos: 4, nome: "Inteligência Artificial" },
   { codigo: "-------", codigoAntigo: "-------", tipo: "Optativa NB",            creditos: 4, nome: "Interação Humano-Computador" },
   { codigo: "-------", codigoAntigo: "-------", tipo: "Optativa NB",            creditos: 4, nome: "Lógica" },
   { codigo: "09P9D66", codigoAntigo: "-------", tipo: "Optativa NB",            creditos: 4, nome: "Comunicação Científica" },
   { codigo: "-------", codigoAntigo: "-------", tipo: "Optativa NB",            creditos: 4, nome: "Modelagem e Simulação para Avaliação de Desempenho" },
   { codigo: "-------", codigoAntigo: "09P9D20", tipo: "Optativa NB",            creditos: 4, nome: "Técnicas Avançadas de Construção de Sistemas" },
   { codigo: "-------", codigoAntigo: "-------", tipo: "Optativa Temática",      creditos: 4, nome: "Acessibilidade" },
   { codigo: "-------", codigoAntigo: "-------", tipo: "Optativa Temática",      creditos: 4, nome: "Ciência da Web e Cibercultura" },
   { codigo: "-------", codigoAntigo: "-------", tipo: "Optativa Temática",      creditos: 4, nome: "Comunicação Mediada por Computador" },
   { codigo: "09P9D56", codigoAntigo: "-------", tipo: "Optativa Temática",      creditos: 4, nome: "Engenharia de Sistemas Complexos" },
   { codigo: "-------", codigoAntigo: "-------", tipo: "Optativa Temática",      creditos: 4, nome: "Gestão de Processos de Negócios" },
   { codigo: "-------", codigoAntigo: "-------", tipo: "Optativa Temática",      creditos: 4, nome: "Gestão do Conhecimento" },
   { codigo: "-------", codigoAntigo: "-------", tipo: "Optativa Temática",      creditos: 4, nome: "Informática na Educação" },
   { codigo: "-------", codigoAntigo: "-------", tipo: "Optativa Temática",      creditos: 4, nome: "Jogos, Gamificação e Contextos Lúdicos" },
   { codigo: "-------", codigoAntigo: "-------", tipo: "Optativa Temática",      creditos: 4, nome: "Medição de Software" },
   { codigo: "-------", codigoAntigo: "-------", tipo: "Optativa Temática",      creditos: 4, nome: "Sistemas Colaborativos" },
   { codigo: "-------", codigoAntigo: "-------", tipo: "Optativa Temática",      creditos: 4, nome: "Análise de Redes Sociais" },
   { codigo: "-------", codigoAntigo: "-------", tipo: "Optativa Temática",      creditos: 4, nome: "Aplicações de Inteligência Artificial" },
   { codigo: "-------", codigoAntigo: "-------", tipo: "Optativa Temática",      creditos: 4, nome: "Aprendizagem Profunda" },
   { codigo: "-------", codigoAntigo: "-------", tipo: "Optativa Temática",      creditos: 4, nome: "Arquiteturas Avançadas de Redes de Comunicação" },
   { codigo: "-------", codigoAntigo: "-------", tipo: "Optativa Temática",      creditos: 4, nome: "Ciência de Dados" },
   { codigo: "-------", codigoAntigo: "-------", tipo: "Optativa Temática",      creditos: 4, nome: "Heurísticas Inteligentes: técnicas e aplicações" },
   { codigo: "-------", codigoAntigo: "-------", tipo: "Optativa Temática",      creditos: 4, nome: "Redes de Computadores Sem Fio" },
   { codigo: "-------", codigoAntigo: "-------", tipo: "Optativa Temática",      creditos: 4, nome: "Redes Veiculares e Mobilidade Urbana" },
   { codigo: "-------", codigoAntigo: "-------", tipo: "Optativa Temática",      creditos: 4, nome: "Semântica na Web" },
   { codigo: "-------", codigoAntigo: "-------", tipo: "Optativa Temática",      creditos: 4, nome: "Sistemas Inteligentes e suas Aplicações" },
   { codigo: "09P9D34", codigoAntigo: "-------", tipo: "Optativa Temática",      creditos: 4, nome: "Tópicos Especiais em Sistemas Distribuídos I" },
   { codigo: "09P9D44", codigoAntigo: "-------", tipo: "Optativa Temática",      creditos: 4, nome: "Tópicos Especiais em Sistemas de Apoio à Negócios III" },
   { codigo: "09P9D45", codigoAntigo: "-------", tipo: "Optativa Temática",      creditos: 4, nome: "Tópicos Especiais em Sistemas de Apoio à Negócios IV" },
   { codigo: "09P9D29", codigoAntigo: "-------", tipo: "Optativa Temática",      creditos: 4, nome: "Tópicos Especiais em Representação de Conhecimento e Raciocínio III" },
   { codigo: "09P9D13", codigoAntigo: "-------", tipo: "Especial",               creditos: 0, nome: "Qualificação ao Doutorado" },
]

/*
 * Caracteristicas das disciplinas do Mestrado
 */
const disciplinasMestrado = [
   { codigo: "09P9M08", nome: "Metodologia Científica" },
   { codigo: "09P9M53", nome: "Fundamentos de Sistemas de Informação" },
   { codigo: "09P9M65", nome: "Análise de Dados e Aprendizado Estatístico" },
   { codigo: "09P9M31", nome: "Estudos Dirigidos I" },
   { codigo: "09P9M69", nome: "Ciência de Dados" },
   { codigo: "09P9M80", nome: "Aprendizagem Profunda" },
   { codigo: "09P9M02", nome: "Análise e Projeto de Algoritmos" },
   { codigo: "09P9M32", nome: "Estudos Dirigidos II" }
]

// Analisa os dados de um historico de Mestrado
function analisaHistoricoMestrado(historico) {
   console.log(historico.curso)
   // TODO: onde estao estas regras?
}

// Analisa os dados de um historico de Doutorado
function analisaHistoricoDoutorado(historico) {
   var ok = true
   console.log(historico.curso + " " + historico.aluno.nome)
   
   if (!verificaDisciplinasDesconhecidas(historico)) {
      ok = false
   }
   
   if (!verificaDisciplinasObrigatoriasDoutorado(historico)) {
      ok = false
   }

   if (!verificaDisciplinaOptativaNucleoBasico(historico)) {
      ok = false
   }

   if (!verificaDisciplinaOptativaTematica(historico)) {
      ok = false
   }

   if (!verificaDisciplinaEletivaInstrumentacao(historico)) {
      ok = false
   }

   if (!verificaCreditosDisciplinasOptativasEletivas(historico)) {
      ok = false
   }

   if (!verificaExameQualificacao(historico)) {
      ok = false
   }

   return ok
}

// Verifica se o sistema reconhece todas as disciplinas do historico
function verificaDisciplinasDesconhecidas(historico) {
   var ok = true

   for (var disciplina of historico.disciplinas) {
      if (!verificaDisciplinaDoutorado(disciplina)) {
         console.log(historico.curso + " " + historico.aluno.nome + " [ ] A disciplina " + disciplina.codigo + " - " + disciplina.nome + " nao foi reconhecida pelo sistema.")
         ok = false
      }
   }

   if (ok) {
      console.log(historico.curso + " " + historico.aluno.nome + " [x] Todas as disciplinas do historico foram reconhecidas pelo sistema.")
   }

   return ok
}

// Verifica se uma disciplina faz parte do rol de disciplinas do Doutorado
function verificaDisciplinaDoutorado(disciplina) {
   for (var disciplinaDoutorado of disciplinasDoutorado) {
      if (disciplinaDoutorado.codigo == disciplina.codigo) {
         return true
      }

      if (disciplinaDoutorado.codigoAntigo == disciplina.codigo) {
         return true
      }
   }

   return false
}

// Verifica se todas as disciplinas obrigatorias foram cursadas
function verificaDisciplinasObrigatoriasDoutorado(historico) {
   var ok = true

   for (var disciplina of disciplinasDoutorado) {
      if (disciplina.tipo == "Obrigatoria") {
         if (!verificaDisciplinaHistorico(historico, disciplina)) {
            console.log(historico.curso + " " + historico.aluno.nome + " [ ] Disciplina " + disciplina.nome + " (obrigatoria) pendente.")
            ok = false
         }
      }
   }

   if (ok) {
      console.log(historico.curso + " " + historico.aluno.nome + " [x] Todas as disciplinas obrigatorias foram cursadas.")
   }

   return ok
}

// Verifica se ao menos uma disciplina optativa de nucleo basico foi cursada
function verificaDisciplinaOptativaNucleoBasico(historico) {
   for (var disciplina of disciplinasDoutorado) {
      if (disciplina.tipo == "Optativa NB") {
         if (!verificaDisciplinaHistorico(historico, disciplina)) {
            console.log(historico.curso + " " + historico.aluno.nome + " [x] Disciplina optativa de nucleo basico cursada.")
            return true
         }
      }
   }

   console.log(historico.curso + " " + historico.aluno.nome + " [ ] Disciplina optativa de nucleo basico pendente.")
   return false
}

// Verifica se ao menos uma disciplina optativa tematica foi cursada
function verificaDisciplinaOptativaTematica(historico) {
   for (var disciplina of disciplinasDoutorado) {
      if (disciplina.tipo == "Optativa Temática") {
         if (verificaDisciplinaHistorico(historico, disciplina)) {
            console.log(historico.curso + " " + historico.aluno.nome + " [x] Disciplina optativa tematica foi cursada.")
            return true
         }
      }
   }

   console.log(historico.curso + " " + historico.aluno.nome + " [ ] Disciplina optativa tematica pendente.")
   return false
}

// Verifica se ao menos uma disciplina eletiva de instrumentacao foi cursada
function verificaDisciplinaEletivaInstrumentacao(historico) {
   for (var disciplina of disciplinasDoutorado) {
      if (disciplina.tipo == "Eletiva Instrumentacao") {
         if (verificaDisciplinaHistorico(historico, disciplina)) {
            console.log(historico.curso + " " + historico.aluno.nome + " [x] Disciplina eletiva de instrumentacao cursada.")
            return true
         }
      }
   }

   console.log(historico.curso + " " + historico.aluno.nome + " [ ] Disciplina eletiva de instrumentacao pendente.")
   return false
}

// Verifica se ao menos 24 creditos foram obtidos em disciplinas eletivas e optativas
function verificaCreditosDisciplinasOptativasEletivas(historico) {
   var creditos = 0

   for (var disciplina of disciplinasDoutorado) {
      if (disciplina.tipo == "Eletiva Instrumentacao" || disciplina.tipo == "Eletiva" || disciplina.tipo == "Optativa Temática" || disciplina.tipo == "Optativa NB") {
         if (verificaDisciplinaHistorico(historico, disciplina)) {
            creditos += disciplina.creditos
         }
      }
   }

   if (creditos < 24) {
      console.log(historico.curso + " " + historico.aluno.nome + " [ ] Faltam " + (24 - creditos) + " de 24 creditos em disciplinas optativas e eletivas.")
      return false
   }
   else {
      console.log(historico.curso + " " + historico.aluno.nome + " [x] " + creditos + " de 24 creditos cursados em disciplinas optativas e eletivas.")
      return true
   }
}

// Verifica se cursou o exame de qualificacao
function verificaExameQualificacao(historico) {
   for (var disciplina of historico.disciplinas) {
      if (disciplina.codigo == "09P9D13") {
         console.log(historico.curso + " " + historico.aluno.nome + " [x] Exame de qualificacao cursado.")
         return true
      }
   }

   console.log(historico.curso + " " + historico.aluno.nome + " [ ] Exame de qualificacao pendente.")
   return false
}

// Verifica se cursou uma determinada disciplina
function verificaDisciplinaHistorico(historico, disciplinaDesejada) {
   for (var disciplina of historico.disciplinas) {
      if (disciplina.codigo == disciplinaDesejada.codigo) {
         return true
      }
      if (disciplina.codigo == disciplinaDesejada.codigoAntigo) {
         return true
      }
   }

   return false
}

// Analisa os dados do historico
function analisaHistorico(historico) {
   if (historico.curso == '09P9M') {
      analisaHistoricoMestrado(historico)
   }
   else if (historico.curso == '09P9D') {
      analisaHistoricoDoutorado(historico)
   }
   else {
      throw "Codigo de curso nao identificado: " + historico.curso
   }
}

// Captura os dados do historico
function processaHistorico(contents) {

   const regexCabecalho = /Data: (\d{2}\/\d{2}\/\d{4}) (\d\dP\d\w) - Informática - (Doutorado|Mestrado Acadêmico) \d{5}\w\d\w\d\d Matrícula: Nome Aluno: (.{5,50}) Curso: Versão: \d{4}\/\d Período Atual: \d+. Semestre Registro Geral - CPF: (\d{3}\.\d{3}\.\d{3}-\d{2})/gm;
   var m = regexCabecalho.exec(contents)

   if (m === null) {
      return null
   }

   var data = m[1]
   var codigoCurso = m[2]
   var nomeAluno = m[4]
   var cpfAluno = m[5]

   var historico = {}
   historico.data = data
   historico.curso = codigoCurso
   historico.aluno = { nome: nomeAluno, cpf: cpfAluno }
   historico.disciplinas = []

   const regexDisciplinas = /(09P9\w\d{2}) (.{5,80}?) (\d) (\d{1,3},\d{2}) \d{0,3},?\d{0,2}?\s?(APV|ASC)/gm;

   while ((m = regexDisciplinas.exec(contents)) !== null) {
      var codigoDisciplina = m[1]
      var nomeDisciplina = m[2]
      var creditos = parseInt(m[3])
      var nota = parseFloat(m[4].replace(",", "."))
      var status = m[5]

      var disciplina = { codigo: codigoDisciplina, nome: nomeDisciplina, creditos, nota, status }
      historico.disciplinas.push(disciplina)
   }

   const regexDisciplinasAproveitadas = /(09P9\w\d{2}) (.{5,80}?) (\d) \d{0,3},?\d{0,2}?\s?ADI/gm;

   while ((m = regexDisciplinasAproveitadas.exec(contents)) !== null) {
      var codigoDisciplina = m[1]
      var nomeDisciplina = m[2]
      var creditos = parseInt(m[3])
      var nota = NaN
      var status = "ADI"

      var disciplina = { codigo: codigoDisciplina, nome: nomeDisciplina, creditos, nota, status }
      historico.disciplinas.push(disciplina)
   }

   return historico
}

// Realiza o parse do documento PDF, retornando uma string
async function processaDocumentoPDF(filename) {
   var contents = ""
   
   return new Promise(function(resolve, reject) {
         new PdfReader().parseFileItems(filename, function(err, item) {

         if (err) {
            reject(err);
         }
         else if (!item) {
            resolve(contents);
         }
         else if (item.text) {
            contents += item.text + " "
         }
      });
   })
}

// Programa principal
async function main() {
   var contents = await processaDocumentoPDF("pdf\\historico-roberto.pdf")
   historico = processaHistorico(contents)
   analisaHistorico(historico)
   console.log("")

   contents = await processaDocumentoPDF("pdf\\historico-leo.pdf")
   historico = processaHistorico(contents)
   analisaHistorico(historico)
   console.log("")

   contents = await processaDocumentoPDF("pdf\\historico-filipe.pdf")
   historico = processaHistorico(contents)
   analisaHistorico(historico)
   console.log("")
}

main()