<h1>Nueva solicitud para Opal Pearls</h1>

<p><strong>Nombre:</strong> {{ $application->nombre }}</p>
<p><strong>Personaje:</strong> {{ $application->personaje }}</p>
<p><strong>Edad:</strong> {{ $application->edad ?: 'No indicada' }}</p>
<p><strong>Nivel:</strong> {{ $application->nivel ?: 'No indicado' }}</p>
<p><strong>Discord:</strong> {{ $application->discord }}</p>
<p><strong>Horario:</strong> {{ collect($application->horario)->join(', ') ?: 'No indicado' }}</p>
<p><strong>Raza preferida:</strong> {{ $application->raza }}</p>
<p><strong>Intereses:</strong> {{ collect($application->intereses)->join(', ') ?: 'No indicados' }}</p>

<h2>Motivo</h2>
<p>{{ $application->motivo }}</p>
