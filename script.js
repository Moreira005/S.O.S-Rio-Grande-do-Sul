function showInfo() {
    hideAllSections();
    document.getElementById('info').classList.remove('hidden');
}

function showComoAjudar() {
    hideAllSections();
    document.getElementById('comoAjudar').classList.remove('hidden');
}

function showDoacoes() {
    hideAllSections();
    document.getElementById('doacoes').classList.remove('hidden');
}

function showColetaPontos() {
    hideAllSections();
    document.getElementById('coletaPontos').classList.remove('hidden');
}

function hideAllSections() {
    document.getElementById('info').classList.add('hidden');
    document.getElementById('comoAjudar').classList.add('hidden');
    document.getElementById('doacoes').classList.add('hidden');
    document.getElementById('coletaPontos').classList.add('hidden');
}

function submitForm(event) {
    event.preventDefault();
    const form = document.getElementById('pixForm');
    const formData = new FormData(form);
    const nome = formData.get('nome');
    const sobrenome = formData.get('sobrenome');
    const email = formData.get('email');
    const celular = formData.get('celular');
    const chavePix = formData.get('chavePix');
    const valor = formData.get('valor');
    document.getElementById('mensagem').innerText = `Obrigado, ${nome} ${sobrenome}! Sua doação de R$${valor},00 via PIX (${chavePix}) foi recebida com sucesso. Entraremos em contato pelo email ${email} ou pelo número do celular ${celular} para confirmar os detalhes.`;
    form.reset();
}
