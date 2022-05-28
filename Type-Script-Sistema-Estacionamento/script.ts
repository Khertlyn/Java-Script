interface Veiculo{
    nome: string;
    placa: string;
    entrada: Date | string;
    tipo?: string;
    tarifa: number;
}

(function(){
    const $ = (query: string): HTMLInputElement | null => 
    document.querySelector(query);

    function calcTempo(mil: number){
        const min = Math.floor(mil / 60000);
        const sec = Math.floor(mil % 60000) / 1000;
        return `${min}m e ${sec}s`;     
    }

    function patio() {
        function ler(): Veiculo []{
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];   
        }
        
        function salvar(veiculos: Veiculo[]){
            localStorage.setItem("patio", JSON.stringify(veiculos));
        }

        function adicionar(veiculo: Veiculo, salva?: boolean){
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${veiculo.nome}</td>
                <td>${veiculo.placa}</td>
                <td>${veiculo.entrada}</td>
                <td>${veiculo.tipo}</td>
                <td>${veiculo.tarifa}</td>
                <td>
                    <button class="delete" data-placa="${veiculo.placa}">X</button>
                </td>
                `;

                row.querySelector(".delete")?.addEventListener("click",function() {
                    remover(this.dataset.placa);
                });
                $("#patio")?.appendChild(row);

                if (salva) salvar([...ler(), veiculo]);
            }

        function remover(placa: string){
            const {entrada, nome } = ler().find(
                (veiculo) => veiculo.placa===placa
                );
            const tempo = calcTempo(new Date().getTime() - new Date(entrada).getTime());
            /*const {tarifa} = ler().find(
                (veiculo) => veiculo.tarifa===tarifa
                );*/
            const valorTarifa = 0.10//tarifa;
            const valor = ((parseInt(tempo)) * valorTarifa).toFixed(2);
            if (
                !confirm(`O veículo ${placa} permaneceu por ${tempo}.
                O valor da Tarifa por minuto é R$ ${valorTarifa} 
                O valor a pagar é:R$ ${valor} Deseja encerrar?`)
                )
                return;
            salvar(ler().filter((veiculo)=>veiculo.placa !== placa));
            render();
        }
    
        function render(){
            $("#patio")!.innerHTML = "";
            const patio = ler();

            if(patio.length){
                patio.forEach((veiculo) => adicionar(veiculo));
                }
            }
        
        return {ler, adicionar, remover, salvar, render };
        }
patio().render();
$("#cadastrar")?.addEventListener("click", () => {
    const nome = $("#nome")?.value;
    const placa = $("#placa")?.value;
    const tipo = $("#tipo")?.value;
    const tarifa = tipo ==='moto' ? 0.10 : 0.15;

    if(!nome || !placa || !tipo){
        alert("É obrigatório o preenchimento de todos os campos");
        return;
    }
    patio().adicionar({nome, placa, entrada: new Date().toISOString(), tipo, tarifa}, true);
});
})();