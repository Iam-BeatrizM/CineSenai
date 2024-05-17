
document.addEventListener("DOMContentLoaded", () => {
    const seatsContainer = document.querySelector(".seats");
    const totalSeats = 84;
    var assentoSelec=0;
    for (let i = 0; i < totalSeats; i++) {
        const seat = document.createElement("div");
        seat.classList.add("seat");
        seat.addEventListener("click", () => {
            seat.classList.toggle("selected");
            assentoSelec++;
            console.log(assentoSelec);
            let resposta=document.querySelector("#resposta");
            resposta.innerHTML=`${assentoSelec}`;
        });
        seatsContainer.appendChild(seat);
    }
});

document.getElementById('formPagamento').addEventListener('submit', function(e) {
    e.preventDefault();

    // Aqui você pode integrar com uma API de pagamento ou processar o pagamento como preferir
    alert('Pagamento realizado com sucesso!');
});


