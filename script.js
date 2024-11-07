document.addEventListener('DOMContentLoaded', () => {
    // Exibindo a data atual no rodapé como "última atualização"
    const footer = document.querySelector('footer p');
    const currentDate = new Date();
    footer.textContent = `Última atualização em: ${currentDate.toLocaleDateString('pt-BR')}`;
});
