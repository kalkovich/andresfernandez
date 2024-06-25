document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // Vista inicial del calendario (mes)
        locale: 'es', // Idioma del calendario
        events: [
            {
                title: 'Baile contemporáneo',
                start: '2024-06-15T16:00:00', // Fecha y hora de inicio
                end: '2024-06-15T18:00:00',   // Fecha y hora de fin
                description: 'Actividad de baile contemporáneo en el salón principal'
            },
            {
                title: 'Club de Debate',
                start: '2024-06-16T15:00:00',
                end: '2024-06-16T17:00:00',
                description: 'Debate sobre temas actuales en el aula 205'
            },
            {
                title: 'Taller de Arte',
                start: '2024-06-17T14:00:00',
                end: '2024-06-17T16:00:00',
                description: 'Taller de arte en la sala de arte con la profesora Ana González'
            }
            // Agrega más eventos según sea necesario
        ],
        eventClick: function(info) {
            alert('Actividad: ' + info.event.title + '\nHora: ' + info.event.start.toLocaleTimeString() + ' - ' + info.event.end.toLocaleTimeString() + '\nDescripción: ' + info.event.extendedProps.description);
        }
    });

    calendar.render();
});
