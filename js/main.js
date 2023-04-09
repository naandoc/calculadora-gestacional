(function () {
    const iptData = document.querySelector(".center-column input");
    const btnCalc = document.querySelector("section button");

    // funções

    // resultado da diferença entre as semanas
    const diffInWeeks = (dateInput) => {
        if (!iptData.value) return;

        const dateCurrent = new Date().getTime();
        const hourLocal = ((1000 * 60) * 60) * 3;
        // 3 horas para somar ao horário recebido pelo input 
        // (o mesmo está sendo recebido 3 horas a menos devido ao horário francês)

        const convertedDataInput = new Date(dateInput).getTime() + hourLocal;

        // verifica se a data do input é maior que a data atual
        if (convertedDataInput > dateCurrent) {
            dateInput.value = "";

            return;
        }

        // conta para obter o resultado de quantas semanas tem entre as duas datas
        const millisecondsDates = dateCurrent - convertedDataInput;
        const diffMinutes = (millisecondsDates / 1000) / 60;
        const diffWeeks = ((diffMinutes / 60) / 24) / 7;

        let weekOrWeeks;

        diffWeeks.toFixed(0) == 1 ? weekOrWeeks = "semana" : weekOrWeeks = "semanas";

        return `${diffWeeks.toFixed(0)} ${weekOrWeeks}`;
    }

    // adicionar quantidade de semanas no campo
    const addWeekInDiv = () => {
        const fieldAddWeeks = document.querySelector(".gestation-week");
        const titleAddWeeks = document.querySelector(".gestation-week h2");

        titleAddWeeks.innerText = diffInWeeks(iptData.value);
        fieldAddWeeks.style.display = "flex";
    }

    // eventos
    btnCalc.addEventListener("click", addWeekInDiv);
})()