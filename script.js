document.getElementById('form-agendamento').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(this);
  const nome = formData.get('nome');
  const celular = formData.get('celular');
  const servico = formData.get('servico');
  const outroServico = formData.get('outro_servico');
  const data = new Date(formData.get('data'));
  const horario = formData.get('horario');

  const dataFormatada = data.toLocaleDateString('pt-BR');

  const mensagem = 'Olá, meu nome é ' + nome + ', gostaria de fazer um agendamento! \n' +
    'Serviço(s): \n- ' + servico + (outroServico ? ' \n- ' + outroServico : '') + '\n' +
    'Data: ' + dataFormatada + '\n' +
    'Horário: ' + horario + '\n' +
    'Meu contato: ' + celular;

  window.open('https://api.whatsapp.com/send?phone=+5511932454325&text=' + encodeURIComponent(mensagem));
});
